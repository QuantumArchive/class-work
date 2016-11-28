function recurse(input, max) {
    console.log('before', input);

    if (input < max){
        console.log(recurse(input + 1, max));
    }

    return 'after' + input;
}

console.log(recurse(1, 3));