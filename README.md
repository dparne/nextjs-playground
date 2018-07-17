# nextjs-playground

Trying an app in NextJS Version 7

## Starting Steps

- Run commands

```bash
npm init -y
npm install --save next react react-dom
mkdir pages
```

- Add to `package.json`

```javascript
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

- Using VS Code
- Setup eslint

```bash
npm install eslint --save-dev

./node_modules/.bin/eslint --init

? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Standard (https://github.com/standard/standard)
? What format do you want your config file to be in? JSON
? Would you like to install them now with npm? Yes

Successfully created .eslintrc.json
```

- Setup VS Code: Install GitLens, Markdown, ESLint and Beautify Extensions
- Update User Settings

```javascript
  // Place your settings in this file to overwrite the default settings
{
    "workbench.colorTheme": "Visual Studio Dark",
    "workbench.iconTheme": null,
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": false,
        "suppressShowKeyBindingsNotice": true
    },
    "markdown.extension.preview.autoShowPreviewToSide": true,
    "editor.formatOnSave": true
}
``` 