import db from "./db.json";
import options from "./options.json";
import { createServer } from "miragejs";

let server = createServer({
  routes() {
    this.timing = 500;
    this.namespace = "api";

    this.get(
      "/promotions/priceoffers/ond/:origin/:destination",
      (_, request) => {
        return db.filter((offer) => {
          return (
            offer.origin === request.params.origin &&
            offer.destination === request.params.destination
          );
        });
      }
    );
    this.get("/airports", () => {
      return options.airports;
    });
  },
});

export function makeServer() {
  return server;
}
