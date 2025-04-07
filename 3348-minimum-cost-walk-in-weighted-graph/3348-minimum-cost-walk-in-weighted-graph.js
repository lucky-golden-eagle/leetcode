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
    this.bitwise = Array(n).fill(-1);
  }

  find(i) {
    if (this.parent[i] === i) {
      return i;
    }
    return this.parent[i] = this.find(this.parent[i]); // Path compression
  }

  union(i, j, weight) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI === rootJ) {
      this.bitwise[rootI] &= weight;
      return false;
    }

    let bitwiseVal;
    const checkI = this.bitwise[rootI] === -1;
    const checkJ = this.bitwise[rootJ] === -1;

    if (checkI && checkJ) {
      bitwiseVal = weight;
    } else if (checkI) {
      bitwiseVal = weight & this.bitwise[rootJ];
    } else if (checkJ) {
      bitwiseVal = weight & this.bitwise[rootI];
    } else {
      bitwiseVal = weight & this.bitwise[rootI] & this.bitwise[rootJ];
    }

    if (this.size[rootI] >= this.size[rootJ]) {
      this.parent[rootJ] = rootI;
      this.size[rootI] += this.size[rootJ];
      this.bitwise[rootI] = bitwiseVal;
    } else {
      this.parent[rootI] = rootJ;
      this.size[rootJ] += this.size[rootI];
      this.bitwise[rootJ] = bitwiseVal;
    }
    return true;
  }

  getBitwise(i) {
    return this.bitwise[this.find(i)];
  }
}

var minimumCost = function(n, edges, query) {
  const uf = new UnionFind(n);
  for (const [u, v, weight] of edges) {
    uf.union(u, v, weight);
  }

  const result = [];
  for (const [start, end] of query) {
    if (start === end) {
      result.push(0);
    } else if (uf.find(start) === uf.find(end)) {
      result.push(uf.getBitwise(start));
    } else {
      result.push(-1);
    }
  }
  return result;
}