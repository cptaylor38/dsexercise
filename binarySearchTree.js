class Node { //represents each node in the tree
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null; //top of the tree
    }
    add(data){
        const node = this.root; //create a reference to the root node
        if(node === null){
            this.root = new Node(data); //setting root node to first added if empty
            return;
        }
        else
        {
            const searchTree = function(node){ //recursive function that passes in the root node. runs if first node is already populated
                if(data < node.data){ //if data passed in is less than root node data
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !== null){
                        return searchTree(node.left); //repeat function and pass in left side
                    }
                }
                else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }
                    else if (node.right !== null){
                        return searchTree(node.right);
                    }
                 }
                 else 
                 {
                    return null;
                 }
            }
            return searchTree(node);
        }
    }
    findMin(){
        let current = this.root;
        //lowest value is on the left at the very end so we set a while loop to
        //update the current iterated value and continue until there are no more values to iterate on
        //leaving the last "current" value as the minimum value
        while(current.left !== null)
        {
        current = current.left;
        }
        return current.data;
    }
    findMax(){
        //reverse of min. loop through right side until there are no more values
        //each loop updates current value and continues until there are no more child values
        //return the last updated current value upon loop termination
        let current = this.root;
        while(current.right !== null)
        {
           current = current.right
        }
        return current.data;
    }
    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }
            else{
                current = current.right;
            }
            if(current === null){
                return null;
            }
        }
        return current;
    }
    isPresent(data){
        let current = this.root;
        while(current){ //while there is a current node
            if(data === current.data){
                return true;
            }
            if(data < current.data){
                //if the data searched is less than the current node's data, 
                //set the current node to the next left node; else set it to the right;
                current = current.left;
            }
            else{
                current = current.right;
            }
        }
        return false;
    }
    remove(data){
        const removeNode = function(node, data){
            if(node == null)
            {
                return null; //if the tree is empty return null
            }
            if(data == node.data){
                if(node.left == null && node.right == null)
                {
                    return null; //if the node has no children, return null;
                }
                if(node.left == null)
                {
                    return node.right; //if node has no left child, shift to the right side of subtree
                }
                if(node.right == null)
                {
                    return node.left; //if node has no right child, shift to the left side of subtree
                }
                //node has two children

//                 node = 8
//   node = 3 (removed value)  node = 14
//node = 1     node = 6
//         node = 4     node = 7
//if node 3 gets removed, we need to replace it with 4

//need to go to right node because we need to find a value that's higher than the left, but loop through
//until we find the last value on the left side
                let tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
//setting node.data to tempNode.data, allowing to return if there are no more values
//and setting the former node value to the temp node value (the lowest on the left branch)
//node.data was originally 3, but removed, and then replaced with 4 (the lowest on the left branch)
                node.right = removeNode(node.right, tempNode.data);
//node.data has been set to 4 with 1 as left child and 6 as right child.
//node.right = removeNode(6, 4)
                return node;
            }
            else if(data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }
            else
            {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
    isBalanced(){
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }
    findMinHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right){
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    findMaxHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left > right){
            return left + 1;
        }
        else{
            return right + 1;
        }
    }
    inOrder(){
        if(this.root == null){
            return null;
        }
        else{
            let result = new Array();
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }
    preOrder(){
        if(this.root == null){
            return null;
        }
        else{
            let result = new Array();
            function traversePreOrder(node){
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }
    postOrder(){
        if(this.root == null){
            return null;
        }
        else{
            let result = new Array();
            function traversePostOrder(node){
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }
    levelOrder(){
        let result = [];
        let Q = [];
        if(this.root != null){
            Q.push(this.root);
            while(Q.length > 0){
                let node = Q.shift();
                result.push(node.data);
                if(node.left != null){
                    Q.push(node.left);
                }
                if(node.right != null){
                    Q.push(node.right);
                }
            }
            return result;
        }
        else{
            return null;
        }
    }
}