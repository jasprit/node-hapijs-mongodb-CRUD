const server = require("./server");

(async () => {
  await server.start();
  console.log("🚀 Server listening %s/ 🚀", server.info.uri);
})();

console.log("hapi days!");
process.on("unhandledRejection", (err) => {
  console.log(err);
});
