import { wrap } from "vixeny";
import { globalOptions } from "../globalOptions.ts";

export default wrap(globalOptions)()
  .customPetition({
    path: "/ping",
    f: () => new Response('pong', {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }),
  });
