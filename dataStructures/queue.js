function Queue(){
    let collection = [];
    this.print = function(){
        return collection;
    }
    this.enqueue = function(element){
        collection.push(element); //push new elements to end of array
    }
    this.dequeue = function(element){
        return collection.shift(); //shift removes items from beginning of array - returning item removed
    }
    this.front = function(){
        return collection[0]; //return the item in the first position of the array
    }
    this.size = function(){
        return collection.length; //display length of array/queue
    }
    this.isEmpty = function(){
        return (collection.length === 0); //displays if the array/queue still contains items by checking 
        //array length against 0
    }
}


function PriorityQueue(){
    let collection = [];
    this.printCollection = function(){
        return collection;
    }
    this.enqueue = function(element){
        if(this.isEmpty()){ //checking if queue is empty, if it is, simply push an element into the queue
            collection.push(element) 
        }
        else{
            let added = false; //checking if added element to the queue or not
            for(let i = 0; i < collection.length; i++){ //iterating over collection to see what priorities are
                if(element[1] < collection[i][1]){
                    //the element we are passing is an array, so 0 is the value and 1 is the priority
                    //is the priority of the element less than the priority of the current iterated element
                    //ie is the priority of the element 1 (higher) versus 2 or 3 (lower) priority represented by higher number
                    collection.splice(i, 0, element);
                    //adding element to array at index (i), removing 0 elements, and adding element as third argument
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
                //if element did not pass check and does not have higher priority (lower priority value)
                //push element to the end of the array
            }
        }
    }
    this.dequeue = function(){
        let value = collection.shift();
        return value[0]
        //just returning the value of the first array element in the collection/queue
    }
    this.front = function(){
        return collection[0];
    }
    this.size = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return (collection.length === 0);
    }
}