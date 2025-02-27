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
FROM rocm/vllm-dev:main

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
docker pull docker.iranserver.com/rocm/vllm-dev:main
docker build -t vllm-toolkit .


docker run -it --rm \
    --device=/dev/kfd --device=/dev/dri \
    --group-add=$(getent group video | cut -d: -f3) \
    --group-add=$(getent group render | cut -d: -f3) \
    --ipc=host \
    --security-opt seccomp=unconfined \
    -p 8000:8000 \
    vllm-toolkit
```

## Env config

* FlashMLA
