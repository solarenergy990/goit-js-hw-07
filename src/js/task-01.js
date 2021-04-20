
const catRef = document.querySelector('#categories');

const getCatQuantity = () => {
    const quantity = catRef.children.length
    return `В списке ${quantity} категории.`
};

const getCatList = () => {
    const titles = catRef.querySelectorAll('h2')
    
    let title
    let subCat

    for (let i = 0; i < titles.length; i += 1) {
        title = titles[i].textContent
        subCat = titles[i].nextElementSibling.children.length
        console.log(`Категория: ${title}, Количество элементов: ${subCat}`) 
    }
    
}




console.log(getCatQuantity())
console.log(getCatList())














