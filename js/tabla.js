const url = 'https://6678ee4b0bd45250562051e5.mockapi.io/api/datos/nose';
const formulario = document.querySelector('#formulario-tablas');
let formdata;
async function obtener() {
    let lista = document.querySelector('.lista-dinamica');
    try {
        let res = await fetch(url);
        let json = await res.json();
        lista.innerHTML = '';
        console.log(json);
        let valor = 1;
        for (const usuario of json) {
            let nombre = usuario.nombre;
            let numero = usuario.numero;
            lista.innerHTML += `<li class="tabla">${nombre}, ${numero} <a> id: ${valor}</a></li>`;
            valor++;
        }
    } catch (error) {
        console.log(error);
    }
}

async function agregar() {
    let nombre = document.getElementById('nombre').value;
    let numero = document.getElementById('numero').value;
    try {


        let usuario = {
            nombre: nombre,
            numero: parseInt(numero)
        };
        let res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });
        if (res.status == 201) {
            console.log("correcto");
        }
        obtener();
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}



async function eliminar() {
    let id = document.getElementById('id').value;
    try {
        let res = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });

        if (res.status == 200) {
            console.log("eliminado correctamente");
        }
        obtener();
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
async function editar() {
    let nombre = document.getElementById('nombre').value;
    let numero = document.getElementById('numero').value;
    let id = document.getElementById('id').value;
    try {
        let usuario = {
            nombre: nombre,
            numero: parseInt(numero)
        };
        let res = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });
        if (res.status == 200) {
            console.log("correcto");
        }
        obtener();
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
obtener();


btn_agregar = document.querySelector('#agregar').addEventListener("click", agregar);
btn_editar = document.querySelector('#editar').addEventListener("click", editar);
btn_eliminar = document.querySelector('#eliminar').addEventListener("click", eliminar);