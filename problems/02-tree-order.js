// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
function preOrderArray(root) {
    let newArr = [];
    if (root === null){
        return [];
    }
    
    newArr.push(root.val)
    let miniArr1 = preOrderArray(root.left);   // []
    let miniArr2 = preOrderArray(root.right);  // []
    let combinedArr = miniArr1.concat(miniArr2)
    newArr = newArr.concat(combinedArr);
    return newArr;
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root) {
    // Your code here
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {
    // Your code here
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
