/*
  namespace, namespaced construcor, namespace instance at bottom
*/

var TakeMe = TakeMe || {}

function MovieControl () {}

TakeMe.MovieControl = function () {

  this.initialize = function() {

    alert( "I'd like to go to the movies now, please." )

  }
}


var controller = new TakeMe.MovieControl ()