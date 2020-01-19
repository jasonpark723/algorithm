class btNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  add(val) {
    if (!this.root) {
      this.root = new btNode(val);
      return this;
    }
    let current = this.root;
    let previous = null;
    while (!current) {
      previous = current;
      if (val > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    if (val > previous.val) {
      previous.right = new btNode(val);
    } else {
      previous.left = new btNode(val);
    }
    return this;
  }
}

let newBST = new bst();
newBST.add(3).add(5);
//   .add(2);
console.log(newBST);
