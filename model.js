"use strict";

var model = {
  // Internal square stats
  // Not to be used directly
  totalSquaresEver: 0,
  currentCount: 0,

  addSquare: function() {
    // Increment the counts
    this.currentCount++;
    this.totalSquaresEver++;
  },

  removeSquare: function() {
    // Decrement only the current count
    this.currentCount--;
  },

  getCurrentCount: function() {
    return this.currentCount;
  },

  getTotalEver: function() {
    return this.totalSquaresEver;
  }
};

























