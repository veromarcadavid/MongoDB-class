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

function sumar(arr){
  var total=arr.reduce(function(accumulator, currentElement){
  return accumulator + currentElement;
  })
  return total;
 } 

const arr= getNestedRecordsExample();

var arrayMatricula=[];

arr.forEach((currentElement)=> arrayMatricula.push((Object.values(currentElement)[2].valorMatricula)));

const suma = sumar(arrayMatricula);

document.getElementById('output').innerHTML = "La suma de las matriculas es: $" + suma;
