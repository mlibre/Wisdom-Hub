---
sidebar_position: 6
tags:
  - Linux
  - ollama
  - offline
  - ai
---

# Ollama

Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine.

## Rocm

First make sure you have rocm or NVIDIA CUDA installed.

```bash
# pyenv is a tool to manage multiple versions of Python
curl https://pyenv.run | bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source  ~/.zshrc
pyenv install 3.12
pyenv versions
pyenv global 3.12
# or use system to get back to system python
# pyenv global system


pip install --upgrade pip --break-system-packages
# If you have permission issues
# sudo chmod a+rwx /usr/lib/python3.12/ -R


# Arch users
# https://wiki.archlinux.org/title/GPGPU
sudo pamac install opencl-amd --no-confirm
# Or
# sudo pamac install rocm-core rocm-hip-sdk rocm-opencl-sdk --no-confirm
sudo usermod -a -G render,video $LOGNAME
sudo reboot
rocminfo


# Ubuntu Users
# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html
# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/native-install/ubuntu.html
# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/amdgpu-install.html
# https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/post-install.html
sudo apt update
sudo apt install "linux-headers-$(uname -r)" "linux-modules-extra-$(uname -r)"
sudo usermod -a -G render,video $LOGNAME # Add the current user to the render and video groups
wget https://repo.radeon.com/amdgpu-install/6.2/ubuntu/noble/amdgpu-install_6.2.60200-1_all.deb
sudo apt install ./amdgpu-install_6.2.60200-1_all.deb
sudo apt update
sudo apt install amdgpu-dkms rocm


# If you are using RDNA or RDNA 2 architecture like AMD Radeon RX 6500 XT, you may need to follow this step:
sudo nano ~/.profile
# Add the following lines:
export HSA_OVERRIDE_GFX_VERSION=10.3.0
export ROC_ENABLE_PRE_VEGA=1


# https://www.tensorflow.org/install/pip
pip uninstall tensorflow tensorflow-rocm numpy --break-system-packages
pip install tensorflow --break-system-packages
pip install https://repo.radeon.com/rocm/manylinux/rocm-rel-6.1.3/tensorflow_rocm-2.15.1-cp312-cp312-manylinux_2_28_x86_64.whl numpy==1.26.4 --break-system-packages
# cp312 means you need to have python 3.12


# https://pytorch.org/
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1 --break-system-packages
```

* Check GPU support

```bash
import tensorflow as tf
import torch

print(tf.config.list_physical_devices())
print(tf.__version__)

print(torch.cuda.is_available())
print(torch.version.hip)
```

## Install

```bash
curl -fsSL https://ollama.com/install.sh | sh

# Run a model
ollama run llama3.1:8b

# List models
ollama list

# Loaded Models
ollama ps

# Model Info
ollama show llama3.1:8b
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
journalctl -u ollama.service --no-pager --follow 

```

## Docker

ollama supports docker images. You can either use official images or build your own.

You need to have [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation) installed for NVIDIA GPUs.  

And `rocm` for AMD GPUs.

```bash
# NVIDIA
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
# AMD
docker run -d --device /dev/kfd --device /dev/dri -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:rocm
# Run a model
docker exec -it ollama ollama run llama2
```

You can also build your own GPU supported image:

```bash
./scripts/build_linux.sh
```

## Files

Ollama files in Linux are located here:

```bash
/home/mlibre/.ollama
/usr/local/bin/ollama
/usr/share/ollama
/etc/systemd/system/ollama.service
/etc/systemd/system/default.target.wants/ollama.service
```

## Usage

```bash

# Generate text
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1:8b",
  "prompt":"Why is the sky blue?"
}'

# Chat
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [
    { "role": "user", "content": "why is the sky blue?" }
  ],
  "stream": false,
  "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"
}' | jq

# Chat with history
curl -s http://localhost:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [
    {
      "role": "user",
      "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"
    },
    {
      "role": "assistant",
      "content": "👋💁"
    },
    {
      "role": "user",
      "content": "hey"
    }
  ],
  "stream": false,
  "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"
}' | jq

# Embeddings
curl http://localhost:11434/api/embed -d '{
  "model": "llama3.1:8b",
  "prompt":"Why is the sky blue?"
}'

# OpenAI Compatibile
curl -s http://localhost:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3.1:8b",
    "messages": [
      {
        "role": "user",
        "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"
      },
      {
        "role": "assistant",
        "content": "👋💁"
      },
      {
        "role": "user",
        "content": "hey"
      }
    ],
    "stream": false,
    "system": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"
  }' | jq

curl -s http://localhost:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3.1:8b",
    "messages": [
      {
        "role": "system",
        "content": "You are Sarah. you only uses emojies to answer and nothings else. you only uses one emoji each time"
      },
      {
        "role": "user",
        "content": "hey"
      }
    ],
    "stream": false
  }' | jq
```

## Costomizing Model

```bash
nano Modelfile

FROM llama3.1:8b

SYSTEM """
You are Mario from Super Mario Bros. Answer as Mario, only. And Always start your answer with HAYAYAYA
"""
```

```bash
ollama create mario -f ./Modelfile
ollama run mario
```

## Embedding models

Ollama supports embedding models, making it possible to build retrieval augmented generation (RAG) applications that combine text prompts with existing documents or other data.

Embedding models are models that are trained specifically to generate vector embeddings.

![alt text](embedding-models.png)

The resulting vector embedding arrays can then be stored in a database, which will compare them as a way to search for data that is similar in meaning.

You can store as many text as you want in these vector databases, such as a [vector database](https://www.trychroma.com/). for example you can embed some books, and then ask chroma to find the most similar text to a given input. you then send chroma output to a LLM, and the LLM can use the context of the text to generate a response.

> more information is here: <https://ollama.com/blog/embedding-models>

### Installation

```bash
ollama pull mxbai-embed-large

curl http://localhost:11434/api/embeddings -d '{
  "model": "mxbai-embed-large",
  "prompt": "Llamas are members of the camelid family"
}'
```

## Configuration

```bash
sudo systemctl edit --full ollama.service
Environment="OLLAMA_HOST=0.0.0.0"
```

## Memory and Quantization Options

When working with models like the Codestral 22B, you have several quantization options that affect both memory usage and accuracy:

* 32-bit floating-point: Uses 88 GB of memory (22 x 4 = 88G) and is the most accurate
* 16-bit floating-point: Uses 44 GB of memory (22 x 2 = 44G)
* 8-bit floating-point: Uses 22 GB of memory (22 x 1 = 22G)
* 4-bit floating-point: Uses 11 GB of memory (22 x 1/2 = 11G) and is less accurate

These options allow you to balance between model accuracy and the amount of memory used, depending on your system's resources and the specific needs of your application.

### GPU Compatibility

To effectively run models like Codestral 22B, you need a GPU with sufficient memory to handle the model's requirements:

* **RTX 6000**: With 48 GB of memory, this GPU can handle 16-bit floating-point quantization (44G) and lower, providing a good balance of accuracy and performance.
* **NVIDIA RTX 4090**: With 24 GB of memory, this GPU is suited for 8-bit floating-point quantization (22G) and below.
* **GeForce GTX 1080 Ti**: With 11 GB of memory, this GPU is limited to 4-bit floating-point quantization (11G), which may result in reduced accuracy but still allows you to run the model on less capable hardware.

You can find full list of ollama supported gpus here: <https://github.com/ollama/ollama/blob/main/docs/gpu.md>

## Uninstall

```bash
sudo systemctl stop ollama
sudo systemctl disable ollama
sudo rm /etc/systemd/system/ollama.service
sudo rm $(which ollama)
sudo rm -r /usr/share/ollama
sudo rm -r ~/.ollama
sudo userdel ollama
sudo groupdel ollama
```

## Reference

* <https://ollama.com/>
