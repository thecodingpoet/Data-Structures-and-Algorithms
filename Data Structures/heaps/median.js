import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue'

class Median {
  constructor() {
    this.small = new MaxPriorityQueue() // Max heap for the smaller half
    this.large = new MinPriorityQueue() // Min heap for the larger half
  }

  insert(num) {
    if (this.small.isEmpty() || num <= this.small.front()) {
      this.small.enqueue(num)
    } else {
      this.large.enqueue(num)
    }

    // balance heaps
    if (this.small.size() > this.large.size() + 1) {
      this.large.enqueue(this.small.dequeue())
    }

    if (this.large.size() > this.small.size()) {
      this.small.enqueue(this.large.dequeue())
    }
  }

  getMedian() {
    if (this.small.size() > this.large.size()) {
      return this.small.front()
    }

    return (this.small.front() + this.large.front()) / 2
  }
}

const median = new Median()

median.insert(1) 
console.log(median.getMedian()) // 1

median.insert(2)
console.log(median.getMedian()) // (1+2)/2 = 1.5

median.insert(3)
console.log(median.getMedian()) // 2

median.insert(5)
console.log(median.getMedian()) // (2+3)/2 = 2.5

median.insert(4)
console.log(median.getMedian()) // 3
