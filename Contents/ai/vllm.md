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
sudo pamac pacman -Ss docker containerd
sudo usermod -aG docker $USER
sudo usermod -aG video,render,docker $(whoami)
sudo groupadd -g 2000 vllm
sudo useradd -u 2000 -g vllm -m vllm
sudo usermod -aG video,render,docker vllm
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

nano dockerfile
```

```dockerfile
#FROM rocm/vllm-dev:main
FROM rocm/vllm:main

# Install development tools
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
RUN pip3 install --no-cache-dir \
    transformers \
    accelerate \
    safetensors

# Create non-root user for security
RUN useradd -m -u 2000 vllm
WORKDIR /app
RUN chown vllm:vllm /app

# Switch to non-root user
USER vllm
```

```bash
# docker pull docker.arvancloud.ir/rocm/vllm-dev:main
docker build -t vllm-toolkit .


docker run -it --rm \
    --device=/dev/kfd --device=/dev/dri \
    --group-add=$(getent group video | cut -d: -f3) \
    --group-add=$(getent group render | cut -d: -f3) \
    --ipc=host \
    --security-opt seccomp=unconfined \
    -p 8000:8000 \
    -v /etc/group:/etc/group:ro \
    -v /etc/passwd:/etc/passwd:ro \
    -v /home/vllm/.cache:/home/vllm/.cache \
    -e HF_HOME=/home/vllm/.cache/huggingface \
    --user 2000:2000 \
    -e HSA_OVERRIDE_GFX_VERSION=10.3.0 \
    -e ROC_ENABLE_PRE_VEGA=1 \
    -e VLLM_USE_TRITON_FLASH_ATTN=0 \
    -e TORCH_USE_HIP_DSA=1 \
    -e HIP_VISIBLE_DEVICES=0 \
    -e PYTORCH_ROCM_ARCH=gfx1031 \
    vllm-toolkit


vllm serve Qwen/Qwen2.5-1.5B-Instruct
```

## Env config

* FlashMLA
