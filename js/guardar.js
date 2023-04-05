
function save () {
    db.collection("products").add({
        nombnre_product: document.getElementById('name').value ,
        precio: document.getElementById('price').value,
        img: document.getElementById('addImg').value
    })
    .then(() => {
        alert('producto guardado exitosamente')
    })
    .catch(() => {
        alert('error al guardar el producto')
    });
}

const btn =document.getElementById('btn') ; 
btn.addEventListener('click', ()=> save())