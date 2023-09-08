const express = require("express");
const bodyparser = require("body-parser");
const { City } = require('./models/index')
const { PORT } = require('./config/serverconfig');
const CityRepository = require('./repository/city-repository')

const setupandstartserver = async () => {
    //create the express object
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.listen(PORT,async () => {
        console.log(`SERVER STARTED AT PORT ${PORT}`)
        const repo = new CityRepository();
         await repo.createCity({name : "anu"});
       // await repo.deleteCity(39);
     
        
    });
}

setupandstartserver();




