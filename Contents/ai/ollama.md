---
sidebar_position: 4
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

The resulting vector embedding arrays can then be stored in a database, which will compare them as a way to search for data that is similar in meaning

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
