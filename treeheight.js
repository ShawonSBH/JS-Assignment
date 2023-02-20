const numOfNodes = 7;


const nodeG = {
    id: 6,
    value: 30,
    children: []
}

const nodeE = {
    id: 4,
    value: 18,
    children: []
}

const nodeF = {
    id: 5,
    value: 21,
    children: [nodeG]
}

const nodeD = {
    id: 3,
    value: 3,
    children: [nodeF]
}




const nodeB = {
    id: 1,
    value: 29,
    children: [nodeD]
}

const nodeC = {
    id: 2,
    value: 51,
    children: [nodeE]

}

const root = {
    id: 0,
    value: 10,
    children: [nodeB, nodeC]
}

let maxHeight = 0;
const stack = [];
let visited = new Array(numOfNodes);
for ( let i = 0; i < visited.length; i++ ) {
    visited[i] = false;
}
visited[root] = true;
stack.unshift(root);
let currentHeight = 0;

const max = (num1, num2) => {
    if(num1 > num2) return num1;
    else return num2;
}

function dfs(currentNode) {
    while(stack.length) {
        currentHeight = stack.length;
        //console.log(currentNode.id);
        for ( let i = 0; i < currentNode.children.length; i++ ) {
            if(visited[currentNode.children[i].id-0] === false) {
                visited[currentNode.children[i]] = true;
                stack.unshift(currentNode.children[i]);
                dfs(currentNode.children[i]);
            }
        }
        maxHeight = max(maxHeight, currentHeight-1);
        stack.shift();
    }
}

dfs(root);

console.log(maxHeight);