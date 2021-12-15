module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-auth/'
      : '/',
  devServer:{
    proxy: 'https://mylifeline.tech/api/'
  }
};
