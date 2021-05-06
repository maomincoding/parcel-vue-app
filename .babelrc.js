module.exports = {
  plugins: [
    '@parcel/babel-plugin-transform-runtime',
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
};
