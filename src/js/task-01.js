
const catRef = document.querySelector('#categories');

const getCatQuantity = () => {
    const quantity = catRef.children.length
    return `В списке ${quantity} категории.`
};

const getCatList = () => {
    const titles = catRef.querySelectorAll('h2')
    const catList = []
    let title
    let subCat

    titles.forEach((elem) => {
        title = elem.textContent
        subCat = elem.nextElementSibling.children.length
        catList.push(`Категория: ${title}, Количество элементов: ${subCat}`);
    });
    
    return catList
};




console.log(getCatQuantity())
console.log(getCatList())














