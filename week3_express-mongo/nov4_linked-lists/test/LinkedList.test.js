const assert = require('chai').assert;
const LinkedList = require('../LinkedList');

describe('Linked List', () => {

    const ll = new LinkedList(['a', 'b', 'c']);

    function testAsArray(expected){
        const actual = [];
        ll.forEach(v => actual.push(v));
        assert.deepEqual(actual, expected);
        assert.equal(actual[0], ll.head.value);
        assert.equal(actual[actual.length-1], ll.tail.value)
    }
    
    it('initializes from array', () => {
        testAsArray(['a', 'b', 'c']);
    });

    it('appends', () => {
        ll.append('d');
        testAsArray(['a', 'b', 'c', 'd'])
    });

    it('prepends', () => {
        ll.prepend('z');
        testAsArray(['z', 'a', 'b', 'c', 'd'])
    });

    it('at', () => {
        assert.equal(ll.at(1), 'a');
    })

    it('removeAt', () => {
        ll.removeAt(1);
        testAsArray(['z', 'b', 'c', 'd']);
    })

    it('insertAt', () => {
        ll.insertAt(1, 'y');
        testAsArray(['z', 'y', 'b', 'c', 'd']);
    })

    it('includes', () => {
        assert.isOk(ll.includes('c'));
        assert.isNotOk(ll.includes('g'));
    })

    describe('head and tail cases', () => {
        
        it('removeAt', () => {
            ll.removeAt(0);
            testAsArray(['y', 'b', 'c', 'd']);
            ll.removeAt(3);
            testAsArray(['y', 'b', 'c']);
        });

        it('insertAt', () => {
            ll.insertAt(0, 'w');
            testAsArray(['w', 'y', 'b', 'c']);
            ll.insertAt(4, 'd');
            testAsArray(['w', 'y', 'b', 'c', 'd']);
        });
    });

    describe('empty list', () => {

        it('appends', () => {
            const ll = new LinkedList();
            ll.append('a');
            assert.equal('a', ll.head.value);
            assert.equal('a', ll.tail.value);
        });

        it('prepends', () => {
            const ll = new LinkedList();
            ll.prepend('a');
            assert.equal('a', ll.head.value);
            assert.equal('a', ll.tail.value);
        });

    });
});