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


function mySet(){
    var collection = [];

    this.has = function(element){
        return (collection.indexOf(element) !== -1)
    }

    this.values = function(){
        return collection;
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function(){
        return collection.length;
    }

    this.union = function(otherSet){
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        })
        secondSet.forEach(function(e){
            unionSet.add(e);
        })
        return unionSet;
    }

    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }

    this.difference = function(otherSet){
        let differenceSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }

    this.subset = function(othersSet){
        let firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        })
    }
}
