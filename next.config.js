require("dotenv").config();
module.exports = {
  env: {
    NEXT_PUBLIC_PRUEBA: "olamundo",
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
