//module 3 task 19

/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];



function getAllPropValues(propName) {
  // Change code below this line
    let array = []; 
    for (const product of products) { 
        if (propName === "name") {
            array.push(product.name);
        } else if (propName === "price") {
            array.push(product.price);
        } else if (propName === "quantity") {
            array.push(product.quantity);
        } 
        
    }
    return array;
  // Change code above this line
}


console.log(getAllPropValues("price"));*/


//module 3 task 20

/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
    for (const product of products) { 
        if (productName === product.name) {
            return product.price * product.quantity;
        } 
            
        
    }
return 0

  // Change code above this line
}

console.log(calculateTotalPrice("sds"));*/



//module 3 task 23

/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures ;


// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;*/


//module 3 task 24

/*const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  
  hexColors.push(hex);
  rgbColors.push(rgb);
}*/

//module 3 task 25
/*const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
  tomorrow: { low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"  }
} = forecast;*/



//module 3 task 26
// Change code below this line
/*function calculateMeanTemperature(forecast) {

  const { today: { low: todayLow, high: todayHigh },
    tomorrow: {low:tomorrowLow, high:tomorrowHigh  }
  } = forecast;
  

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}*/

//module 3 task 27
/*const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);*/

//module 3 task 28

/*const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
*/

//module 3 task 29

/*const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};*/

//module 3 task 30

/*function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const result = {category, priority, completed, ...data };
  
  return result;
  // Change code above this line
}


console.log(makeTask({ }));*/

//module 3 task 31
/*function add(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i += 1) { 
    total += args[i];
  }
  return total;
  // Change code above this line
}

console.log(add(1,2))*/

//module 3 task 32

// Change code below this line
/*function addOverNum(numberMin,...args) {
  let total = 0;

  for (const arg of args) { 
    if (arg>numberMin) { 
      total += arg;
    }
    
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));*/


//module 3 task 33

// Change code below this line
/*function findMatches(array, ...args) {
  const matches = []; // Don't change this line
 

  for (const item of array) { 
    if (args.includes(item)) { 
      matches.push(item);
    }
  }

  // Change code above this line
  return matches;
}

console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));*/


//module 3 task 34


/*const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) { 
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) { 
    return `Updating book ${oldName} to ${newName}`
  }
  // Change code above this line
};
*/


//module 3 task 35
/*const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const indexBook = this.books.indexOf(oldName);
    this.books.splice(indexBook, 1, newName);



    // Change code above this line
  },
};*/

//module 3 task 36
/*const atTheOldToad = {
  // Change code below this line
  potions: [],

  // Change code above this line
};*/


//module 3 task 38

/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    
    this.potions.push(potionName);
    return this.potions;
    
    

    // Change code above this line
  },
};

console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.addPotion("Power potion"));*/


//module 3 task 39
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const index = this.potions.indexOf(potionName);
    this.potions.splice(index, 1);
    return this.potions;


    // Change code above this line
  },
};
console.log(atTheOldToad.removePotion("Dragon breath"));
*/


//module 3 task 40
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1, newName);
    return this.potions;

    // Change code above this line
  },
};

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));*/

//module 3 task 41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

