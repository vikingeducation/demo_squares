"use strict";

var view = {
  init: function(callbacks) {
    // Set event listener callbacks
    var removeSquare = callbacks.removeSquare;
    var addSquare = callbacks.addSquare;

    // Set click listener on all squares
    $('#squares-ville').on('click', '.square', function(event){
      $(event.target).remove();
      removeSquare();
    });

    // Set click listener on make square button
    $('#make-square').on('click', function(){
      addSquare();
    });
  },

  render: function(totalCount, currentCount) {
    // Set the text for total and current count
    $('#total-count').text(totalCount);
    $('#current-count').text(currentCount);
    console.log(currentCount);
  },

  addSquare: function() {
    // Create square element
    var $square = $('<div>')
      .addClass('square');

    // Set random square color
    $square.css({
      backgroundColor: '#' + Math.floor(
        Math.random() * 16777215
      ).toString(16)
    });

    // Insert square into DOM
    $('#squares-ville').append($square);
  }
};






