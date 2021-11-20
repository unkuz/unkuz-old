/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three']);
const withPWA = require('next-pwa');
const prod = process.env.NODE_ENV === 'production';
module.exports = withPWA(
  withTM({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: prod ? false : true,
    },
    webpack: (config, options) => {
      config.module.rules.push(
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: ['raw-loader', 'glslify-loader'],
        }
      );

      return config;
    },
  })
);
