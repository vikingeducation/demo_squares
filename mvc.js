'use strict;'

var model = {
    //not to be used directly
    totalSquaresEver: 0,
    currentCount: 0,

    addSquare: function(){
        this.currentCount++;
        this.totalSquaresEver++;
    },

    removeSquare: function(){
        this.currentCount--;
    },

    getCurrentCount: function(){
        return this.currentCount;
    },

    getTotalEver: function(){
        return this.totalSquaresEver;
    }

};

var controller = {
    init: function(){
        view.init();
    },

    removeSquare: function(){
        model.removeSquare();
        view.render();
    },

    addSquare: function(){
        model.addSquare();
        view.addSquare();
        view.render();
    },

    getTotalCount: function(){
        return model.getTotalEver();
    },

    getCurrentCount: function(){
        return model.getCurrentCount();
    }
};

var view = {
    init: function(){
        // set delegated listener on all .blue-squares
        $('#squares-ville').on('click', '.square', function(event){
            $(event.target).remove();
            controller.removeSquare();
        });


        $('#make-square').on('click', function(){
            controller.addSquare();
        })

        this.render();
    },

    render: function(){

        var totalCount = controller.getTotalCount();
        $('#total-count').text(totalCount);

        var currentCount = controller.getCurrentCount();
        console.log(currentCount);
        $('#current-count').text(currentCount);

    },

    addSquare: function(){
        square = $('<div class = "square"></div>');
        $(square).css({backgroundColor: '#'+ Math.floor(Math.random()*16777215).toString(16) })
        $('#squares-ville').append(square);
    }
};


//ACTUALLY RUN THIS MONSTROSITY

$(document).ready(function(){
    controller.init();
});


