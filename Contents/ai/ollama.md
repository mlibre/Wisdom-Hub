---
sidebar_position: 5
tags:
  - Linux
  - ollama
  - offline
  - ai
---

# Ollama

Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine.

## Install

```bash
sudo pacman -Syuu base-devel cmake gcc python3 rocm-hip-sdk rocm-opencl-sdk rocm-opencl-runtime rocm-ml-libraries rocm-device-libs

sudo rm -rf /usr/local/lib/ollama /usr/lib/ollama /etc/systemd/system/ollama.service

curl -fsSL https://ollama.com/install.sh | sh

# Run a model
ollama run ministral-3:3b

# List models
ollama list

# Loaded Models
ollama ps

# Model Info
ollama show ministral-3:3b
#   Model
#         arch                    llama
#         parameters              8.0B
#         quantization            Q4_0
#         context length          131072
#         embedding length        4096

#   Parameters
#         stop    "<|start_header_id|>"
#         stop    "<|end_header_id|>"
#         stop    "<|eot_id|>"

# Logs

sudo useradd -r -s /bin/false -U -m -d /usr/share/ollama ollama
sudo usermod -a -G ollama $(whoami)
sudo nano /etc/systemd/system/ollama.service
rocminfo | grep -i -C 3 uuid # GPU-XX 
# sudo setcap cap_perfmon+ep /usr/local/bin/ollama still make bugs

[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=$PATH"
Environment="HSA_OVERRIDE_GFX_VERSION=10.3.0"
Environment="HSA_OVERRIDE_GFX_VERSION_0=10.3.0"
Environment="ROC_ENABLE_PRE_VEGA=1"
Environment="TORCH_USE_HIP_DSA=1"
Environment="HIP_VISIBLE_DEVICES=0"
Environment="PYTORCH_ROCM_ARCH=gfx1030"
Environment="ROCR_VISIBLE_DEVICES=GPU-XX"
Environment="OLLAMA_VULKAN=1"
Environment="OLLAMA_CONTEXT_LENGTH=12000"

[Install]
WantedBy=multi-user.target

journalctl -u ollama.service --no-pager --follow 
```
