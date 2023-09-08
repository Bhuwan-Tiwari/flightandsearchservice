const { City } = require('../models/index')

class cityreposritory {
    async createcity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            throw { error };
        }
    }

    async deletecity(cityid) {
        try {
            await City.destory({ where: { id: cityid } });
        }
        catch (error) {
            throw { error };
        }
    }

}

module.exports=cityreposritory;