import { app } from "./src/app.js";
import { config } from "./src/config/config.js"

app.listen(config.port, () => {
    console.log(`I'm workin in the local URL http://localhost:9222`);
})