    const inputText = document.querySelector(".inputText");

    const menssagem = document.querySelector(".menssagem");

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    function btEncriptar() {
        const textoEncriptado = encriptar(inputText.value);

        menssagem.value = textoEncriptado;

        menssagem.style.backgroundImage = "none";

        inputText.value = "";
    }

    function encriptar(stringEncriptada) {     
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                    stringEncriptada = stringEncriptada.replaceAll(
                        matrizCodigo[i][0], 
                        matrizCodigo[i][1]
                    );
            }
         }

        return stringEncriptada;
    }

    function btDescriptar() {
        const textoDescriptado = descriptar(menssagem.value);
        inputText.value = textoDescriptado;
        menssagem.style.backgroundImage = "";
        menssagem.value = " ";
    }

    function descriptar(stringDescriptada) {
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringDescriptada.includes(matrizCodigo[i][0])) {
                    stringDescriptada = stringDescriptada.replaceAll(
                     matrizCodigo[i][1],
                     matrizCodigo[i][0]);
            }
        }
        return stringDescriptada; 
    }