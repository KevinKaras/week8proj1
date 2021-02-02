// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.

function dfs(root){
    let newArr = [];
    if (root === null) {
        return [];
    }

    newArr.push(root.val)
    let miniArr1 = dfs(root.left);   // []
    let miniArr2 = dfs(root.right);  // []
    let combinedArr = miniArr1.concat(miniArr2)
    newArr = newArr.concat(combinedArr);
    return newArr;
}

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// function preOrderArray(root) {
//     let newArr = [];
//     if (root === null) {
//         return [];
//     }

//     newArr.push(root.val)
//     let miniArr1 = preOrderArray(root.left);   // []
//     let miniArr2 = preOrderArray(root.right);  // []
//     let combinedArr = miniArr1.concat(miniArr2)
//     newArr = newArr.concat(combinedArr);
//     return newArr;
// }

// // function constructUnbalancedTree() {
// //     let h = new TreeNode('h');
// //     let i = new TreeNode('i');
// //     let j = new TreeNode('j');
// //     let k = new TreeNode('k');
// //     let l = new TreeNode('l');
// //     let m = new TreeNode('m');

// //     h.left = i;
// //     h.right = k;
// //     i.right = j;
// //     k.left = l;
// //     l.right = m;

// //     return h;
// // }

// console.log(preOrderArray(new TreeNode("a")))

module.exports = { dfs };