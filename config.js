module.exports = {
  port: 3030,

  mongoose: {
    url: "mongodb://localhost/perdidosya",
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
