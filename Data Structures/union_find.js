class UnionFind {
  constructor(elements = []) {
    this.parent = {}
    this.rank = {}

    for (const el of elements) {
      this.parent[el] = el
      this.rank[el] = 0
    }
  }

  find(x) {
    if (x != this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]) // path compression
    }

    return this.parent[x]
  }

  union(x, y) {
    let px = this.find(x)
    let py = this.find(y)

    if (px == py) return false

    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px
    } else {
      this.parent[py] = px
      this.rank[px] += 1
    }

    return true
  }
}

uf = new UnionFind([0, 1, 2, 3, 4, 5])
uf.union(0, 1);
uf.union(1, 2);

console.log(uf.union(0, 2)) // False - cycle detected
console.log(uf.find(1))
