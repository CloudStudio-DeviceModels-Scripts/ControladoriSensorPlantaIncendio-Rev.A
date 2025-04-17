function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)

    //----------------------------------------------------------------------------------------------------------------------

    var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);



    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------

        //variables PAG ABAJO
        var tq1 = device.endpoints.byAddress(1);
        var tq2 = device.endpoints.byAddress(2);
        var tq3 = device.endpoints.byAddress(3);
        var tq4 = device.endpoints.byAddress(4);
        var tpt = device.endpoints.byAddress(5);       
        
      
        

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT SW INCENDIO  SCRIPT SW INCENDIO  SCRIPT SW INCENDIO  SCRIPT SW INCENDIO  SCRIPT SW INCENDIO  SCRIPT SW INCENDIO  

-------------------------------------------------------------------------------------------------------------------*/
/*
var datos = jsonPayload.d;
//env.log("Valor Payload --> ", datos);

// Define un array de sensores
var sensores = [tq1, tq2, tq3, tq4, tpt];

for (let i = 0; i < sensores.length; i++) {
  const sensor = sensores[i];
  const sensorName = "tq" + (i + 1);
  const dato = datos[sensorName];

  if (dato !== undefined) {
    sensor.updateVolumeSensorStatus(dato*1000);
    env.log("Valor " + sensorName + " --> " + dato);
  }
}
*/
if (jsonPayload.ser == "RUT240"){
    env.log("Payload --> ", jsonPayload);
    const datos = jsonPayload;
    var data = jsonPayload.val;

            const datosSeparados = data.split(',');
            datosSeparados.forEach(dato => {
            env.log(dato.trim());
            });
            for (let i = 0; i < datosSeparados.length; i++) {
                    env.log("Valor  --> ",[i],"--->  ",datosSeparados[i]);
            }
            var dato1 =parseInt(datosSeparados[0])*1000;
            var dato2 =parseInt(datosSeparados[1])*1000;
            var dato3 =parseInt(datosSeparados[2])*1000;
            var dato4 =parseInt(datosSeparados[3])*1000;
            var dato5 =parseInt(datosSeparados[4]);
                    
            
            tq1.updateVolumeSensorStatus(dato1,timestamp);
            env.log("Valor 1 --> ",dato1);
            
            tq2.updateVolumeSensorStatus(dato2,timestamp);
            env.log("Valor 2 --> ",dato2);

            tq3.updateVolumeSensorStatus(dato3,timestamp);
            env.log("Valor 3 --> ",dato3);

            tq4.updateVolumeSensorStatus(dato4,timestamp);
            env.log("Valor 4 --> ",dato4); 

            tpt.updateVolumeSensorStatus(dato5,timestamp);
            env.log("Valor 5 --> ",dato5);   
    

}



//--------------------------------------------------------------------------------------------------------------
//Ultima llave que cierra el script
  
}