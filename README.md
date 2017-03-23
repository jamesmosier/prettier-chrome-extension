# Prettier Chrome Extension

Format your JavaScript code using the [Prettier](https://github.com/prettier/prettier) library on any editable element (`textarea` and `input[type=text]`, for now).

## Background
[sebmarkbage](https://twitter.com/sebmarkbage/status/843866641515536384) had an idea for a tool that will format your JavaScript code that is **not** in your code editor/IDE. This is the implementation I came up with.

## Usage

1. Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/prettier-chrome-extension/khnhpkjhoogpgnbhagabcnamppfohhjd) to get started.
2. Ensure your code fences are defined as JS blocks: 

\```js 

var abc = 123; 

\```

3. Format your code via a handy context menu.

## Options

All the options that are defined in [Prettier API](https://github.com/prettier/prettier#api) are available to be set using the extensions options page.


## Thanks!

Thanks to [Sebastian Markbåge](https://twitter.com/sebmarkbage) for the idea, [Prettier](https://github.com/prettier/prettier) for the great tool, and Samuel Simões for the [boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate) for this project.
