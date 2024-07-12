import { wrap } from "vixeny";
import { globalOptions } from "../globalOptions.ts";

export default wrap(globalOptions)()
  .customPetition({
    path: "/ping",
    f: ({ headers }) => new Response('pong', {
      headers
    }),
  });
