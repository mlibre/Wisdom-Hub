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

Create a new project with this `package.json`:

```json
{
  "name": "openclaw-render",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "openclaw": "latest"
  },
  "scripts": {
    "start": "openclaw gateway --host 0.0.0.0 --port $PORT --password $OPENCLAW_GATEWAY_PASSWORD"
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

| Variable                    | Value                                                | Description                        |
| --------------------------- | ---------------------------------------------------- | ---------------------------------- |
| `OPENCLAW_GATEWAY_PASSWORD` | `your_secure_password`                               | Required. Protects your public UI. |
| `OPENCLAW_STATE_DIR`        | `/var/data`                                          | Where to save sessions/logins.     |
| `OPENAI_BASE_URL`           | `https://unified-ai-router-personal.onrender.com/v1` | AI Provider URL.                   |
| `OPENAI_API_KEY`            | `api_key`                                            | AI Provider Password.              |
| `PORT`                      | `8080`                                               | Port to run the service.           |

### 4. Alternative: Quick Install

For local installation or other environments:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash

openclaw onboard --non-interactive \
  --mode local \
  --install-daemon \
  --gateway-port 18789 \
  --gateway-bind loopback \
  --auth-choice custom-api-key \
  --custom-provider-id "custom-router" \
  --custom-base-url "https://unified-ai-router-personal.onrender.com/v1" \
  --custom-api-key "masoudsam" \
  --custom-model-id "openai/gpt-4o" \
  --custom-compatibility openai
```

## Usage

Once deployed, you can access OpenClaw through your Render service URL. The interface will be protected by the password you set.
