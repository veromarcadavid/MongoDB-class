const getNestedRecordsExample = () => [
    {
      id: 1,
      nombre: 'Camila Lopez',
      detalles: {
        descripcion: 'matricula normal',
        contacto: {
          email: 'clopez@mail.com',
		  telefono: 83242834
        },
		valorMatricula: 200000
      },
    },
    {
      id: 2,
      nombre: 'Pedro Perez',
      detalles: {
        descripcion: 'beca',
        contacto: {
          email: 'pperez@mail.com',
		  telefono: 83242834
        },
		valorMatricula: 0
      },
    },
    {
      id: 3,
      nombre: 'Juan Yarce',
      detalles: {
        descripcion: 'matricula normal',
        contacto: {
          email: 'jyarce@mail.com',
		  telefono: 1122334455
        },
		valorMatricula: 400000
      },
    },
	{
      id: 4,
      nombre: 'Alberto Benitez',
      detalles: {
        descripcion: 'matricula condicional',
        contacto: {
          email: 'abenitez@mail.com',
		  telefono: 234534566
        },
		valorMatricula: 600000
      },
    }
];

//RETO 1: SUMAR MATRÍCULAS

function sumar(arr){
  var total=arr.reduce(function(accumulator, currentElement){
  return accumulator + currentElement;
  })
  return total;
 } 

const arr= getNestedRecordsExample();

var arrayMatricula=[];

arr.forEach(
    (currentElement)=> arrayMatricula.push
    ((Object.values(currentElement)[2].valorMatricula)
));

const suma = sumar(arrayMatricula);

document.getElementById('output').innerHTML = "La suma de las matriculas es: $" + suma;

//RETO 2: sobre la misma data o función en un array obtener los datos de contacto teléfono de los estudiantes

var arrayContacto=[];

arr.forEach((
    currentElement)=> arrayContacto.push
    ((Object.values(currentElement)[2].contacto.telefono)
));

document.getElementById('output1').innerHTML = "Los números de télefono son: " + arrayContacto;

//RETO 3: obtener el nombre del estudiante con mayor valor de matricula

var maxValue = Math.max(...arrayMatricula);

const estudiante = arr.filter(
    registro => registro.detalles.valorMatricula === maxValue
)

function getNombre(item) {
  return [item.nombre];
}

const nombreEstudiante = estudiante.map(getNombre);

document.getElementById('output2').innerHTML = 
"El estudiante " + nombreEstudiante[0] + " tiene la matricula mas alta, con valor $" +maxValue;

//RETO 4: Obtener el correo del estudiante con matricula condicional y RETO 5: Obtener 
//el correo del estudiante con matricula condicional, considerar los casos en que en 
//el array no haya estudiantes con matricula condicional o que halla mas de uno

const estudianteMatricula = arr.filter(
    registro => registro.detalles.descripcion === 'matricula condicional'
)

const nombreMatricula = estudianteMatricula.map(getNombre);

document.getElementById('output3').innerHTML = "Estudiantes con matrícula condicional: " + nombreMatricula;

