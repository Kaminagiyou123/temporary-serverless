require('dotenv').config()
const Airtable= require('airtable-node')
const airtable= new Airtable({apiKey:process.env.AIRTABLE_API_KEY})
.base('appbPHLNo1J4c21uE')
.table('products')

exports.handler= async (event,context,cb)=>{
    const {id}=event.queryStringParameters
    if (id){
        try{ const product=await airtable.retrieve(id)
          if (product.error){
              return {
                  statusCode:404,
                  body: `'No product with id of ${id}' `,
              }
          }
          return {
            statusCode:200,
            body: JSON.stringify(product),
                }
        } catch(error){
        return {
            statusCode:500,
            body: 'Server Error' ,
                }
        }   
        
    }
    return {
statusCode:400,
body: 'Please provide product id' ,
    }
}