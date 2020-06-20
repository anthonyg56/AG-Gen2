const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX({
  // Pick up MDX files in the /pages/ directory
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  }
})