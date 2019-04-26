const publicPath =
  process.env.NODE_ENV === "production" ? "/chat-firebase/" : "/";

module.exports = {
  publicPath,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
        `
      }
    }
  }
};
