const { City } = require('../models/index')

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.log("something went wrong in repository layer")
            throw { error };
        }
    }

    async deleteCity(cityid) {
        try {
            await City.destroy({ where: { id: cityid } });
            return true;

        }
        catch (error) {
            console.log("something went wrong in repository layer")
            throw { error };
        }
    }

    async updateCity(data,cityid) {
        try {
            const city = await City.updateCity(data,
               { where : {id : cityid}})
        } catch (error) {
            console.log("something went wrong in repository layer")
            throw{error}

        }
    }

    async getcity(cityid) {
        try {
          const city = await City.findByPk(cityid)
        } catch (error) {
            console.log("something went wrong in repository layer")
            throw{error}
        }
    }
}

module.exports = CityRepository;