const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require('./config/serverconfig');
const cityreposritory = require('./repository/city-repository')

const setupandstartserver = async () => {
    //create the express object
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.listen(PORT,async () => {
        console.log(`SERVER STARTED AT PORT ${PORT}`)
        const repo = new cityreposritory();
        const city = await repo.createcity({ name: "New Delhi" });
        console.log(city);
    });
}

setupandstartserver();




