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
  
  ingredients.forEach((elem) => {
    const listItem = document.createElement('li');
    
    listItem.textContent = elem;
    list.appendChild(listItem)
  });
  return []
};



console.log(fillList())
