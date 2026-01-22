---
sidebar_position: 5
tags:
  - Linux
  - llama.cpp
  - offline
  - ai
---

# llama.cpp

Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine.

## Rocm

First make sure you have rocm or NVIDIA CUDA installed.

### Arch

```bash
sudo pacman -Syuu base-devel cmake gcc python3 rocm-hip-sdk  rocm-opencl-sdk rocm-opencl-runtime rocm-ml-libraries rocm-device-libs

sudo usermod -a -G render,video $(whoami)
sudo reboot
rocminfo
```

### Old GPUs

```bash
# If you are using RDNA or RDNA 2 architecture like AMD Radeon RX 6500 XT, you may need to follow this step:
sudo nano ~/.profile
# Add the following lines:
export HSA_OVERRIDE_GFX_VERSION=10.3.0
export ROC_ENABLE_PRE_VEGA=1
export ROCM_PATH=/opt/rocm
```

### Install

```bash
pamac install llama.cpp-hip
```


