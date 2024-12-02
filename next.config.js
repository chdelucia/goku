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
  basePath: '/goku',
  assetPrefix: '/goku',
  images: {
    loader: 'imgix', 
    path: '', 
    domains: ['dragonball-api.com'],
    disableStaticImages: true,

  },
};

const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
