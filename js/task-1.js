const categoriesEl = document.querySelector('#categories');
const categoriesItems = categoriesEl.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const categoriesEl = item.querySelectorAll('li');
    console.log(`Categories: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesEl.length}`);
    
    
});
