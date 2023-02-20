const numOfNodes = 7;
const nodeD = {
    id: 3,
    value: 3,
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
    children: []
}

const nodeG = {
    id: 6,
    value: 30,
    children: []
}
const nodeB = {
    id: 1,
    value: 29,
    children: [nodeD, nodeE, nodeF]
}

const nodeC = {
    id: 2,
    value: 51,
    children: [nodeG]

}

const root = {
    id: 0,
    value: 10,
    children: [nodeB, nodeC]
}

let sum = 0;
const queue = [];
let visited = new Array(numOfNodes);
for ( let i = 0; i < visited.length; i++ ) {
    visited[i] = false;
}
queue.push(root);
visited[root] = true;

while(queue.length) {
    let currentNode = queue.shift();
    //console.log(sum);
    sum += currentNode.value;
    for ( let i = 0; i < currentNode.children.length; i++ ) {
        //console.log(currentNode.children[i].id-0);
        if(visited[currentNode.children[i].id-0] === false) {
            //console.log(currentNode.children[i].id);
            visited[currentNode.children[i]] = true;
            queue.push(currentNode.children[i]);
        }
    }
}

console.log(sum)