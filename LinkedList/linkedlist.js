class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
}

// insert at the beginning
LinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
}

// insert at the end

LinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data)
    if(!this.head) {
        this.head = newNode;
        return;
    }
    let last = this.head
    while(last.next) {
        last = last.next
    }
    last.next = newNode;
}


// insert at given node 

LinkedList.prototype.insertAfter = function (prevNode, data) {
    if (!prevNode) {
        console.log("The given prev node cannot be null");
        return
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

// delete the first node

LinkedList.prototype.deleteFirstNode = function() {
    if(!this.head){
        return
    }
    this.head = head.next
}

// delete last node (second last node)
LinkedList.prototype.deleteLastNode = function () {
    if(!this.head) {
        return // nothing to delete if list is empty
    }
    if(!this.head.next) {
        this.head = null // if there is only one node
    }

    let secondLast = this.head

    while(secondLast.next.next) {
        secondLast = secondLast.next
    }

    secondLast.next = null
}

// delete by key

LinkedList.prototype.deleteByKey = function(key) {
    if(!this.head) {
        console.log("List is empty");
        return
    }
    // data found at head
    if(this.head.data === key) {
        this.head = this.head.next
        return
    }

    let current = this.head
    while(current.next !== null){
        if(current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }
    console.log("No node found with key: ", key);
}

LinkedList.prototype.search = function (key) {
    let current = this.head
    while(current){
        if (current.data === key) {
            return true
        }
        current = current.next
    }
    return false
}

// traversal

LinkedList.prototype.printList = function () {
    let current = this.head;
    let listValues = []
    while (current !== null) {
        listValues.push(current.data) // add data to list
        current = current.next; // move to next node
    }
    if(this.head) {
        console.log(listValues.join(" -> "))
    } else {
        console.log("List is empty");
    }
}

// reverse a linked list

LinkedList.prototype.reverse = function() {
    let current = this.head
    let prev = null
    let next = null
    while(current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    this.head = prev

}

l = new LinkedList()
l.insertAtBeginning(20)
l.insertAtEnd(10)
l.insertAtBeginning(120)
l.insertAtBeginning(220)
l.printList()
l.reverse()
l.printList()
console.log(l.search(1201));