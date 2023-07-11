module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@common': './src/common',
          '@assets': './src/assets',
        },
        extensions: [
          '.android.ts',
          '.android.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
  ],
};
