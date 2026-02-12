---
sidebar_position: 11
title: OpenClaw
tags:
  - openclaw
  - ai
  - server
  - headless
---

# OpenClaw Installation Guide

A simple guide to install OpenClaw on server/headless environments using Render.

## What is OpenClaw?

OpenClaw is an AI-powered automation tool that provides a web interface for interacting with AI models through a unified gateway.

## Installation on Render

### 1. Create Project Structure

Create these files in your project:

**package.json**

```json
{
  "name": "openclaw-render",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "openclaw": "latest"
  },
  "scripts": {
    "start": "openclaw gateway --host 0.0.0.0 --port $PORT"
  }
}
```

**openclaw.json** (Configuration File)

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "agents": {
    "defaults": {
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      },
      "compaction": {
        "mode": "safeguard"
      },
      "workspace": "/home/mlibre/.openclaw/workspace",
      "model": {
        "primary": "localai/mymodel"
      },
      "models": {
        "localai/mymodel": {}
      }
    }
  },
  "models": {
    "providers": {
      "localai": {
        "baseUrl": "env:MODEL_BASE_URL",
        "apiKey": "env:MODEL_API_KEY",
        "api": "openai-completions",
        "models": [
          {
            "id": "local model",
            "name": "Local AI Model"
          }
        ]
      }
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "password",
      "password": "env:OPENCLAW_GATEWAY_PASSWORD"
    },
    "controlUi": {
      "allowInsecureAuth": true,
      "enabled": true
    },
    "port": 8080,
    "bind": "loopback",
    "tailscale": {
      "mode": "funnel",
      "resetOnExit": true
    },
    "nodes": {
      "denyCommands": [
        "camera.snap",
        "camera.clip",
        "screen.record",
        "calendar.add",
        "contacts.add",
        "reminders.add"
      ]
    }
  },
  "plugins": {
    "entries": {
      "telegram": {
        "enabled": true
      }
    }
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "env:OPENCLAW_TELEGRAM_TOKEN",
      "dmPolicy": "open",
      "allowFrom": [
        "*"
      ],
      "groupPolicy": "open",
      "groupAllowFrom": [
        "*"
      ],
      "groups": {
        "*": {
          "requireMention": false,
          "groupPolicy": "open"
        }
      },
      "commands": {
        "native": "auto"
      },
      "streamMode": "partial",
      "draftChunk": {
        "minChars": 200,
        "maxChars": 800,
        "breakPreference": "paragraph"
      },
      "blockStreaming": false,
      "textChunkLimit": 4000,
      "chunkMode": "newline",
      "linkPreview": true,
      "mediaMaxMb": 5,
      "historyLimit": 50,
      "dmHistoryLimit": 100,
      "replyToMode": "first",
      "reactionNotifications": "all",
      "reactionLevel": "extensive",
      "configWrites": true,
      "capabilities": {
        "inlineButtons": "all"
      },
      "actions": {
        "sendMessage": true,
        "editMessage": true,
        "deleteMessage": true,
        "reactions": true,
        "sticker": true
      }
    }
  },
  "skills": {
    "install": {
      "nodeManager": "npm"
    }
  },
  "hooks": {
    "internal": {
      "enabled": true,
      "entries": {
        "session-memory": {
          "enabled": true
        },
        "command-logger": {
          "enabled": true
        },
        "boot-md": {
          "enabled": true
        }
      }
    }
  },
  "wizard": {
    "lastRunAt": "2026-02-12T16:31:53.392Z",
    "lastRunVersion": "2026.2.9",
    "lastRunCommand": "onboard",
    "lastRunMode": "local"
  },
  "meta": {
    "lastTouchedVersion": "2026.2.9",
    "lastTouchedAt": "2026-02-12T16:31:53.399Z"
  }
}

```

### 2. Deploy on Render

1. Go to [Render.com](https://render.com) and create a new **Web Service**
2. Connect your repository containing the `package.json`
3. Configure the deployment:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 3. Set Environment Variables

Add these environment variables in Render's dashboard:

| Variable                    | Value                | Description                       |
| --------------------------- | -------------------- | --------------------------------- |
| `OPENCLAW_GATEWAY_PASSWORD` | `your_password`      | Required. Protects your public UI |
| `OPENCLAW_STATE_DIR`        | `/var/data`          | Where to save sessions/logins.    |
| `MODEL_API_KEY`             | `provider-api-key`   | AI Provider API token             |
| `MODEL_BASE_URL`            | `provider-base=url`  | AI Provider Base URL              |
| `OPENCLAW_TELEGRAM_TOKEN`   | `telegram-bot-token` | Telegram Bot                      |
| `PORT`                      | `8080`               | Port to run the service           |

## Usage

Once deployed, you can access OpenClaw through your Render service URL. The interface will be protected by the password you set.
