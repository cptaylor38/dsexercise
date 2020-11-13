var letters = [];
var word = "racecar";
var reverseWord = '';

function normalArrayMethod(){
    for(let i = 0; i < word.length; i++){
        letters.push(word[i])
    }
    
    for(let i = 0; i < word.length; i++){
        reverseWord += letters.pop();
    }
    
    if(reverseWord === word) return true;
    else return false;
}

const Stack = function(){
    this.count();
    this.storage();

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++; //incrementing to create a new index for a future received value
    }

    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
        this.count--; //decrementing to retrieve the last index (count - 1) that has attached value
        let result = this.storage[this.count];
        delete this.storage[this.count];
        //value has been removed so the count (index) is now free to receive a value
        return result;
    }

    this.size = function(){
        return this.count;
        //count will always be 1 higher because it is initialized at 0 and has an additional empty index.
        //aka 0 in .push() returns 1. A count of two will have two elements at count(index) 0 and 1.
    }

    this.peek = function(){
        return this.storage[this.count - 1] //returning the last value of the stack.
        //i.e. Two items in the stack, count is 3. Last known element was placed when count was 2.
    }
}