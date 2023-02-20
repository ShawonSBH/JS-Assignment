const numOfNodes = 16;

const nodeP = {
    id: 15,
    name: "P",
    children: []
}


const nodeO = {
    id: 14,
    name: "O",
    children: []
}

const nodeN = {
    id: 13,
    name: "N",
    children: []
}


const nodeM = {
    id: 12,
    name: "M",
    children: []
}

const nodeL = {
    id: 11,
    name: "L",
    children: []
}


const nodeK = {
    id: 10,
    name: "K",
    children: [nodeP]
}

const nodeJ = {
    id: 9,
    name: "J",
    children: [nodeN, nodeO]
}


const nodeI = {
    id: 8,
    name: "I",
    children: []
}

const nodeH = {
    id: 7,
    name: "H",
    children: []
}


const nodeG = {
    id: 6,
    name: "G",
    children: []
}

const nodeF = {
    id: 5,
    name: "F",
    children: []
}


const nodeE = {
    id: 4,
    name: "E",
    children: [nodeL, nodeM]
}

const nodeD = {
    id: 3,
    name: "D",
    children: [nodeI, nodeJ, nodeK]
}


const nodeC = {
    id: 2,
    name: "C",
    children: [nodeG, nodeH]
}

const nodeB = {
    id: 1,
    name: "B",
    children: [nodeE, nodeF]
}


const root = {
    id: 0,
    name: "A",
    children: [nodeB, nodeC, nodeD]
}
const visited = Array(numOfNodes).fill(false);
visited[root] = true;
let leafNode = 0;

function dfs(currentNode) {
    let counter = 0;
    if(currentNode.children.length===0){
        //console.log(currentNode.name);
        leafNode++;
        return 1;
    } 
    for ( let i = 0; i < currentNode.children.length; i++ ) {
        if(visited[currentNode.children[i].id-0] === false) {
            visited[currentNode.children[i]] = true;
            counter += dfs(currentNode.children[i]);
        }
    }
    currentNode.childCount = counter;
    return counter;
}

dfs(root);

const chocolateGiven = 90;

for ( let i = 0; i < root.children.length; i++ ) {
    let ratio = chocolateGiven/leafNode;
    console.log(`Total children of ${root.children[i].name} is ${root.children[i].childCount}. So ${ratio*root.children[i].childCount} chocolates should be given.`)
}