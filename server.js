import jsonServer from "json-server";
import auth from "json-server-auth";

const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(auth);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
