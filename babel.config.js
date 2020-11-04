module.exports = {
  presets: ["next/babel"],
  plugins: [
    "@loadable/babel-plugin",
    ["styled-components", { "ssr": true }],
    "inline-react-svg"

  ]
};
