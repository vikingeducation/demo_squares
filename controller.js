"use strict";

var controller = {
  init: function() {
    // Initialize view with callbacks
    view.init({
      removeSquare: this.removeSquare,
      addSquare: this.addSquare
    });

    // Render initial view
    this.render();
  },

  removeSquare: function() {
    // Remove the square from the model
    model.removeSquare();

    // Render the updated view
    // *NOTE* we call render directly
    // on the controller object here
    // because this function will be called
    // from the view
    // If we use `this` then it will point to the window object or be `undefined` in strict mode
    console.log(this);
    controller.render();
  },

  addSquare: function() {
    // Add square to model
    model.addSquare();

    // Update the view
    view.addSquare();

    // Render the updated view
    // *NOTE* we call render directly
    // on the controller object here
    // because this function will be called
    // from the view
    // If we use `this` then it will point to the window object or be `undefined` in strict mode
    controller.render();
  },

  render: function() {
    // Get stats from model
    var totalCount = model.getTotalEver();
    var currentCount = model.getCurrentCount();

    // Render view with new stats
    view.render(totalCount, currentCount);
  }
};





















