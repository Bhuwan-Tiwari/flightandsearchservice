const { FlightService } = require('../services/index');
const {SuccessCodes} = require('../utitls/error-codes')

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestdata ={
    flightNumber : req.body.flightNumber,
    airplaneId : req.body.airplaneId,
    departureAirportId : req.body.departureAirportId,
    arrivalAirportId : req.body.arrivalAirportId,
    arrivalTime : req.body.arrivalTime,
    departureTime: req.body.departureTime,
    price: req.body.price   
    }
    const flight = await flightService.createFlight(req.body);
    return res.status(SuccessCodes.Created).json({
      data: flight,
      sucess: true,
      err: {},
      message: 'Sucessfully created a flight'
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to create a flight',
      err: 'error'
    })
  }
}

  const getAll = async(req,res)=>
  {
   try {
     console.log(req.query)
     const response = await flightService.getAllFlightData(req.query);
     return res.status(SuccessCodes.ok).json({
      data: response,
      sucess: true,
      err: {},
      message: 'Sucessfully fetch a flights'
     })
   } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to fetch flights',
      err: 'error'
   })
  }
}
module.exports = {
  create,
  getAll
}