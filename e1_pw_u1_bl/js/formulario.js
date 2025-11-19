function agregarFila() {
    let nombre = document.getElementById("id_nombre").value.trim();
    let apellido = document.getElementById("id_apellido").value.trim();

    if (nombre === "" || apellido === "") {
        mensaje("Llena todos los campos!");
        return;
    }

    mensajeExito("Datos guardados!")

    let tabla = document.querySelector("#tablaDatos tbody");
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
    `;

    tabla.appendChild(fila);

    document.getElementById("id_nombre").value = "";
    document.getElementById("id_apellido").value = "";

    function mensaje(msg) {
        let men = document.getElementById("id_msg");
        men.innerText = msg;
        men.style.backgroundColor = "red"
        men.style.visibility = "visible";

        setTimeout(() => {
            men.innerText = "";
            men.style.visibility = "hidden";
        }, 3000)
    }

    function mensajeExito(msg) {
        let men = document.getElementById("id_msg_exito");
        men.innerText = msg;
        men.style.backgroundColor = "greenyellow"
        men.style.visibility = "visible";

        setTimeout(() => {
            men.innerText = "";
            men.style.visibility = "hidden";
        }, 3000)
    }
}