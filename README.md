# Linter-para-CSV-files
algoritmo para trabajar un archivo externo desde javascript
el repositorio cuenta con archivo dataBase.txt , dentro de este archivo  en la primera linea o fila se encuentra los datos de que se solicitan por ejemplo nick,matricula,facultad etc. cada uno de ellos separados por una "," 
apartir de la segunda linea se llenan los datos  por ejemplo para nick de la primera fila , se le agrega pako en la segunda linea y asi sucesivamente .

tambien tenemos otro archivo llamado "my-sql.js" este archivo contiene el algoritmo con el cual se puede interactuar con el archivo "dataBase.tx" y llevar  a cabo diferentes funciones.
el algoritmo es capas de leer la primera linea de "dataBase.txt" y convertirla en un array y a demas mostrarla en consola.
tambien es capaz de leer las lineas siguientes y convertirlas en en arrays .
tambien es capaz de mostrar el arreglo de la primera fila con cada uno de los otros arreglos ordenadamente.
el algoritmo es capaz de validar  que el numero de elementos el array de la primera fila , se igual al que contienen las filas posteriores y a demas no se encuentren vacias.
 ademas de validar si cada elemento es llenado de la forma correcta por ejemplo en el primer elemento de query este debe  contener caracteres  si no se muestra en consolola un error.

por ultimo el algorimo es capaz de guardar los errores en una variable logData  en caso de haber errores.posteriormente se crea un archivo log.txt en el cual se ecribira la fila que contiene un error
