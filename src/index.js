const express = require("express");
const { PORT } = require('./config/serverconfig');


const setupandstartserver = async () => {
    //create the express object
    const app = express();

    app.listen(PORT, () => {
        console.log(`SERVER STARTED AT PORT ${PORT}`)
    });
}

setupandstartserver();




