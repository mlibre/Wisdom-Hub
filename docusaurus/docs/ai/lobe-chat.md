---
sidebar_position: 4
tags:
  - Linux
  - langchain
  - ai
---

# LobeChat

## Install

```bash
curl -fsSL https://ollama.com/install.sh | sh
sudo systemctl disable ollama.service 
ollama pull llama2

curl -fsSL https://get.pnpm.io/install.sh | sh -
git --depth 1 clone https://github.com/lobehub/lobe-chat.git
# git fetch --unshallow 
# git pull --all
cd lobe-chat
pnpm install
mv .env.example .env
OLLAMA_PROXY_URL=http://127.0.0.1:11434/v1
OLLAMA_MODEL_LIST=llama2

pnpm dev
```
