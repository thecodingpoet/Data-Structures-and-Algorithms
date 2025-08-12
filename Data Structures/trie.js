class TrieNode {
  constructor() {
    this.children = {}
    this.isWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let curr = this.root

    for (const char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode()
      }

      curr = curr.children[char]
    }

    curr.isWord = true 
  }

  search(word) {
    let curr = this.root 

    for (const char of word) {
      if (!curr.children[char]) return false 
      curr = curr.children[char]
    }

    return curr.isWord
  }

 
  startsWith(prefix) {
    let curr = this.root 

    for (const char of prefix) {
      if (!curr.children[char]) return false
      curr = curr.children[char]
    }

    return true
  }
}

const trie = new Trie()
trie.insert("apple")
console.log(trie.search("apple"))   // true
console.log(trie.search("app"))     // false
console.log(trie.startsWith("app")) // true
trie.insert("app");
console.log(trie.search("app"))  // true
