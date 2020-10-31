const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);
ids.add('.');

// to add .add();

//to check a value 
console.log(ids.has('abc'));

//to delete
ids.delete('.');
