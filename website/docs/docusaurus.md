---
sidebar_position: 5
tags:
  - Docusaurus
---

# Docusaurus

Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation.  
It provides out-of-the-box documentation features but can be used to create any kind of site.

⚡️ Docusaurus will help you ship a beautiful documentation site in no time  
💸 Building a custom tech stack is expensive. Instead, focus on your content and just write Markdown files  
💥 Use advanced features like versioning, i18n, search and theme customizations

## Install

```bash
nano .gitignore
node_modules

npx create-docusaurus@latest website classic
cd website

# npx create-docusaurus@latest --help
```

## Configuration

```bash
nano package.json
"mybuild": "rm -r .docusaurus/; rm -r docs/*;cp ../*.md docs/; docusaurus build; rm -rf ../docs ; cp -r build ../docs",
"build": "rm -rf build; docusaurus build",

nano docusaurus.config.js
```

## Run

```bash
# Starts the development server.
npm start

# Bundles your website into static files for production into the "build" folder
npm run build

# Serves the built website locally
npm run serve

# Publishes the website to GitHub pages
npm deploy
```

## Resources

- Website: <https://docusaurus.io/docs>
