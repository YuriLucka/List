let main = document.getElementById("main")
const new_item = document.getElementById("new_item")


new_item.addEventListener("click", adicionar)

function adicionar(){
    let item = prompt("Digite o nome do item: ")
    main.innerHTML += `
    <div class="items">
    <h2>${item}</h2>
    <i class="bi bi-trash3-fill"></i>
    </div>
    `
}
