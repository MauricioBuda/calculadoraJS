const section = document.getElementById("section")


const pantalla = document.createElement("div")
pantalla.classList.add("pantalla")
section.appendChild(pantalla)


datos.forEach((tecla)=>{
    const button = document.createElement("button");

    button.innerHTML=`
    <p>${tecla.accion}</p>
    `
    button.id= `agregar${tecla.id}`

    section.appendChild(button)

    const boton = document.getElementById(`agregar${tecla.id}`)
    

    boton.addEventListener("click", ()=>{
        calcular(tecla)
        });
});

function calcular(id){
switch (id.accion) {

    case "=" :
        if(pantalla.innerText==""){
            alert("Pantalla vacia, gil")
        } else {
            pantalla.innerText=eval(pantalla.innerText)
        }
        break;

    case "C":
        pantalla.innerText=""
        break;

    default:
        pantalla.innerText += id.accion
    break;
}
}