---
sidebar_position: 7
tags:
  - langchain
  - ai
---

# Chat Uis

## Librechat

```bash
sudo pamac install mongodb-bin
sudo systemctl enable mongodb.service
sudo systemctl restart mongodb.service
mongosh 'mongodb://localhost:27017'

sudo pacman -S meilisearch redis
sudo systemctl enable redis
sudo systemctl restart redis
sudo systemctl enable meilisearch
sudo systemctl restart meilisearch

git clone https://github.com/danny-avila/LibreChat.git --depth=1
cd LibreChat
cp .env.example .env
nano .env
# Comment PLUGIN_MODELS, GOOGLE_API_KEY, openAI and other providers to disable them
# you may want to change ENDPOINTS variable and add ollama as well. not necessary
RAG_API_URL=http://127.0.0.1:11434/v1/
EMBEDDINGS_PROVIDER=ollama
OLLAMA_BASE_URL=http://127.0.0.1:11434/v1/
EMBEDDINGS_MODEL=mxbai-embed-large:latest
DEBUG_RAG_API=true

mv librechat.example.yaml librechat.yaml

custom:
  - name: "Ollama"
    apiKey: "ollama"
    baseURL: "http://127.0.0.1:11434/v1/"
    # or baseURL: "http://localhost:11434/v1/chat/completions" 
    models:
      default: [
        "llama3.1:8b"
        ]
      fetch: true
    titleConvo: true
    titleModel: "current_model"
fileConfig:
  endpoints:
    custom:
      fileLimit: 5
      fileSizeLimit: 10  # Maximum size for an individual file in MB
      totalSizeLimit: 50  # Maximum total size for all files in a single request in MB
      supportedMimeTypes:
        - "image/.*"
        - "application/pdf"
        - "application/text"
        - "application/x-sh"
        - "application/json"
        - "application/javascript"
        - "application/x-yaml"
        - "application/x-shellscript"
        - "application/text-plain"
        - "text/plain"
    default:
      totalSizeLimit: 20
      supportedMimeTypes:
        - "image/.*"
        - "application/pdf"
        - "application/text"
        - "application/x-sh"
        - "application/json"
        - "application/javascript"
        - "application/x-yaml"
        - "application/x-shellscript"
        - "application/text-plain"
        - "text/plain"
  serverFileSizeLimit: 100  # Global server file size limit in MB
  avatarSizeLimit: 2  # Limit for user avatar image size in MB

# local rag still need wokr https://github.com/danny-avila/LibreChat/discussions/3293
npm ci
npm run frontend
npm run backend
```

#### <https://github.com/mckaywrigley/chatbot-ui>

#### <https://github.com/open-webui/open-webui>

#### <https://github.com/huggingface/chat-ui>

#### <https://github.com/nomic-ai/gpt4all>

## LobeChat

```bash
curl -fsSL https://ollama.com/install.sh | sh
sudo systemctl enable ollama.service 
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
