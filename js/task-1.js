const categories = document.querySelectorAll('ul#categories li.item');
console.log("Number of categories: " + categories.length);

for (let i = 0; i < categories.length; i++) {
    const element = categories[i];
    console.log("Category: "+element.querySelector('h2').textContent);
    console.log("Elements: " + element.querySelectorAll('ul li').length);
} 
