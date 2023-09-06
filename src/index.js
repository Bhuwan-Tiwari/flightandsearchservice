const express = require("express");
const bodyparser= require("bodyparser");

const { PORT } = require('./config/serverconfig');


const setupandstartserver = async () => {
    //create the express object
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencodod({ extended : true}));
    
    app.listen(PORT, () => {
        console.log(`SERVER STARTED AT PORT ${PORT}`)
    });
}

setupandstartserver();




