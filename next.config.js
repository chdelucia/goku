//@ts-check

 
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  output: 'export',
  distDir: 'out',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dragonball-api.com' 
      }
    ], 
  },
};

const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
