const router = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Hello World!";
    },
  },
];

module.exports = router;
