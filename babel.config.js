module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@constants': './src/constants/',
          '@router': './src/router/',
          '@screens': './src/screens/',
          '@utils': './src/utils/'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
