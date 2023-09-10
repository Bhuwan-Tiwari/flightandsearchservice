const {CityRepository} = require('../repository/index')

class CityService
{
    constructor()
    {
     this.cityRepository = new CityRepository;
    }


 async createCity({name})
 {
  try {
    const city= await this.cityRepository.createCity({name})
    return city;
    
  } catch (error) {
    console.log("something went wrong at service layer")
    throw(error)
  }
 }

async deleteCity(cityid)
{
try {
    const response = await this.cityRepository.deleteCity(cityid)
    return response;
    
} catch (error) {
    console.log("something went wrong at service layer")
    throw(error)
}
}

async updateCity(cityid,data)
{
try {
    const city = await this.cityRepository.updateCity(cityid,data)
    return city;
} 
    catch (error) {
    console.log("something went wrong at service layer")
    throw(error)
}
}
async getCity(cityid)
{
try {
    const city = await this.cityRepository.getcity(cityid)
    return city;
} 
catch (error) {
    console.log("something went wrong at service layer")
    throw(error)
}
}

}


module.exports = CityService;