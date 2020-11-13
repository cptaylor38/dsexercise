const resultData = new Map();

resultData.set('average', 1.53);
resultData.set('lastResult', null);

const germany = {name: 'Germany', population: 82}

resultData.set(germany, 0.89);

resultData.get('average'); // .get(key) to retrieve a value by key

resultData.delete(germany);