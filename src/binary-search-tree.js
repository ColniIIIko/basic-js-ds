const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor()
  {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    if(!this.rootNode)
    {
      this.rootNode = node;
      return;
    }
    let currentRoot =  this.rootNode;
    while(currentRoot)
    {

      if(currentRoot.data == node.data)
      {
        break;
      }

      if(currentRoot.data>node.data)
      {
        if(!currentRoot.left)
        {
          currentRoot.left = node;
          break;
        }
        currentRoot = currentRoot.left;
      }else
      {
        if(!currentRoot.right)
        {
          currentRoot.right = node;
          break;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  has(data) {
    let currentRoot =  this.rootNode;
    while(currentRoot)
    {

      if(currentRoot.data == data)
      {
        return true;
      }

      if(currentRoot.data>data)
      {
        currentRoot = currentRoot.left;
      }else
      {
        currentRoot = currentRoot.right;
      }
    }

    return false;
  }

  find(data) {
    let currentRoot =  this.rootNode;
    while(currentRoot)
    {

      if(currentRoot.data == data)
      {
        return currentRoot;
      }

      if(currentRoot.data>data)
      {
        currentRoot = currentRoot.left;
      }else
      {
        currentRoot = currentRoot.right;
      }
    }

    return null;
  }

  remove(data) {
    // let node;
    // let currentRoot = this.rootNode;
    // let parentNode = currentRoot;
    // while(currentRoot.data != data || currentRoot)
    // {
    //   parentNode = currentRoot;
    //   if(currentRoot.data>data)
    //   {
    //     currentRoot = currentRoot.left;
    //   }else
    //   {
    //     currentRoot = currentRoot.right;
    //   }
    // }

    // if(!currentRoot)
    // {
    //   return null;
    // }

    // let left = currentRoot.left;
    // let right = currentRoot.right;
    // if(left && right)
    // {
    //   if(parentNode.right == currentRoot)
    //   {
    //     parentNode.right = right;
    //     let min = this.min();
    //     if(min.data > left.data)
    //     {
    //       min.left = left;
    //     }
    //     else{
    //       min.right = left;
    //     }
    //   }
    //   else
    //   {
    //     parentNode.left = left;
    //     let max = this.max();
    //     if(max.data > right.data)
    //     {
    //       max.left = right;
    //     }
    //     else{
    //       max.right = right;
    //     }
    //   }
    // }
  }

  min() {
    let currentRoot =  this.rootNode;
    while(currentRoot.left)
    {
      currentRoot = currentRoot.left;
    }
    return currentRoot ? currentRoot.data : null;
  }

  max() {
    let currentRoot =  this.rootNode;
    while(currentRoot.right)
    {
      currentRoot = currentRoot.right;
    }
    return currentRoot ? currentRoot.data : null;
  }


}

module.exports = {
  BinarySearchTree
};