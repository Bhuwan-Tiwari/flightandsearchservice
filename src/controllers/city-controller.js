const { CityService}= require('../services/index')
const cityService = new CityService();


// post
// data-> req.body
const create = async (req,res)=>
{
  try {
    const city= await cityService.createCity(req.body);
    return res.status(201).json({
        
     data : city,
     success : true,
     message : "sucessfully created a city",
     err :{}
 
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
        data : {},
        success : false,
        message : "not able to create a city",
        err : error
    })
  }

}

//to passs city id req.param.id
const destroy = async (req, res)=>
{
 try {
    const response = await cityService.deleteCity(req.params.id)
    return res.status(200).json({
        data : response,
        success : true,
        message :"city deleted sucesfully",
        err :{}
        
    })
    
 } catch (error) {
    console.log(error)
    return res.status(500).json({
        data : {},
        success : false,
        message : "not able to create a city",
        err : error
    })
    
 }
}
// GET->/city/:id
const get = async (req,res)=>
{
    try {
        const response = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data : response,
            success : true,
            message :"city fetched sucesfully",
            err :{}
            
        })
        

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to grt a city",
            err : error
        })
    }

}
//patch ->/city/:id->req.body valure to update
const update =async (req,res)=>
{
try {
    const response = await cityService.updateCity(req.params.id,req.body)
    return res.status(200).json({
        data : response,
        success : true,
        message :"city updated sucesfully",
        err :{}
        
    })
    
} catch (error) {
    console.log(error)
    return res.status(500).json({
        data : {},
        success : false,
        message : "not able to update a city",
        err : error
    })
}
}

module.exports=
{
    create,
    destroy,
    get,
    update
}