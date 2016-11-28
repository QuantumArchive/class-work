const indent = '  ';
function traverse(node, level = 0) {
    console.log(indent.repeat(level) + node.data);
    level++;
    node.children.forEach(n => traverse(n, level));
}

const D = { data: 'D', children: [] };
const B = { data: 'B', children: [D] };
const C = { data: 'C', children: [] };
const A = { data: 'A', children: [B, C] };

traverse(A);