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
pnpm dev
```