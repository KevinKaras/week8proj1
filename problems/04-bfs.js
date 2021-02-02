// Implement a function that takes in the root of a
// binary tree, traverses it in breadth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){
    let newArr = [];
    let queueArr = [root];

    if (!root){
        return [];
    }
    while(queueArr.length !== 0){
        let element = queueArr.shift();
        newArr.push(element.val);
        if (element.left){
            queueArr.push(element.left);
        } 
        if (element.right){
            queueArr.push(element.right);
        }

    } 
    return newArr;
    

}

//      element : G
//      res     [ A, B, C, D, E, F, G]
    //  queue   [ ]


                       // A


           // B                       C



    // D           E             F            G

// 
// 1. print
// 2. go to left of root
// 3. print left root
// 4. go down right of root
// 5. print right root
// 6. go into left root 
// 7. 




module.exports = { bfs };