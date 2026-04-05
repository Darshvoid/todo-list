import { parseSchema } from "./functions/parser.js";
import removeRootParent from "./functions/removeRootParent.js"
import getRootParent from "./functions/getRootParent.js";

const dom = {
    getRootParent,
    removeRootParent,
    parseSchema
}

export default dom;