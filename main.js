// Primero hay que realizar la base de datos de productos que son los objetos creados.
const productos = [
    {
        id: 1,
        categoria: "guitarra",
        titulo: "BOX-601 | 15W",
        subtitulo: "¡El pequeño gigante!",
        descripcion: "15 watts reales de potencia. El más buscado para departamentos.",
        imagen: "imagenes/ampgui15.jpeg",
        precio: 150
    },
    {
        id: 2,
        categoria: "guitarra",
        titulo: "BOX-601 | 30W",
        subtitulo: "¡El hermano del medio!",
        descripcion: "30 watts reales de potencia. Ideal para ensayos.",
        imagen: "imagenes/ampgui30.jpeg",
        precio: 250
    },
    {
        id: 3,
        categoria: "guitarra",
        titulo: "BOX-601 | 100W",
        subtitulo: "¡El gigante!",
        descripcion: " 1oo watts reales de potencia.El ideal para el vivo!.Potencia perfecta para hacer que tu voz sea escuchada por todo el mundo sin perder calidad ni expresion.",
        imagen: "imagenes/ampgui100.jpeg",
        precio: 450
    },
    {
        id: 4,
        categoria: "bajo",
        titulo: "100BOX-BASS | 1 x 8' 30W",
        subtitulo: "¡El pequeño groove!",
        descripcion: " 30 watts reales de potencia. El pequeño que te hara groovear en lugares reducidos!.Este equipo es perfecto para tocar en departamentos y pequeños ensambles.",
        imagen: "imagenes/ampbajo15.jpeg",
        precio: 175
    },
    {
        id: 5,
        categoria: "bajo",
        titulo: "BOX-BASS | 1 x 15' 75W",
        subtitulo: "¡El gran pequeño!",
        descripcion: " 75 watts reales de potencia.El que te hara sentir presencia en cualquier lugar!.El equipo perfecto para ensayos potentes con tu sonido a la par de la necesidad de un grupo presente y fuerte.",
        imagen: "imagenes/ampbajo75.jpeg",
        precio: 275
    },
    {
        id: 6,
        categoria: "bajo",
        titulo: "BOX-BASS | 1 x 15' 110W",
        subtitulo: "¡El pesado!",
        descripcion: " 110 watts reales de potencia.El que no pasa desapercibido!.Perfecto para escenarios,conciertos,auditorios grandes y estadios!!!.",
        imagen: "imagenes/ampbajo110.jpeg",
        precio: 475
    },
    
];

// segundo hay que renderizarlos

function renderizarProductos() {
    //traeme la info del div id = contenedor-dinamico
    
    const contenedor = document.getElementById('contenedor-dinamico');
    
    //por las dudas para no tener errores
    
    if (!contenedor) {
        console.error("No se encontró el contenedor con ID 'contenedor-dinamico'");
        return;
    }
    //primero hay que dejar vacio modificando el contenedor

    contenedor.innerHTML = ""; 
    
    //inicia el ciclo
    
    productos.forEach(p => { //método que toma cada elemento de esta lista, uno por uno
        //p es el nombre del producto actual dentro del ciclo
        const columna = document.createElement('div');
        //creamos un elemento en la memoria
        columna.className = "col-md-4 mb-4";
        //Aquí ponemos estilos boostrap 
        //Aquí empieza la plantilla de como se vera el producto por dentro.
        //Estas comillas inclinadas permiten usar Template Literals que hacen que el codigo sea largo sin que se rompa y se pueden insertar variables directamente
        columna.innerHTML = `
            <div class="card h-100 bg-dark text-white shadow border-success">
                <img src="${p.imagen}" class="card-img-top p-3" alt="${p.titulo}" style="height: 200px; object-fit: contain;">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="text-success">${p.titulo}</h5>
                    <p class="small text-secondary italic">${p.subtitulo}</p>
                    <p class="card-text flex-grow-1">${p.descripcion}</p>
                    <div class="mt-3">
                        <p class="fw-bold">USD ${p.precio}</p>
                        <button class="btn btn-success w-100" onclick="alert('Elegiste el ${p.titulo}')">
                            Consultar
                        </button>
                    </div>
                </div>
            </div>
        `;

        //para que el div aparezca en la página web.
        contenedor.appendChild(columna);
    });
}


document.addEventListener('DOMContentLoaded', renderizarProductos);
//document. representa todo el archivo html
//addeventlistener le dice que este atento, que viene una orden
//DOMContentLoaded hace que que el html sea leido en su totalidad antes de ejecutar javascript
//ejecuta la funcion renderizar productos