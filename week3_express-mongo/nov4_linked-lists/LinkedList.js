class LinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

module.exports = class LinkedList {
    constructor(items) {
        this.head = this.tail = null;
        if(items && items.length) {
            items.forEach(item => this.append(item));
        }
    }

    append(value) {
        let node = this.head;
        const newNode = new LinkedNode(value);

        if(!node) {
            this.head = this.tail = newNode;
        }
        else {
            while(node.next) node = node.next;
            this.tail = node.next = newNode;
        }
    }

    prepend(value) {
        let node = this.head;
        const newNode = this.head = new LinkedNode(value);

        if(!node) {
            this.tail = newNode;
        }
        else {
            newNode.next = node;
        }
    }

    includes(value) {
        let node = this.head;
        while (node) {
            if(node.value === value) return true;
            node = node.next;
        }
        return false;
    }

    nodeAt(index) {
        let node = this.head;
        while(index-- && node) node = node.next;
        return node;
    }

    at(index) {
        const node = this.nodeAt(index);
        return node ? node.value : undefined;
    }

    removeAt(index) {
        if(!index) {
            const node = this.head;
            this.head = node.next;
            node.next = null;
        }
        else {
            const node = this.nodeAt(index - 1);
            const next = node.next;
            if(next) {
                node.next = next.next;
                if(!node.next) this.tail = node;
            }
            else {
                node.next = null;
                this.tail = node;
            }
        }
    }

    insertAt(index, value) {
        const newNode = new LinkedNode(value);
        if(!index) {
            const node = this.head;
            this.head = newNode;
            newNode.next = node;
        }
        else {
            const node = this.nodeAt(index - 1);
            if(!node) throw new Error(`no node at index ${index}`);

            const next = node.next;
            node.next = newNode;

            if(next) newNode.next = next;
            else this.tail = newNode;
        }
    }

    forEach(fn) {
        let node = this.head;
        while(node) {
            fn(node.value);
            node = node.next;
        }
    }
}