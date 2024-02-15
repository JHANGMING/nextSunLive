/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        'http://4.224.41.94': 'http://4.224.41.94',
      });
    }
    return config;
  },
};

module.exports = nextConfig;
