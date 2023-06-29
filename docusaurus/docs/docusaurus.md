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

npx create-docusaurus@latest docusaurus classic
cd website

# npx create-docusaurus@latest --help
```

## Configuration

```bash
nano package.json
"mybuild": "rm -r .docusaurus/; rm -r docs/; rm -rf ../docs; cp -r ../Tutorials docs/; docusaurus build; cp -r build ../docs"

nano docusaurus.config.js
# Visit https://github.com/mlibre/Tutorials/blob/master/website/docusaurus.config.js
```

## Run

```bash
# Starts the development server.
npm start

# Bundles your website into static files for production into the "build" folder
npm run build

# Build  website for github pages
npm run mybuild

# Serves the built website locally
npm run serve

# Publishes the website to GitHub pages
npm deploy
```

## Github Actions

```bash
mkdir -p .github/workflows
nano .github/workflows/npm.yml
```

```yml
name: Generate Docs Folder

on:
  push:
    branches: ['master']

jobs:
  build:
    name: Make Website
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20.x
      
      - name: Build docs
        working-directory: ./docusaurus
        run: npm install; npm run mybuild

      - name: Commit and push changes
        run: |
          git config --global user.name "mlibre"
          git config --global user.email "m.gh@linuxmail.org"
          git config --global core.autocrlf input
          git config --global core.fileMode false
          git config core.autocrlf input
          git config core.fileMode false
          git add .
          git commit -m "Build docs"
          git push
```

## Troubleshooting

Refresh the git repo, if anything is wrong with it:

```bash
git config --global user.name "mlibre"
git config --global user.email "m.gh@linuxmail.org"
git config --global core.autocrlf input
git config --global core.fileMode false
git config core.autocrlf input
git config core.fileMode false
git add --renormalize .
git commit -m "Build docs"
git push
```

## Resources

- Website: <https://docusaurus.io/docs>
