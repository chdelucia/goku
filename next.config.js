//@ts-check

 
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  //output: 'export',
  assetPrefix: '/',
  basePath: '/goku',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dragonball-api.com' 
      }
    ], 
  },
};
//module.exports = nextConfig;
const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
