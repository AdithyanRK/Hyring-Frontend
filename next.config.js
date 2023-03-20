/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  modularizeImports: {
    "react-icons/fa": {
      transform: "react-icons/fa/{{member}}",
    },
  },
};

module.exports = nextConfig;
