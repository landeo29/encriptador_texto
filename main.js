function encriptar() {
    try {
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let muneco = document.getElementById("muñeco");

        if (texto === null) throw new Error("Elemento con id 'texto' no encontrado");
        if (tituloMensaje === null) throw new Error("Elemento con id 'titulo-mensaje' no encontrado");
        if (parrafo === null) throw new Error("Elemento con id 'parrafo' no encontrado");
        if (muneco === null) throw new Error("Elemento con id 'muñeco' no encontrado");

        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        if (texto.length !== 0) {
            document.getElementById("texto").value = "";
            tituloMensaje.textContent = "Texto encriptado con éxito";
            parrafo.textContent = textoCifrado;
            muneco.style.display = "none";
            document.getElementById("mensaje-encriptado").style.display = "flex";
        } else {
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
        }
    } catch (error) {
        console.error("Error en la función encriptar: ", error.message);
        swal("Error", "Hubo un problema al intentar encriptar el texto", "error");
    }
}

function desencriptar() {
    try {
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let muneco = document.getElementById("muñeco");

        if (texto === null) throw new Error("Elemento con id 'texto' no encontrado");
        if (tituloMensaje === null) throw new Error("Elemento con id 'titulo-mensaje' no encontrado");
        if (parrafo === null) throw new Error("Elemento con id 'parrafo' no encontrado");
        if (muneco === null) throw new Error("Elemento con id 'muñeco' no encontrado");

        let textoCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        if (texto.length !== 0) {
            document.getElementById("texto").value = "";
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = textoCifrado;
            muneco.style.display = "none";
            document.getElementById("mensaje-encriptado").style.display = "flex";
        } else {
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
        }
    } catch (error) {
        console.error("Error en la función desencriptar: ", error.message);
        swal("Error", "Hubo un problema al intentar desencriptar el texto", "error");
    }
}

function copiarTexto() {
    try {
        const parrafo = document.getElementById('parrafo');
        if (parrafo === null) throw new Error("Elemento con id 'parrafo' no encontrado");

        const range = document.createRange();
        range.selectNode(parrafo);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        swal("¡Texto copiado!", "El texto se ha copiado al portapapeles.", "success");
    } catch (error) {
        console.error("Error en la función copiarTexto: ", error.message);
        swal("Error", "Hubo un problema al intentar copiar el texto", "error");
    }
}
