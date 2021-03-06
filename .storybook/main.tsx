module.exports = {
  "typescript": { "reactDocgen": false },
  "stories": [
    "./Introduction.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "node": {
    "Buffer": true
  }
}