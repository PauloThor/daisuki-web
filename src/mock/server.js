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

      this.get(
        "/animes/:id",
        (schema, request) => {
          let id = request.params.id;

          return schema.animes.find(id);
        },
        { timing: 1000 }
      );

      this.get("/animes/:id/episodes", (schema, request) => {
        let id = request.params.id;

        return schema.episodes.where({ anime_id: id });
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
