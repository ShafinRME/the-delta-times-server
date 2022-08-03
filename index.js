const app = require("./app");
const config = require("./config/config");
const port = config.app.port;


app.listen(port, () => {
    console.log(`The delta times is going on port ${port}`)
})

