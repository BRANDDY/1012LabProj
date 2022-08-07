/* JS document for A2
  For: EECS1012a 22s, York University (YorkU), Lassonde School of Engineering (LAS) 
*/

class Stack {
    //attributes
    data; // array to hold data
    top; // topIndex

    constructor() {
        this.data = [];
        this.top = 0;
    }

    // remove the top element, and also return the top element
    /* note that the element is not removed from the array. Use top to signify the curreent range */
    pop() {
        if (!this.isEmpty()) {
            this.top = this.top - 1;
            return this.data[this.top]; // removes the last element
        }
        // else if empty, do nothing
    }

    // push elelemt into the stack
    push(element) {
        this.data[this.top] = element;
        this.top += 1;
    }

    // how many elements in the stack
    size() {
        return this.top;
    }

    // return the top element in the stack
    peek() {
        return this.data[this.top - 1];
    }

    // return whether the stack is empty or not
    isEmpty() {
        if (this.top == 0) {
            return true;
        } else {
            return false;
        }
    }

    // display content, from top to end
    display() {
        var top = this.top - 1; // because top points to index where new element to be inserted
        while (top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }

}


class Queue {

    // attributes
    data;
    frontIndex;
    rearIndex;

    constructor() {
        this.data = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
    }

    enqueue(item) {
        this.data[this.rearIndex] = item;
        this.rearIndex++;
    }

    // remove from queue
    // note that the element is not removed from the array. Use frontIndex signify the current range of the queue 
    dequeue() {
            if (!this.isEmpty()) {
                var item = this.data[this.frontIndex];
                this.frontIndex++;
                return item;
            }
        }
        // return the front element in the queue
    frontItem() {
        return this.data[this.frontIndex];
    }

    // return the last element in the queue
    rearItem() {
        return this.data[this.rearIndex - 1];
    }

    // how many elements in the queue
    size() {
        return this.rearIndex - this.frontIndex;
    }

    // return whether the queue is empty -- true or false
    isEmpty() {
        if (this.size() < 1 || this.rearIndex == 0) {
            return true;
        } else {
            return false;
        }
    }

    display() {
        var str = "";
        for (var i = this.frontIndex; i < this.rearIndex; i++)
            str += this.data[i] + " ";
        return str;
    }
}




function useStack() {
    // create a new (empty) stack
    var st = new Stack();

    // output size, is empty or not. add variables if you need (optional)

    console.log("size: " + st.size()); // => 0

    console.log("isEmpty: " + st.isEmpty()); // => true
    console.log("-------------");

    // push 7 then 2 then 6 then 4 onto the stack
    st.push(7);
    st.push(2);
    st.push(6);
    st.push(4);

    st.display();

    // output size, is empty or not
    console.log("size: " + st.size()); // => 4
    console.log("isEmpty: " + st.isEmpty()); // => false

    // peek the top element
    var pk = st.peek();
    console.log("peek: " + pk); // => 4
    console.log("-------------");

    // pop an element
    var pp = st.pop();
    console.log("pop: " + pp); // => 4

    // output current size, and current top element
    console.log("size: " + st.size()); // => 3
    console.log("peek: " + st.peek()); // => 6

    st.display();
    console.log("-------------");

    // pop an element
    console.log("pop: " + st.pop()); // => 6

    // output current size, and current top element
    console.log("size: " + st.size()); // => 2
    console.log("peek: " + st.peek()); // => 2

    st.display();
    console.log("---  push 10 ---------");

    // push 10 into the stack
    st.push(10);

    // print the current size and top element
    console.log("size: " + st.size()); // => 3
    console.log("peek: " + st.peek()); // => 10

    st.display();

    console.log("---  push 100 ---------");

    // push 100 into the stack
    st.push(100);
    // print the current size and top element
    console.log("size: " + st.size()); // => 4
    console.log("peek: " + st.peek()); // => 100

    st.display();

    console.log("-------------");

    // pop an element

    console.log("pop: " + st.pop()); // => 100

    // print the current size and top element
    console.log("size: " + st.size()); // => 3
    console.log("peek: " + st.peek()); // => 10

    st.display();

}


function useQueue() {
    // create a new (empty) queue
    var queue = new Queue();

    // output size and whether it is empty. add variables if you need (optional)

    console.log("size: " + queue.size()); // => 0

    console.log("isEmpty: " + queue.isEmpty()); // => true
    console.log("-------------");

    // insert into the queue 7, then 2, then 6, then 4
    queue.enqueue(7);
    queue.enqueue(2);
    queue.enqueue(6);
    queue.enqueue(4);
    // output size and whether empty
    console.log("size: " + queue.size()); // => 4
    console.log("isEmpty: " + queue.isEmpty()); // => false

    // output the front and rear elements in the queue

    console.log("front: " + queue.frontItem()); // => 7
    console.log("rear: " + queue.rearItem()); // => 4

    var content = queue.display();
    console.log(content); // => 7 2 6 4
    console.log("-------------");

    // remove an element from the queue
    var item = queue.dequeue();
    console.log("dequeue: " + item); // => 7

    // output size, fornt and rear elements
    console.log("size: " + queue.size()); // => 3
    console.log("front: " + queue.frontItem()); // => 2
    console.log("rear: " + queue.rearItem()); // => 4


    console.log(queue.display()); // => 2 6 4

    console.log("-------------");

    // remove an element from the queue

    console.log("dequeue: " + queue.dequeue()); // => 2

    // output size, fornt and rear elements
    console.log("size: " + queue.size()); // => 2
    console.log("front: " + queue.frontItem()); // => 6
    console.log("rear: " + queue.rearItem()); // => 4

    console.log(queue.display()); // => 6 4   

    console.log("--- enqueue 10 ----------");

    // insert 10 into the queue
    queue.enqueue(10);
    // output size, fornt and rear elements
    console.log("size: " + queue.size()); // => 3
    console.log("front: " + queue.frontItem()); // =>  6
    console.log("rear: " + queue.rearItem()); // => 10

    console.log(queue.display()); // =>  6 4 10

    console.log("--- enqueue 100----------");
    // insert 100 into the queue
    queue.enqueue(100);
    // output size, fornt and rear elements
    console.log("size: " + queue.size()); // => 4
    console.log("front: " + queue.frontItem()); // => 6
    console.log("rear: " + queue.rearItem()); // => 100

    console.log(queue.display()); // => 6 4 10 100 

    console.log("-------------");

    // remove from queue
    console.log("dequeue: " + queue.dequeue()); // => 6

    // output size, fornt and rear elements
    console.log("size: " + queue.size()); // => 3
    console.log("front: " + queue.frontItem()); // => 4
    console.log("rear: " + queue.rearItem()); // => 100

    console.log(queue.display()); // =>  4 10 100
}


function sortQueue() {

    const queue = new Queue();

    var arrayMax = 6;
    var limit = 100;

    for (var i = 0; i < 6; i++)
        queue.enqueue(Math.floor(Math.random() * limit));

    sortQUsingStack(queue);

}

function sortQUsingStack(q) {
    console.log("input:  " + q.display());

    // your code below
    var st = new Stack(); // create a new stack

    while (q.size() > 0) { //alert("here0");
        if (st.size() >= 1 && q.frontItem() > st.peek()) {
            while (q.frontItem() > st.peek() && st.size() != 0) {
                q.enqueue(st.pop());
            }
        }
        st.push(q.dequeue());
    }
    while (st.size() > 0) {
        q.enqueue(st.pop());
    }
    // your code above
    console.log("sorted: " + q.display());
    console.log("---------------");
}