const fs = require('fs');

fs.readFile('database.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    var cadena_split = data.split('\n');
    const top = cadena_split[0].split(",");
    
    console.log("nombres de las columnas", top);

    // Crear un array para almacenar los renglones incorrectos
    const renglonesIncorrectos = [];

    for (let i = 1; i < cadena_split.length; i++) {
        var query = cadena_split[i].split(",");
        
        if (top.length != query.length || query.length == 0) {
            console.log("Datos incorrectos o incompletos en el renglón " + i);
            // Agregar el renglón incorrecto al array
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }
        //////////////VERIFICACION DE TIPOS DE DATOS///////////////////////////////////////////////7
        
        const letrasRegex = /^[A-Za-z]+$/;
        const numerosRegex = /^[0-9]+$/;
        const correoRegex = /[^@]+@[^.]+\..+/;
                            

       //vericacion de tipo de dato en nombre
        if (!letrasRegex.test(query[0])) {
            console.log("\n"+"Renglon " + i + " : dato incorrecto en columna nombre");
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }
        //vericacion de tipo de dato en columna matricula
        if (!numerosRegex.test(query[1])) {
            console.log("\n"+"Renglon " + i + " : dato incorrecto en columna matricula.");
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }

         //vericacion de tipo de dato en facultad
        if (!letrasRegex.test(query[2])) {
            console.log("\n"+"Renglon " + i + " : dato incorrecto en columna facultad.");
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }
       //vericacion de tipo de dato en carrera
        if (!letrasRegex.test(query[3])) {
            console.log("\n"+"Renglon " + i + " : dato incorrecto en columna carrera.");
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }
         //vericacion de tipo de dato en promedio
        if (!numerosRegex.test(query[4])) {
            console.log("\n"+"Renglon " + i + " : dato incorrecto en columna promedio.");
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }
         //vericacion de tipo de dato en edad
        if (!numerosRegex.test(query[5])) {
            console.log("\n"+"Renglon " + i + " : dato incorrecto en columna edad .");
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }
         //vericacion de tipo de dato en correo
        if (!correoRegex.test(query[6])) {
            console.log("\n"+"Renglon " + i + " : dato incorrecto en columna correo."+ query[6]);
            renglonesIncorrectos.push("Renglon " + i + " : " + cadena_split[i]);
            continue;
        }


//////////////////////////////////////////////////////////////////////////////////////////////////////////

          ///DATOS CORRECTOS////
        console.log("\n"+"Renglon " + i + " : " + cadena_split[i]);
        query.forEach(function (queryData, index) {
            console.log(top[index] + ":" + queryData);
        });
    }

    // Crear y escribir en el archivo de registro
    const logData = renglonesIncorrectos.join('\n');
    fs.writeFile('log.txt', logData, (err) => {
        if (err) {
            console.error("\n"+"Error al escribir en el archivo de registro:", err);
        } else {
            console.log("\n"+"Archivo de registro ('log.txt') creado con los renglones incorrectos.");
        }
    });
});