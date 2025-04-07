/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
  const parent = Array(n).fill(0).map((_, i) => i);
  const rank = Array(n).fill(0);
  const bitwise = Array(n).fill(-1);

  const find = (i) => {
    if (parent[i] === i) {
      return i;
    }
    return parent[i] = find(parent[i]);
  };

  const union = (i, j, weight) => {
    const rootI = find(i);
    const rootJ = find(j);
    if (rootI === rootJ) {
      bitwise[rootI] &= weight;
      return false;
    }

    let bitwiseVal;
    const checkI = bitwise[rootI] === -1;
    const checkJ = bitwise[rootJ] === -1;

    if (checkI && checkJ) {
      bitwiseVal = weight;
    } else if (checkI) {
      bitwiseVal = weight & bitwise[rootJ];
    } else if (checkJ) {
      bitwiseVal = weight & bitwise[rootI];
    } else {
      bitwiseVal = weight & bitwise[rootI] & bitwise[rootJ];
    }

    if (rank[rootI] < rank[rootJ]) {
      parent[rootI] = rootJ;
      bitwise[rootJ] = bitwiseVal;
    } else if (rank[rootI] > rank[rootJ]) {
      parent[rootJ] = rootI;
      bitwise[rootI] = bitwiseVal;
    } else {
      parent[rootJ] = rootI;
      bitwise[rootI] = bitwiseVal;
      rank[rootI]++;
    }
    return true;
  };

  for (const [u, v, weight] of edges) {
    union(u, v, weight);
  }

  const result = [];
  for (const [start, end] of query) {
    const rootStart = find(start);
    const rootEnd = find(end);
    result.push(start === end ? 0 : (rootStart === rootEnd ? bitwise[rootStart] : -1));
  }

  return result;
}