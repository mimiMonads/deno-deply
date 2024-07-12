import { plugins, runtime } from "vixeny";
import { injectable } from "vixeny-perspective";

import pugP from "./plugins/pug.ts"
import typescriptP from "./plugins/typescript.ts"
import typeboxP from "./plugins/typebox.ts"


///remark//

const values = runtime.arguments();

const globalOptions = plugins.globalOptions({
  ...(values?.liveReloading
    ? {
      debugging: {
        injectHtml: injectable({
          //@ts-ignore
          hostname: "127.0.0.1",
          port: 3000,
        }),
      },
    }
    : {}),
  cyclePlugin: { ...typeboxP, },
});

const cryptoKey = {
  globalKey: crypto.randomUUID(),
};

//static server


const fileServer = plugins.fileServer({
  type: "fileServer",
  name: "/",
  path: "./views/public/",
  removeExtensionOf: [".html"],
  slashIs: "$main",
  template: [pugP,typescriptP]
});

//export

 export { cryptoKey, globalOptions, fileServer };