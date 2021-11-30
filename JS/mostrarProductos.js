// Mostrar los productos
let cards = document.querySelector('#cards');
fetch('./js/productos.json')
    .then(response => response.json())
    .then(datos => {       
            datos.map(function(datos){
                let cantidad = datos.Electrónica[0].Cámara_y_Fotografía[0].Productos.length;
                console.log(cantidad);
                for (let i = 0; i < cantidad; i++) {
                    cards.innerHTML += `
                                        <div class="card">
                                            <div class="card__image">
                                                <img src="https://m.media-amazon.com/images/I/71IjHzi8j7L._AC_SX450_.jpg" alt="Producto">
                                            </div>
                                            <div class="card__text">
                                                <h3>${datos.Electrónica[0].Cámara_y_Fotografía[0].Productos[i].Nombre}</h3>
                                                <p>$${datos.Electrónica[0].Cámara_y_Fotografía[0].Productos[i].Precio}</p>
                                            </div>
                                        </div>
                                    `;
                }
            })
            // console.log(datos[0].Electrónica[0].Cámara_y_Fotografía[0].Productos[2]);
        // console.log(datos)
    })