
function populateUFs(){
  const ufSelect = document.querySelector("select[name=uf]")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") 
  .then( (res) =>{return res.json()}) //res => res.json
  .then((states) =>{

    for(let state of states) {//pegar um estado e colocar na outra variavel
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
    }
  })
  //inner propriedade de HTML   
  //ir lá e buscar o conteudo e então faça a ação e mostre
}


populateUFs()


function getCities(event){ //evento entra dentro da função 
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")
  
  const ufValue = event.target.value //(target aonde o evento esta sendo executado nesse caso e a uf) 
  
  const indexOfSelectedState = event.target.selectedIndex   // estudar novamente isso aqui 
  stateInput.value = event.target.options[indexOfSelectedState].text

  citySelect.innerHTML = ""  //limpar todos os option
  citySelect.disabled = true //bloquear o campo 

  const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` //sempre que eu mudar ufvalue a url vai mudar
  fetch(url)
  .then( (res) =>{return res.json()}) //res => res.json
  .then((cities) =>{

    for(let city of cities) {//pegar um estado e colocar na outra variavel
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` 
    }

    citySelect.disabled = false
  }) 
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change",getCities) //quando mudar ela vai ser executada por referencia

//Procurar nos documentos no select que tem o name uf
//Ouvir algum evento é executa uma função


//Itens de coleta
//Pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){ //varios click
  item.addEventListener("click",handleSelectedItem) /*evento e disparado ele passa a função */
} 


const collectedItems = document.querySelector("input[name=items") //inputt invisivel

let selectedItems = [] //seleciona o item e joga pra dentro do itemid

function handleSelectedItem(event){

  const itemLi = event.target //evento que disparou puxando o li

  //adicionar ou remover uma classe com javascript 
  itemLi.classList.toggle("selected") //toggle adicionar ou remover

  const itemId = itemLi.dataset.id //pega o id e coloca dentro da variavel 

  
  //verificar se existem items selecionados, se sim 
  //pegar os itens selecionados
  const alreadySelected = selectedItems.findIndex(function(item){ //achando no findIndex ele recebe uma função para cada item que ele pegar ele joga na funçao
    const itemFound = item == itemId //verdadeira  
    return itemFound
  })

  

  //for mais ou igual a zero ele esta nos item selecionados
  if(alreadySelected >= 0){ 
    //se já estiver selecionado,tirar da seleção
    const filteredItems = selectedItems.filter(function(item){
      const itemIsDifferent = item != itemId //falso tem que retirar
      return itemIsDifferent 
    })
    //atualizar a seleção
    selectedItems = filteredItems
  }else{
    //se não estiver selecionado, adicionar a seleção
    //adicionar a seleção dentro de um elemento 
    selectedItems.push(itemId)
  }
  
  //atualizar o campo escodido com os itens selecionados
  collectedItems.value = selectedItems
  
}