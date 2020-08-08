document.querySelector("#add-time")// Procurar o botão
.addEventListener('click', cloneField)//Clique do botão

function cloneField(){ //Executar ação
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true) //Duplicar campos

    const fields = newFieldsContainer.querySelectorAll("input") //pegar campos

    fields.forEach(function(field){ //limpar campo
        
        field.value=""//pegar field e limpa
    }) 

    //Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}