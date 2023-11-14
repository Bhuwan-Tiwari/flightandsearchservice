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

    async getFlightData() {
   //todo
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