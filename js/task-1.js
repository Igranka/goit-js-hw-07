const categories = document.querySelector('ul#categories li.item');
console.log("Number of categories: " + categories.length);

categories.forEach(element => {
    console.log(element.querySelector('h2').textContent);
    console.log(element.ul.querySelectorAll('ul li').length);
}); 
