var content = require("./content.js");
var otherContent = require("./otherContent.js");
var indexTemplate = require("text!./templates/index.html");

document.write(content + otherContent);

// Test underscore plugin
console.log(_.first([5, 4, 3, 2, 1]));

// Test Backbone

var IndexView = Backbone.View.extend({
    el: $('#backbone-content'),

    events: {
        'click .btn': 'click'
    },

    render: function(){
        console.log('render');
        var compiledTemplate = _.template(indexTemplate);
        this.$el.html(compiledTemplate);
    },

    click: function() {
        console.log('click');
    }
});


var indexView = new IndexView();

indexView.render();