module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    ['inline-react-svg', { }],
    ['file-loader'],
    ['@babel/plugin-proposal-class-properties', { loose: true }], ['@babel/plugin-transform-runtime']]
}
