const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')


const fillList = () => {
  const listArr = [];

  ingredients.forEach((elem) => {
    const listItem = document.createElement('li');
    
    listItem.textContent = elem;
    listArr.push(listItem)
    
  });
  
  return list.append(...listArr)
};



console.log(fillList())
