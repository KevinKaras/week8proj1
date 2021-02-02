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
    //combined method = concat
    //populate array = .push
    //at end, return all combined
    let newArr = [];
    if (root === null) {
        return [];
    }

    let miniArrLeft = inOrderArray(root.left);
    newArr.push(root.val);
    let miniArrRight = inOrderArray(root.right);
    let combinedArr = miniArrLeft.concat(newArr.concat(miniArrRight))
    // let combined = [...miniArrLeft, newArr, ...miniArrRight]
    return combinedArr

}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
// function postOrderArray(root) {
    
//     if (root === null) {
//         return [];
//     }
//     let miniArrLeft = postOrderArray(root.left);
//     let miniArrRight = postOrderArray(root.right);
//     return miniArrLeft.concat(miniArrRight.concat(root.val));
    
    
// }

function postOrderArray(root, array = []){
    if (root === null){
        return []
    }
    postOrderArray(root.left, array);
    postOrderArray(root.right, array);
    array.push(root.val);
    return array;
}



module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
