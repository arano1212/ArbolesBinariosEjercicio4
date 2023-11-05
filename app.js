//Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
//ejercicio 1

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new TreeNode(value);
  }

  insertRight(value) {
    this.right = new TreeNode(value);
  }

  comparate() {
    if (this.left && this.right && this.left.value === this.right.value) {
      console.log(' Los Nodos Son iguales');
    } else {
      console.log('Los Nodos No son iguales');
    }
  }
}

const treeBinary = new TreeNode(2);

treeBinary.insertLeft(10);
treeBinary.insertRight(10);

treeBinary.comparate()

console.log(treeBinary);



// Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
//ejerecicio 2

/*class Tree{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function CopyTree(OriginalTree) {
  if (!OriginalTree) {
    return null;
  }
   const NewNode = new Tree(OriginalTree.value);
   
   NewNode.right = CopyTree(OriginalTree.right);
   NewNode.left = CopyTree(OriginalTree.left);


   return NewNode;
}

const treeBinaryA = new Tree(1);
treeBinaryA.right = new Tree(2);
treeBinaryA.left = new Tree(3);
treeBinaryA.left.left = new Tree(4);
treeBinaryA.left.right = new Tree(5);
treeBinaryA.right.left = new Tree(6);
treeBinaryA.right.right = new Tree(7);


const treeBinaryB = CopyTree(treeBinaryA);

console.log(`Este es el Arbol original`,treeBinaryA);
console.log(` Este es el Arbol Copia`,treeBinaryB);*/


//Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
//ejercicio 3
//intento 1
/*class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    const NewNode = new TreeNode(value);

    if (this.root === null) {

      this.root = NewNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {

          if (currentNode.left === null) {
            
            currentNode.left = NewNode;
            return

          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            
            currentNode.right = NewNode;
            return;

          } else {
            currentNode = currentNode.right;
          }
        }

      }

    }
  }
}
const TreeBinary = new BinaryTree();
TreeBinary.insertNode(10);
TreeBinary.insertNode(2);
TreeBinary.insertNode(5);
TreeBinary.insertNode(7);
TreeBinary.insertNode(10);
TreeBinary.insertNode(1);
TreeBinary.insertNode(15);
TreeBinary.insertNode(7);
TreeBinary.insertNode(6);
TreeBinary.insertNode(25);
TreeBinary.insertNode(60);
TreeBinary.insertNode(5);
TreeBinary.insertNode(2);
TreeBinary.insertNode(8);
TreeBinary.insertNode(10);
TreeBinary.insertNode(9);
TreeBinary.insertNode(7);
TreeBinary.insertNode(2);


console.log(TreeBinary);

function printLevelNode(root, level, currentLevel = 0) {
  if (!root) {
    return;    
  }

  if (currentLevel === level) {
    console.log(root.value);
    
  } else {
    printLevelNode(root.right, level, currentLevel +1);
    printLevelNode(root.left, level, currentLevel +1);  
  }  
}

 console.log(`Nodos en el nivel 4:`);
 printLevelNode(TreeBinary.root, 4);*/


//ejercicio 3
//intento 2

/*class Node{
 constructor(value, left = null, right = null){
   this.value = value;
   this.left = left;
   this.right = right;
 }
}

class Tree{
 constructor(){
   this.root = null;
 }

 printAtlevel(level){
   if (!this.root) {
     return;
   }
   this.printAtlevelRecursive(this.root, level, 1);
 }


 printAtlevelRecursive(node, level, currentLevel){
   if (!node) {
     return;
   }

   if (currentLevel === level) {
     console.log(node.value);
     
   } else {
    this.printAtlevelRecursive(node.left,level, currentLevel +1);
    this.printAtlevelRecursive(node.right, level, currentLevel +1); 
   }

 }

}


const treeBinary = new Tree();
treeBinary.root = new Tree(1)
treeBinary.root.left = new Node(2);
treeBinary.root.right = new Node(3);
treeBinary.root.left.left = new Node(4);
treeBinary.root.left.right = new Node(5);
treeBinary.root.right.left = new Node(6);
treeBinary.root.right.right = new Node(7);


console.log(treeBinary);

console.log(`Nodos en el nivel 3:`);
treeBinary.printAtlevel(3);*/


//Escribe una función que devuelva el número de hojas de un árbol binario.
//ejercio 4 

/*class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }


  insertNode(value) {
    const NewNode = new TreeNode(value);

    if (this.root === null) {
      this.root = NewNode;

    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {

          if (currentNode.left === null) {
            currentNode.left = NewNode;
            return;

          } else {
            currentNode = currentNode.left;

          }

        } else {
          if (currentNode.right === null) {
            currentNode.right = NewNode;
            return;

          } else {
            currentNode = currentNode.right;

          }
        }

      }
    }

  }

  countLeaves() {
    return this.countLeavesRecursive(this.root);
  }

  countLeavesRecursive(node) {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      return 1;
    }

    const leftLeaves = this.countLeavesRecursive(node.left);
    const rightLeaves = this.countLeavesRecursive(node.right);

    return leftLeaves + rightLeaves;
  }
}

const TreeBinary = new BinaryTree();
TreeBinary.insertNode(10);
TreeBinary.insertNode(2);
TreeBinary.insertNode(5);
TreeBinary.insertNode(7);
TreeBinary.insertNode(10);
TreeBinary.insertNode(1);
TreeBinary.insertNode(15);
TreeBinary.insertNode(7);
TreeBinary.insertNode(6);
TreeBinary.insertNode(25);
TreeBinary.insertNode(60);
TreeBinary.insertNode(5);
TreeBinary.insertNode(2);
TreeBinary.insertNode(8);
TreeBinary.insertNode(10);
TreeBinary.insertNode(9);
TreeBinary.insertNode(7);
TreeBinary.insertNode(2);


console.log(TreeBinary);
const numberLeaves = TreeBinary.countLeaves();
console.log(`El Numero de hojas es este Abol Binario es ${numberLeaves}`);*/











