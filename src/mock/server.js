import { createServer, Model } from "miragejs";
import animes from "./animes.json";
import episodes from "./episodes.json";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    models: {
      anime: Model,
      episode: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/animes", (schema, request) => {
        return schema.animes.all();
      });

      this.get("/animes/:id", (schema, request) => {
        let id = request.params.id;

        return schema.animes.find(id);
      });

      this.get("/animes/:id/episodes", (schema, request) => {
        let id = request.params.id;

        return schema.episodes.where({ anime_id: id });
      });

      this.get("/animes/most-popular", (schema, request) => {
        let anime1 = schema.animes.find(6);
        let anime2 = schema.animes.find(12);
        let anime3 = schema.animes.find(8);
        let anime4 = schema.animes.find(11);
        let anime5 = schema.animes.find(9);
        let anime6 = schema.animes.find(14);
        let anime7 = schema.animes.find(16);
        let anime8 = schema.animes.find(7);
        let anime9 = schema.animes.find(15);
        let anime10 = schema.animes.find(10);

        let output = [
          anime1,
          anime2,
          anime3,
          anime4,
          anime5,
          anime6,
          anime7,
          anime8,
          anime9,
          anime10,
        ];
        return output;
      });

      this.get("/animes/latest", (schema, request) => {
        let animes = schema.animes.all();

        return animes["models"].slice(-10).reverse();
      });

      this.get("/episodes", (schema, request) => {
        return schema.episodes.all();
      });

      this.get("/episodes/:id", (schema, request) => {
        let id = request.params.id;

        return schema.episodes.find(id);
      });

      this.post("/users", (schema, request) => {
        let data = JSON.parse(request.requestBody);
        let user = { email: data.email };
        user["id"] = Math.floor(Math.random() * 100);

        return { user: user, access: "tokenzinhodaisuki" };
      });
    },

    seeds(server) {
      animes.forEach((anime) => {
        server.create("anime", { ...anime });
      });
      episodes.forEach((episode) => {
        server.create("episode", { ...episode });
      });
    },
  });
}
