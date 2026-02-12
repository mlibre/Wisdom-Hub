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
        "baseUrl": "https://unified-ai-router-personal.onrender.com/",
        "apiKey": "API_KEY",
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
      "botToken": "8189218311:AAH92Xt33VMtJVO9TbnnjLT0drq24pN8Wo0",
      "dmPolicy": "open",
      "allowFrom": [
        "*"
      ]
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

| Variable                    | Value                  | Description                                                      |
| --------------------------- | ---------------------- | ---------------------------------------------------------------- |
| `OPENCLAW_GATEWAY_PASSWORD` | `your_secure_password` | Required. Protects your public UI (referenced in openclaw.json). |
| `OPENCLAW_STATE_DIR`        | `/var/data`            | Where to save sessions/logins.                                   |
| `MY_MODEL_API_KEY`          | `sk-moytoken`          | AI Provider API token (referenced in openclaw.json).             |
| `PORT`                      | `8080`                 | Port to run the service.                                         |

**Note**: The `OPENAI_BASE_URL` and model configuration are now specified in the `openclaw.json` file.

## Usage

Once deployed, you can access OpenClaw through your Render service URL. The interface will be protected by the password you set.
