/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        crypto: require.resolve("crypto-browserify"),
        // stream: require.resolve("stream-browserify"),
        // assert: require.resolve("assert"),
        // http: require.resolve("stream-http"),
        // os: require.resolve("os-browserify"),
        // https: require.resolve("https-browserify"),
        // url: require.resolve("url"),
        // zlib: require.resolve("browserify-zlib"),
        // path: require.resolve("path-browserify"),
        // "process/browser": require.resolve("process/browser"),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
