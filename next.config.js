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

    async redirects() {
      return [
        {
          source: '/IMAGES/hyring.png',
          destination: 'https://hyring.nyc3.cdn.digitaloceanspaces.com/static/hyring.png',
          permanent: true,
        },
        {
          source: '/IMAGES/hyring1.png',
          destination: 'https://hyring.nyc3.cdn.digitaloceanspaces.com/static/hyring1.png',
          permanent: true,
        },
      ];
    },
};

module.exports = nextConfig;
