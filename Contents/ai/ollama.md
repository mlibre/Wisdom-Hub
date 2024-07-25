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
ollama run llama3.1:8b
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
