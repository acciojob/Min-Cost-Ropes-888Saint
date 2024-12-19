function mincost(arr) { 
  // If the array has only one rope, no cost is needed
  if (arr.length <= 1) {
    return 0;
  }

  // Use a MinHeap (priority queue) to efficiently get the two smallest ropes
  const minHeap = arr.slice().sort((a, b) => a - b);
  let totalCost = 0;

  while (minHeap.length > 1) {
    // Extract the two smallest ropes
    const first = minHeap.shift();
    const second = minHeap.shift();

    // Calculate the cost to connect them
    const cost = first + second;
    totalCost += cost;

    // Insert the new rope back into the heap
    let index = minHeap.findIndex((x) => x > cost);
    if (index === -1) {
      minHeap.push(cost);
    } else {
      minHeap.splice(index, 0, cost);
    }
  }

  return totalCost;
}

module.exports = mincost;
