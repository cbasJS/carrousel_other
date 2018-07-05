(function(){
    var arrayImg = ["img/1.png", 
                    "img/2.jpg", 
                    "img/4.jpg",
                    "img/5.jpg",
                    "img/6.jpg",
                    "img/7.jpg",
                    "img/8.jpg",
                    "img/9.jpg",
                    "img/10.png"];
    var increment = 0;
    var btnSig  = document.querySelector("#btnSig");
    var btnAnt = document.querySelector("#btnAnt");
    var tagImg = document.querySelector("img");
    btnSig.addEventListener("click", function(){        
        let cadena = nextPosition();
        tagImg.setAttribute("src", cadena);
    });
    btnAnt.addEventListener("click", function() {
        let cadena = prevPosition();
        tagImg.setAttribute("src", cadena);
    });

    function nextPosition() {
        increment = increment + 1; // incremento variable
        console.log("----- nextPosition() -----");
        console.log("increment + 1 = " + increment);
        increment = increment % arrayImg.length; // asigna el numero 0 si increment es igual a la longitud 
        console.log("increment % arrayImg.length = " + increment);
        return arrayImg[increment]; // devuelve la posicion actual
    }
    function prevPosition() {
        console.log("----- prevPosition() -----");
        if (increment === 0) { // increment igual a 0
            console.log("entro a la condicion increment === 0");
            console.log(increment===0);
            increment = arrayImg.length; // es igual al tamaño del arreglo
            console.log("increment=arrayImg.length = " + increment);
        }
        increment = increment - 1; // se resta 1
        console.log("increment-1 = "+increment);
        return arrayImg[increment]; // devuelve la posicion actual
    }
})();