import { pugStaticServerPlugin } from "vixeny-perspective";
import { composer } from "vixeny";
import * as pugModule from "pug";

export default pugStaticServerPlugin(pugModule.compileFile)({
  preserveExtension: false,
  default: { name: 'avant' },
  petition: composer.objectNullRequest(
  )({
    f: ({ query }) => 
      query?.name 
      ? query 
      : null
  })
});
