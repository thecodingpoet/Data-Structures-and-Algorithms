class SegmentTree {
  constructor(arr) {
    this.n = arr.length    
    this.tree = Array(2 * this.n).fill(0)
    this.build(arr)
  }

  build(arr) {
    // Second half [n..2n-1] stores leaves (original array)
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i]
    }

    // First half [1..n-1] stores sums of child nodes (internal nodes)
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1]
    }
  }

  update(index, value) {
    let position = index + this.n
    this.tree[position] = value

    while (position > 1) {
      position = Math.floor(position / 2)
      this.tree[position] = this.tree[2 * position] + this.tree[2 * position + 1]
    }
  }

  query(left, right) {
    let res = 0

    left += this.n
    right += this.n

    while (left <= right) {
      if (left % 2 === 1) {
        res += this.tree[left]
        left += 1
      }

      if (right % 2 === 0) {
        res += this.tree[right]
        right -= 1
      }

      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }

    return res
  }

  get snapshot() {
    return [...this.tree]
  }
}

const arr = [1, 3, 5, 7]

const st = new SegmentTree(arr) 
console.log(st.snapshot) // [0, 16, 4, 12, 1, 3, 5, 7]

//         [16]       <- tree[1]
//        /    \
//    [4]        [12]   <- tree[2], tree[3]
//    / \        /  \
//  [1] [3]   [5]   [7] <- tree[4..7] (original elements)


const q = st.query(1, 2)
console.log(q) // 8


st.update(2, 10)
console.log(st.snapshot)

//          [21]       <- tree[1] (sum of all)
//         /    \
//      [4]       [17]  <- tree[2], tree[3]
//     /  \       /   \
//  [1]   [3]  [10]  [7] <- tree[4..7] (leaves)
