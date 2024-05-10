---
sidebar_position: 6
title: Vscode
tags:
  - vscode
---

# Vscode cheat sheet

A cheat sheet for Vscode.

* [Vscode](#vscode)
* [Extensions](#extensions)
* [Editor Shortcuts](#editor-shortcuts)
* [Keybindings](#keybindings)
* [Git](#git)
  * [Vscode for merge and diff](#vscode-for-merge-and-diff)
  * [Git Configs](#git-configs)
  * [Github Actions](#github-actions)
    * [Publish A Package On the NPM Registry](#publish-a-package-on-the-npm-registry)
    * [Bundling and Committing a Node Module using Browserify](#bundling-and-committing-a-node-module-using-browserify)
* [Cleaning NPM Cache](#cleaning-npm-cache)
* [Settings JSON](#settings-json)
* [Eslint Configuration](#eslint-configuration)

## Vscode

- `Palette`  **CTRL + P**
- `Command Palette`  **CTRL + SHIFT + P**
  - `Git Clone`
  - `Merge`
- `Type Checking`

 ```javascript
 // @ts-nocheck
 // @ts-check
 ```

- Built-in `Terminal`  **CTRL + `**
  - Select `Javascript Debug Terminal` as `Default Profile`
- Extensions **CTRL + SHIFT + X**
- Closing built-in `Terminal`  **CTRL + D**
- Find And `Replace`  **CTRL + F**, **CTRL + H**
- Find And `Replace Globally`  **CTRL + SHIFT + F**, **CTRL + SHIFT + H**
- Side By Side Editing  **CTRL + \\**
- Fullscreen  **F11**
- Markdown Preview **CTRL + SHIFT + V**
- Split Markdown Preview **ALT + O**
- Sidebar Toggle **CTRL + B**
- Zoom in/out the whole vscode **CTRL + and CTRL -**
- Font size **CTRL + Mouse wheel**
- Fast Scrolling **ALT + Mouse wheel**
- Folding Level 1 **Alt+1**

---

## Extensions

Disable all the extensions by default. Use enable for workspace option in projects.

- bungcip.better-toml
- streetsidesoftware.code-spell-checker
- dbaeumer.vscode-eslint
- GitHub.copilot
- yzhang.markdown-all-in-one
  - Run command `Create Table of Contents` to insert a new table of contents.
- davidanson.vscode-markdownlint
- emmanuelbeziat.vscode-great-icons
- ms-vscode-remote.remote-containers
- ms-vscode-remote.remote-ssh
- ms-vscode-remote.remote-ssh-edit
- rangav.vscode-thunder-client
- JuanBlanco.solidity

## Editor Shortcuts

* **CTRL + .**: Suggest `Quick Fix`
* **CTRL + C**: `Copy` an entire line (when no text is selected)
* **CTRL + SHIFT + K**: `Delete` an entire line (when no text is selected)
* **CTRL + X**: `Cut` an entire line (when no text is selected)
* **ALT + ARROWS**: `Move` an entire line
* **CTRL + L**: `Select` the current line
* **CTRL + SPACE**: Invoke IntelliSense
* **Hold ALT and select**: Multiple selections (multi-cursor)
* **CTRL + SHIFT + [ , ]**: Code `Folding`
* **CTRL + SHIFT + R**: All `Refactoring`
* **F2**: `Rename` Refactoring
* **F8**: `Navigating` on Errors and Warnings
* **F12**: Go to Definition

---

## Keybindings

```json
[
 {
  "key": "ctrl+alt+;",
  "command": "workbench.action.closeWindow"
 },
 {
  "key": "ctrl+shift+w",
  "command": "-workbench.action.closeWindow"
 },
 {
  "key": "ctrl+alt+'",
  "command": "workbench.action.closeActiveEditor"
 },
 {
  "key": "ctrl+w",
  "command": "-workbench.action.closeActiveEditor"
 },
 {
  "key": "ctrl+alt+\\",
  "command": "workbench.action.closeGroup",
  "when": "activeEditorGroupEmpty && multipleEditorGroups"
 },
 {
  "key": "ctrl+w",
  "command": "-workbench.action.closeGroup",
  "when": "activeEditorGroupEmpty && multipleEditorGroups"
 },
 {
  "key": "alt+o",
  "command": "markdown.showPreviewToSide",
  "when": "!notebookEditorFocused && editorLangId == 'markdown'"
 },
 {
  "key": "ctrl+k v",
  "command": "-markdown.showPreviewToSide",
  "when": "!notebookEditorFocused && editorLangId == 'markdown'"
 },
 {
  "key": "ctrl+alt+tab",
  "command": "markdown.extension.onTabKey",
  "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !suggestWidgetVisible && editorLangId == 'markdown'"
 },
 {
  "key": "tab",
  "command": "-markdown.extension.onTabKey",
  "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !suggestWidgetVisible && editorLangId == 'markdown'"
 },
 {
  "key": "ctrl+t ctrl+r",
  "command": "workbench.action.tasks.build"
 },
 {
  "key": "ctrl+shift+b",
  "command": "-workbench.action.tasks.build"
 },
 {
  "key": "ctrl+shift+b",
  "command": "markdown.extension.editing.toggleBold",
  "when": "editorTextFocus && !editorReadonly && editorLangId == 'markdown'"
 },
 {
  "key": "ctrl+b",
  "command": "-markdown.extension.editing.toggleBold",
  "when": "editorTextFocus && !editorReadonly && editorLangId == 'markdown'"
 },
 {
  "key": "alt+1",
  "command": "-workbench.action.openEditorAtIndex1"
 },
 {
  "key": "alt+1",
  "command": "editor.foldLevel1",
  "when": "editorTextFocus && foldingEnabled"
 },
 {
  "key": "ctrl+k ctrl+1",
  "command": "-editor.foldLevel1",
  "when": "editorTextFocus && foldingEnabled"
 }
]
```

## Git

### Vscode for merge and diff

```bash
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
git config --global core.autocrlf true
```

### Git Configs

```bash
git config user.email m.gh@linuxmail.org
git config user.name mlibre
git config --global credential.helper store

git config --global user.name "mlibre"
git config --global user.email "m.gh@linuxmail.org"
git config --global core.autocrlf input
git config --global core.fileMode false
git config core.autocrlf input
git config core.fileMode false

git add --renormalize .
```

### Github Actions

#### Publish A Package On the NPM Registry

1. Create an NPM token: **<https://www.npmjs.com/settings/mlibre/tokens/>**
2. Create a secret variable named `NPM_TOKEN` from the Github repository settings: **<https://github.com/mlibre/Ethereum-Smart-Contract-Deployer/settings/secrets/actions/new>**
3. Create a `yml` file in the repository: `.github/workflows/npm.yml`

```yml
name: Publish on NPM registry

on:
  push:
    branches: ['master']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 14.x
          registry-url: https://registry.npmjs.org/
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

#### Bundling and Committing a Node Module using Browserify

Create a yml file in the repository: `.github/workflows/browserify.yml`

```yml
name: Browserify Bundle

on:
  push:
    branches: ['master']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 14.x
          registry-url: https://registry.npmjs.org/
      # - run: npm install
      - run: npm install
      - run: npm install -g browserify
      - run: browserify -r ./main.js:EthereumTokens -o ./web/bundle.js
      - run: |
          git config --global user.name 'mlibre'
          git config --global user.email 'm.gh@linuxmail.org'
          git add web
          git commit -am "Automated bundle"
          git push

```

## Cleaning NPM Cache

```bash
rm -r node_modules/
npm cache clean --force
sudo npm cache clean --force -g
sudo pacman -R nodejs-lts-fermium npm
# sudo pacman -R nodejs npm
sudo rm -r ~/.npm
rm -r ~/.node-gyp/
rm -r .cache/node-gyp/
sudo rm -r /usr/local/lib/node_modules/
sudo rm -r /usr/lib/node_modules/
sudo pacman -S nodejs-lts-fermium npm
# sudo pacman -S nodejs npm
# Restart the OS
```

## Settings JSON

```json
{
    "breadcrumbs.enabled": false,
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.accessibilitySupport": "off",
    "editor.copyWithSyntaxHighlighting": false,
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.fontFamily": "'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback', 'Fira Code Retina'",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.inlineSuggest.enabled": true,
    "editor.inlineSuggest.suppressSuggestions": true,
    "editor.insertSpaces": false,
    "editor.minimap.enabled": false,
    "editor.mouseWheelZoom": true,
    "editor.parameterHints.enabled": true,
    "editor.smoothScrolling": true,
    "editor.stickyScroll.enabled": true,
    "editor.tabSize": 3,
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.codeActionsOnSave": {
        "source.organizeImports": "always",
        "source.fixAll": "always"
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "[jsonc]": {
        "editor.quickSuggestions": {
            "strings": true
        },
        "editor.defaultFormatter": "vscode.json-language-features",
    },
    "[markdown]": {
        "editor.defaultFormatter": "yzhang.markdown-all-in-one"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    },
    "[typescript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    // "typescript.inlayHints.parameterNames.enabled": "all",
    // "typescript.inlayHints.variableTypes.enabled": true,
    "typescript.referencesCodeLens.enabled": true,
    // "eslint.codeActionsOnSave.rules": null,
    "eslint.debug": true,
    "eslint.enable": true,
    "eslint.experimental.useFlatConfig": true,
    "eslint.format.enable": true,
    "explorer.autoReveal": false,
    "explorer.compactFolders": false,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "git.autofetch": true,
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.ignoreRebaseWarning": true,
    "git.pullTags": false,
    "http.proxyStrictSSL": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "javascript.validate.enable": false,
    "markdownlint.config": {
        "single-h1": false
    },
    "search.exclude": {
        "**/docs/*/**": true,
        "**/logs/**": true,
        "**/logs/*/**": true,
        "**/node_modules/*/**": true,
        "**/.git": true
    },
    "files.exclude": {
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/**.js": {
            "when": "$(basename).tsx"
        }
    },
    "security.workspace.trust.untrustedFiles": "open",
    "telemetry.telemetryLevel": "off",
    "terminal.explorerKind": "integrated",
    "terminal.integrated.defaultProfile.linux": "JavaScript Debug Terminal",
    "terminal.integrated.persistentSessionScrollback": 1000,
    "terminal.integrated.scrollback": 10000,
    "terminal.integrated.smoothScrolling": true,
    "update.mode": "none",
    "window.commandCenter": false,
    "window.dialogStyle": "custom",
    "window.titleBarStyle": "custom",
    "window.zoomLevel": 1,
    "workbench.iconTheme": "vscode-great-icons",
    "workbench.layoutControl.enabled": false,
    "workbench.layoutControl.type": "menu",
    "workbench.list.smoothScrolling": true,
    "extensions.autoCheckUpdates": false,
    "extensions.autoUpdate": "onlyEnabledExtensions",
    "markdown.extension.tableFormatter.normalizeIndentation": true,
    "markdown.extension.toc.unorderedList.marker": "*",
    "markdown.extension.toc.updateOnSave": false,
    "markdown.extension.toc.levels": "2..6",
    "markdown.extension.completion.respectVscodeSearchExclude": true,
    "markdown.extension.theming.decoration.renderCodeSpan": false,
    "cody.telemetry.level": "off",
    "workbench.colorTheme": "Default Dark+"
}
```

## Eslint Configuration

```javascript
module.exports = {
 "env": {
  "commonjs": true,
  "node": true,
  "mocha": true
 },
 "extends": [
  "eslint:recommended",
  "plugin:node/recommended"
 ],
 "parserOptions": {
  "ecmaVersion": 13,
  "impliedStrict": true
 },
 "rules": {
  "no-trailing-spaces": "error",
  "linebreak-style": [ "error", "unix" ],
  "quotes": [ "error", "double" ],
  "one-var": [ "error", "never" ],
  "brace-style": [ "error", "allman", { "allowSingleLine": true } ],
  "space-before-blocks": [ "warn" ],
  "func-call-spacing": [ "error", "never" ],
  "space-before-function-paren": [ "error", "always" ],
  "space-in-parens": [ "error", "always", { "exceptions": [ "{}" ] } ],
  "keyword-spacing": [ "error" ],
  "comma-spacing": [ "error" ],
  "space-unary-ops": [ "error" ],
  "block-spacing": [ "error" ],
  "arrow-spacing": [ "error" ],
  "key-spacing": [ "error" ],
  "comma-style": [ "error" ],
  "space-infix-ops": [ "error" ],
  "array-bracket-spacing": [ "error", "always" ],
  "object-curly-spacing": [ "error", "always" ],
  "no-multi-spaces": [ "error" ],
  "operator-linebreak": [ "error", "after" ],
  "function-paren-newline": [ "warn" ],
  // "arrow-parens": [
  //  "error",
  //  "always"
  // ],
  "arrow-body-style": [ "error", "always" ],
  "no-template-curly-in-string": [ "error" ],
  "prefer-const": [
   "error",
   {
    "destructuring": "any",
    "ignoreReadBeforeAssign": false
   }
  ],
  "no-new-object": [ "error" ],
  "no-extra-parens": [
   "error",
   "all",
   {
    "conditionalAssign": false
   }
  ],
  "no-empty-function": [ "error" ],
  "no-empty": [
   "warn",
   {
    "allowEmptyCatch": true
   }
  ],
  "no-eq-null": [ "error" ],
  "no-extra-bind": [ "error" ],
  "no-self-compare": [ "error" ],
  "no-useless-call": [ "error" ],
  "no-undefined": [ "error" ],
  "no-undef": [ "warn" ],
  "no-array-constructor": [ "error" ],
  "prefer-destructuring": [
   "error", {
    "VariableDeclarator": {
     "array": true,
     "object": true
    },
    "AssignmentExpression": {
     "array": false,
     "object": false
    }
   },
   {
    "enforceForRenamedProperties": false
   }
  ],
  "object-shorthand": [ "warn" ],
  "prefer-spread": [ "warn" ],
  "prefer-template": [ "warn" ],
  "no-loop-func": [ "warn" ],
  "prefer-rest-params": [ "warn" ],
  "no-new-func": [ "warn" ],
  "no-unneeded-ternary": [ "warn" ],
  "no-process-exit": "off",
  "require-await": "warn",
  "indent": [
   "error",
   "tab",
   {
    "MemberExpression": 0
   }
  ],
  "no-tabs": 0,
  "node/no-unpublished-import": "off",
  "node/no-unpublished-require": "off",
  "node/no-missing-import": "off",
  "node/no-unsupported-features/es-syntax": "off",
 }
}
```
