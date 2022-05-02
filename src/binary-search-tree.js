const {NotImplementedError} = require('../extensions/index.js');
const {Node} = require("../extensions/list-tree");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.baseRoot = null;
    }

    root() {
        return this.baseRoot;
    }

    add(data) {

        this.baseRoot = addElement(this.baseRoot, data);

        function addElement(node, data) {
            if (!node) {
                return new Node(data);
            } else if (node.data === data) {
                return node;
            } else if (data < node.data) {
                node.left = addElement(node.left, data);
            } else {
                node.right = addElement(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        return hasElement(this.baseRoot, data);

        function hasElement(node, data) {
            if (!node) {
                return false;
            } else if (node.data === data) {
                return true;
            }
            return data < node.data ? hasElement(node.left, data) : hasElement(node.right, data);
        }

    }

    find(data) {
        return seachElement(this.baseRoot, data);

        function seachElement(node, data) {
            if (!node) {
                return null;
            } else if (node.data === data) {
                return node;
            }
            return data < node.data ? seachElement(node.left, data) : seachElement(node.right, data);
        }
    }

    remove(data) {
        this.baseRoot = removeElement(this.baseRoot, data);

        function removeElement(node, data) {
            if (!node) {
                return null;
            } else if (data < node.data) {
                node.left = removeElement(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeElement(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                } else if (!node.left) {
                    node = node.right;
                    return node;
                } else if (!node.right) {
                    node = node.left;
                    return node;
                }

                let maxLeft = node.left;
                while (maxLeft.right) {
                    maxLeft = maxLeft.right;
                }
                node.data = maxLeft.data;
                node.left = removeElement(node.left, maxLeft.data);

                return node;
            }
        }
    }

    min() {
        if (!this.baseRoot) {
        return;
        }
        let node = this.baseRoot;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.baseRoot) {
            return;
        }
        let node = this.baseRoot;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};