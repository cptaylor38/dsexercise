class LinkedList {
    constructor(){
        this.head = null; //first element of list
        this.tail = null; //last element of list
    }

    append(value){
        const newNode = {value, next: null};

        if(this.tail) this.tail.next = newNode;
        this.tail = newNode;
        if(!this.head) this.head = newNode;

    }

    toArray(){
        const elements = [];
        let currentNode = this.head;
        while(currentNode){
            elements.push(currentNode);
            currentNode = currentNode.next;
        }
        return elements;
    }

    prepend(value){
        const newNode = {value, next: this.head}
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
    }

    delete(value){
        if(!this.head) return;
        let currentNode = this.head;

        while(this.head && this.head.value === value){
            this.head = this.head.next;
        }

        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next = currentNode.next.next;
            }
            else {
                currentNode = currentNode.next;
            }
        }
    }

    find(value){
        if(!this.head) return null;

        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    findAll(value){
        if(!this.head) return null;
        let matches = [];
        while(currentNode){
            if(currentNode.value === value){
                matches.push(currentNode)
            }
            currentNode = currentNode.next;
        }
        if(matches.length > 0) return matches;
        else return null;
    }

    insertAfter(value, afterValue){
        const existing = this.find(afterValue);
        if(existing) {
            const newNode = {value, next: existing.next}
            existing.next = newNode;
        }
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.prepend('First Value');