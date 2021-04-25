
const catRef = document.querySelector('#categories');

const getCatQuantity = () => {
    const quantity = catRef.children.length
    return `В списке ${quantity} категории.`
};

const getCatList = () => {
    const titles = catRef.querySelectorAll('h2')
    
    let title
    let subCat

   titles.forEach((elem) => {
        title = elem.textContent
        subCat = elem.nextElementSibling.children.length
        console.log(`Категория: ${title}, Количество элементов: ${subCat}`);
   });
    return []
};




console.log(getCatQuantity())
console.log(getCatList())














