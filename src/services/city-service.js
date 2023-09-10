const {CityRepository} = require('../repository/index')

class CityService
{
    constructor()
    {
     this.cityRepository = new CityRepository;
    }


 async createcity({name})
 {
  try {
    const city= await this.cityRepository.createCity({name})
    return city;
    
  } catch (error) {
    console.log("something went wrong at service layer")
    throw(error)
  }
 }

async deletecity(cityid)
{
try {
    const response = await this.cityRepository.deleteCity(cityid)
    return response;
    
} catch (error) {
    console.log("something went wrong at service layer")
    throw(error)
}
}

async updatecity(data,cityid)
{
try {
    const city = await this.cityRepository.updateCity(data,cityid)
    return city;
} 
    catch (error) {
    console.log("something went wrong at service layer")
    throw(error)
}
}
async getcity(cityid)
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


module.export = CityService;