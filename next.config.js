/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, "styles")],
  },
  modularizeImports: {
    "react-icons/fa": {
      transform: "react-icons/fa/{{member}}",
    },
  },
};

module.exports = nextConfig;
