
function print(node) {
    while(node) {
        console.log(node.value);
        node = node.next;
    }

    // for(initialization; condition; post-block)
    // for(var i=0, child=null; i < arr.length; i++) {
    //     child = arr[i];
    //     //
    // }
}

function printRecursive(node) {
    if(!node) return;
    console.log(node.value);
    printRecursive(node.next);
}

function append(node, value) {
    while(!node.next) node = node.next;
    node.next = { value, next: null };
}

function appendRecursive(node, value) {
    if(node.next) appendRecursive(node.next, value);
    else node.next = { value, next: null };
}