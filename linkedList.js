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
        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next = currentNode.next.next;
            }
        }
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.prepend('First Value');