describe('Immutable manipulations', () => {
 describe('performance', () => {
  const numbers = Array.from({length: 100000}, (v, k) => Math.floor(Math.random() * (9 + 9 + 1)) - 9 ); 
  const sum = list => list.reduce((total, item) => total + item);
  const total = sum(numbers);

  const sumAbs = list => list.reduce((total, item) => total + Math.abs(item));
  const sumAbsPitfall = list => {
    for(let i = 0; i < list.length; i++) {
       list[i] = Math.abs(list[i]);
    }
    return sum(list);
  }
  const makeCopySlice = (list) => list.slice(0);
  const makeCopyOneByOne = (list) => {const a=[]; list.forEach( elem => a.push(elem)); return a;};

//console.log("list: " + JSON.stringify(numbers));
  test('performance for sum ', () => {
	console.time('sum');
    const s = sum(numbers);
	console.timeEnd('sum');

	console.time('sumAbs');
    const sa = sumAbs(numbers);
	console.timeEnd('sumAbs');

	console.time('sumAbsPitfall');
    const sap = sumAbsPitfall(numbers);
	console.timeEnd('sumAbsPitfall');

    expect(s).toEqual(total);
  })
  test('performance for copy ', () => {
	console.time('makeCopySlice');
    const numbers2 = makeCopySlice(numbers);
	console.timeEnd('makeCopySlice');
	console.time('makeCopyOneByOne');
    const numbers3 = makeCopyOneByOne(numbers);
	console.timeEnd('makeCopyOneByOne');

    expect(numbers).toEqual(numbers2);
    expect(numbers).toEqual(numbers3);
  })

 })

 describe('for Arrays', () => {
  const FRUIT_BASKET = ['Oranges', 'Bananas', 'Apples']
  test('sample test', () => {
    expect(FRUIT_BASKET).toEqual(FRUIT_BASKET); // value comparison
  })


  test('Array Shallow copy', () => {
    /* 
     * Use the spread operaror to make a shallow copy of the fruitBasket array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...FRUIT_BASKET];
    expect(updatedFruitBasket).toEqual(FRUIT_BASKET); // value comparison
    expect(updatedFruitBasket).not.toBe(FRUIT_BASKET); // reference comparison
  })

  test('Append', () => {
    /* 
     * Use the spread operaror to make a shallow copy of the fruitBasket array 
     * while at the same time adding a new item "Melon" to the end of the array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...FRUIT_BASKET, 'Melon']; // create a new one with 1 more value
    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Apples', 'Melon']);
    expect(updatedFruitBasket).not.toBe(FRUIT_BASKET);              // refs comparison
    expect(FRUIT_BASKET).toEqual(['Oranges', 'Bananas', 'Apples']); // original not modified
  })

  test('Prepend', () => {
    /* 
     * Use the spread operaror to make a shallow copy of the FRUIT_BASKET array 
     * while at the same time adding a new item "Pineapple" to the beginning of the array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = ['Pineapple', ...FRUIT_BASKET];
    expect(updatedFruitBasket).toEqual(['Pineapple', 'Oranges', 'Bananas', 'Apples']);
    expect(updatedFruitBasket).not.toBe(FRUIT_BASKET);               // refs comparison
    expect(FRUIT_BASKET).toEqual(['Oranges', 'Bananas', 'Apples']);  // original not modified
  })

  test('Slice', () => {
    const FRUIT_BASKET = ['Oranges', 'Bananas', 'Apples', 'Strawberries'];
    /* 
     * Use the slice method to make a copy of the fruitBasket array
     * containing only the FIRST three items of the array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = FRUIT_BASKET.slice(0,3);

    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Apples']);
    expect(updatedFruitBasket).not.toBe(FRUIT_BASKET);                // refs comparison
    expect(FRUIT_BASKET).toEqual(['Oranges', 'Bananas', 'Apples', 'Strawberries']); // original not modified
  })

  test('Slice (until the end)', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Apples', 'Strawberries'];
    /* 
     * Use the slice method to make a copy of the fruitBasket array
     * containing only the LAST two items ('Apples' and 'Strawberries').
     * Notice that when slicing up to the end of the array, you don't need
     * to provide the second parameter to the slice method.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const redFruits = fruitBasket.slice(2);

    expect(redFruits).toEqual(['Apples', 'Strawberries']);         // refs comparison
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Apples', 'Strawberries']); // original not modified
  })


  test('Remove at specific index', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries'];
    /* 
     * Use a combination of the spread operator and the slice method to make
     * a copy of the fruitBasket array containing only the fruits
     * (In other words, remove the 'sausages' entry at index 2).
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...fruitBasket.slice(0,2),  ...fruitBasket.slice(3)];
    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Apples', 'Strawberries']); 

    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries']);
  })

  test('Substitute at specific index', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries'];
    /* 
     * Use a combination of the spread operator and the slice method to make
     * a copy of the fruitBasket array updating the
     * entry at index 2 (Sausages) for 'Blueberry'.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...fruitBasket.slice(0,2), 'Blueberry', ...fruitBasket.slice(3)];

    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Blueberry', 'Apples', 'Strawberries']);
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries']);
  })

  test('Filtering', () => {
    const fruitBasket = [
      {name: 'Oranges', tasty: true},
      {name: 'Bananas', tasty: true},
      {name: 'NastyBerry', tasty: false},
      {name: 'Strawberries', tasty: true}
    ];
    /* 
     * Use the array's filter method to create a new array
     * containing only "tasty" fruits
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = fruitBasket.filter(fruit => fruit.tasty);

    expect(updatedFruitBasket).toEqual([
      {name: 'Oranges', tasty: true},
      {name: 'Bananas', tasty: true},
      {name: 'Strawberries', tasty: true}
    ]);
    expect(fruitBasket).toEqual([
      {name: 'Oranges', tasty: true},
      {name: 'Bananas', tasty: true},
      {name: 'NastyBerry', tasty: false},
      {name: 'Strawberries', tasty: true}
    ]);
  })

  test('Conditional update', () => {
    const fruitBasket = [
      {name: 'Oranges', color: 'orange', tasty: false},
      {name: 'Bananas', color: 'yellow', tasty: false},
      {name: 'Apples', color: 'red', tasty: false},
      {name: 'Strawberries', color: 'red', tasty: false}
    ];
    /* 
     * The map method is also a powerful array method that always return a new array.
     * It can be used for complex immutable manipulations. 
     * Use map to change the 'tasty' value to 'true' for all red fruits 
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = fruitBasket.map((fruit) => {
      if(fruit.color==='red') {
        return {...fruit, tasty: true}
      }
      return fruit;
    });

    expect(updatedFruitBasket).toEqual([
      {name: 'Oranges', color: 'orange', tasty: false},
      {name: 'Bananas', color: 'yellow', tasty: false},
      {name: 'Apples', color: 'red', tasty: true},
      {name: 'Strawberries', color: 'red', tasty: true}
    ]);
    expect(fruitBasket).toEqual([
      {name: 'Oranges', color: 'orange', tasty: false},
      {name: 'Bananas', color: 'yellow', tasty: false},
      {name: 'Apples', color: 'red', tasty: false},
      {name: 'Strawberries', color: 'red', tasty: false}
    ]);
  })
});

describe('for Objects', () => {
  const JON_SNOW = {
	name: 'Jon Snow',
	occupation: 'Lord Commander',
	skills: [] // learning js
  }
  
  test('Shallow copy', () => {
    /* 
     * Use the spread operaror to make a copy of the 'JON_SNOW' object.
     * 
     * Assign the new object to the updatedJon constant.
     */ 

    const updatedJon = {...JON_SNOW};
    expect(updatedJon).toEqual({name: 'Jon Snow', occupation: 'Lord Commander', skills: []});
    expect(updatedJon).not.toBe(JON_SNOW);
  })

  test('Update', () => {

    /* 
     * Use the spread operaror to make a copy of the 'JON_SNOW' object
     * while at the same updating the value of the 'occupation' key
     * to 'King in the North'.
     * 
     * Assign the new object to the updatedJon constant.
     */ 

    const updatedJon = {...JON_SNOW, occupation: 'King in the North'};
    expect(updatedJon).toEqual({name: 'Jon Snow', occupation: 'King in the North', skills: []});
    expect(updatedJon).not.toBe(JON_SNOW);
  })

  test('deep update', () => {
    /* 
     * Use the spread operaror to make a copy of the 'JON_SNOW' object
     * while at the same updating the value of the 'occupation' key
     * to 'King in the North' and adding a new item "Fighting"
     * to the skills array.
     * 
     * Be aware that the spread operator makes shallow copies,
     * so if you try to add an item to the `skills` array directly,
     * you'll end up changing the original one.
     * 
     * Assign the new object to the updatedJon constant.
     */ 

    const updatedJon = {
      ...JON_SNOW, 
      occupation: 'King in the North',
      skills: [...JON_SNOW.skills, 'Fighting']
    };

    expect(updatedJon).toEqual({
      name: 'Jon Snow', occupation: 'King in the North', skills: ['Fighting']
    });
    expect(updatedJon.skills).not.toBe(JON_SNOW.skills);
    expect(updatedJon).not.toBe(JON_SNOW);
  })
});

describe('Bonus', () => {
  const myCars = {
    ferrari: true,
    porsche: false,
    shelby: false,
  };

  test('Using dynamic keys', () => {
    const recentlyBoughtCar = 'porsche';

    /* 
     * Use the spread operaror to make a copy of the 'myCars' object
     * while at the same updating to true the value whose key is stored
     * in the 'recentlyBoughtCar' variable.
     * 
     * Assign the new object to the updatedMyCars constant.
     */ 

    const updatedMyCars = {...myCars, [recentlyBoughtCar]: true};
    expect(updatedMyCars).toEqual({
      ferrari: true, porsche: true, shelby: false
    });
    expect(updatedMyCars).not.toBe(myCars);
  })
 });
});
