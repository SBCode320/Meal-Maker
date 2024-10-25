var menu = {
  courses: {
    appetizers: [], 
    mains: [], 
    desserts: []
  }, 

  addDishToCourse: function(courseName, dishName, dishPrice){
    var dish = {name: dishName, price: dishPrice}
    return menu.courses[courseName].push(dish)
  },

  getRandomDishFromCourse: function(courseName){
    var dishes = menu.courses[courseName]; 
    return dishes[Math.floor(Math.random() * dishes.length)]
  }, 

  generateRandomMeal: function(){
    var appetizer = menu.getRandomDishFromCourse ('appetizers'); 
    var main = menu.getRandomDishFromCourse('mains'); 
    var dessert = menu.getRandomDishFromCourse('desserts'); 
    var totalPrice = appetizer.price + main.price + dessert.price; 
    console.log(`Enjoy your meal! Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}, Total Price: $${totalPrice}`)
  }
}; 

menu.addDishToCourse ('appetizers', 'Bread', 5)
menu.addDishToCourse('appetizers', 'Olives', 8); 
menu.addDishToCourse('appetizers', 'Sardines', 10); 
menu.addDishToCourse('mains', 'Steak', 20); 
menu.addDishToCourse('mains', 'Chicken', 15); 
menu.addDishToCourse('mains', 'Fish', 25); 
menu.addDishToCourse('desserts', 'Bread pudding', 10); 
menu.addDishToCourse('desserts', 'Ice cream', 8); 
menu.addDishToCourse('desserts', 'Cookies', 7); 

var meal = menu.generateRandomMeal(); 

console.log(meal); 
