const axios = require('axios');

function getAsteroide(fecha_de_nacimiento){
const url ='https://api.nasa.gov/neo/rest/v1/feed?start_date='+fecha_de_nacimiento+'&end_date='
           +fecha_de_nacimiento+'&api_key=Qxxuk5ZmgdFvu9kH2lbKIstmQ271YY1iDp1Kc2YM'
const asteroide = axios.get(url)
asteroide.then((response)=>{
  console.log(response.data.near_earth_objects);
    console.log(response.status);
    const asteroides = response.data.near_earth_objects[fecha_de_nacimiento];
    for (const ast of asteroides){
        console.log("El nombre del asteroide es: ",ast.name);
        console.log("Diámetro estimado min: ",ast.estimated_diameter.kilometers.estimated_diameter_min+" Km");
        console.log("Diámetro estimado max: ",ast.estimated_diameter.kilometers.estimated_diameter_max+" Km");
        if (ast.is_potentially_hazardous_asteroid){
            console.log("Este asteroide es potencialmente peligroso");
        }else{
            console.log("Este asteroide no es potencialmente peligroso");
        }
        ;
    }
})

.catch((error)=>{
    console.log(error, response, data);
    console.log(error,response, status);
}
)}

getAsteroide("1992-01-16")