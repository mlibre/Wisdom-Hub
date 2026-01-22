---
sidebar_position: 6
tags:
  - Linux
  - vllm
  - offline
  - ai
  - LLM
---

# vllm

## Rocm

### Install

```bash
sh -c 'echo 0 > /proc/sys/kernel/numa_balancing'
cat /proc/sys/kernel/numa_balancing
```

#### Using Docker

```bash
sudo pacman -Ss docker containerd
sudo usermod -aG docker $USER
sudo usermod -aG video,render,docker $(whoami)
sudo groupadd -g 2000 vllm
sudo useradd -u 2000 -g vllm -m vllm
sudo usermod -aG video,render,docker,network vllm
sudo mkdir -p /home/vllm/.cache/huggingface
sudo chown -R 2000:2000 /home/vllm/.cache
sudo chmod -R 777 /home/vllm/.cache

sudo mkdir /etc/docker/
sudo bash -c 'cat > /etc/docker/daemon.json <<EOF
{
  "insecure-registries" : ["https://docker.arvancloud.ir"],
  "registry-mirrors": ["https://docker.arvancloud.ir"],
  "features": {
    "containerd-snapshotter": true,
    "buildkit": true
  }
}
EOF' 

sudo systemctl enable docker
sudo systemctl daemon-reload
docker logout
sudo systemctl restart docker

sudo reboot
rocminfo | grep -i gfx

```

```bash
# https://vllm.ai/#quick-start
docker run --rm \
    --group-add=video \
    --group-add=render \
    --cap-add=SYS_PTRACE \
    --security-opt seccomp=unconfined \
    --security-opt apparmor=unconfined \
    --device /dev/kfd \
    --device /dev/dri \
    -v ~/.cache/huggingface:/root/.cache/huggingface \
    -e HSA_OVERRIDE_GFX_VERSION=10.3.0 \
    -e ROC_ENABLE_PRE_VEGA=1 \
    -e VLLM_USE_TRITON_FLASH_ATTN=0 \
    -e TORCH_USE_HIP_DSA=1 \
    -e HIP_VISIBLE_DEVICES=0 \
    -e PYTORCH_ROCM_ARCH=gfx1030 \
    --env "HF_TOKEN=token" \
    -e HTTPS_PROXY=http://localhost:10808 \
    -p 8000:8000 \
    --ipc=host \
    --network=host \
    vllm/vllm-openai-rocm:v0.14.0 \
    --max-model-len auto \
    Qwen/Qwen3-0.6B
```
