const { FlightRepository, AirplaneRepository } = require('../repository/index')
const {compareTime} = require('../utitls/helper')
class FlightService {

    constructor()
    {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
      
        try {
            // const airplaneRepository = new AirplaneRepository();
            // const airplane = await airplaneRepository.getAirplane(data.airplaneId)
            if (!compareTime(data.arrivalTime,data.departureTime))
            {
                throw{error :' Arrival time cannot be less than departure time'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log('something went wrong at service layer ')
            throw{error} 
        }
    } 

  async getAllFlightData(data)
  {
    try {
        const flights = await this.flightRepository.getAllFlights(data)
        return flights;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
  }

async getFlight(flightId) {
    try {
        const flight = await this.flightRepository.getFlight(flightId)
        return flight;
    } catch (error) {
        console.log("something went wrong at service layer")
    }
}

   
}
module.exports = FlightService;
`
flightNumber,
airplaneid,
arrivalairportAirportId,
departureairportAirportId,
departureTime,
arrivaltime,
price,
totalSeats->airplane`