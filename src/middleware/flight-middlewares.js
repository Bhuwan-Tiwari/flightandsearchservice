const { ClientErrorCodes}= require ('../utitls/error-codes')
const validateCreateFlight = (req,res,next) =>
{ if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime||
        !req.body.departureTime ||
        !req.body.price 
    )
    {   //if any of the body params is missing we come inside the if
        return res.status(ClientErrorCodes.BAD_REQUESRT).json(
            {
                data : {},
                success: false,
                message :'Invalid mandatory Properties to create a flight',
                err:'Missing mandotory properties to create a flight'

            });
        
    }
    next();
}  
module.exports ={
    validateCreateFlight
}