/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
    this.size = Array(n).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(a, b) {
    const [rootA, rootB] = [this.find(a), this.find(b)];
    if (rootA === rootB) {
      return false;
    }
    if (this.size[rootA] > this.size[rootB]) {
      this.parent[rootB] = rootA;
      this.size[rootA] += this.size[rootB];
    } else {
      this.parent[rootA] = rootB;
      this.size[rootB] += this.size[rootA];
    }
    return true;
  }

  getSize(x) {
    return this.size[this.find(x)];
  }
}

var minimumCost = function (n, edges, query) {
  const unionFind = new UnionFind(n);
  const componentCost = Array(n).fill(-1);

  // Build connected components
  for (const [u, v] of edges) {
    unionFind.union(u, v);
  }

  // Calculate the bitwise AND of weights for each connected component
  for (const [u, _, weight] of edges) {
    const root = unionFind.find(u);
    componentCost[root] &= weight;
  }

  const findCost = (u, v) => {
    if (u === v) {
      return 0;
    }
    const [rootU, rootV] = [unionFind.find(u), unionFind.find(v)];
    return rootU === rootV ? componentCost[rootU] : -1;
  };

  return query.map(([u, v]) => findCost(u, v));
}