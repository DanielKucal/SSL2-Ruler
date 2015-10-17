var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

var rulerContainer = document.querySelector('#adslot');
rulerContainer.setAttribute('id', 'rulerContainer');
var rulerList = document.createElement('ul');
rulerList.setAttribute('class', 'ruler');
rulerList.setAttribute('data-items', '21');

var ruler = document.createElement('div')
    .appendChild(rulerList);


rulerContainer.innerHTML = '';
rulerContainer.appendChild(ruler);

var rulers = document.querySelectorAll('.ruler');

forEach(rulers, function (id, ruler) {

  for (var i = 1; i <= ruler.getAttribute('data-items'); i++ ) {
    var li = document.createElement('li');
    li.innerHTML = i;
    ruler.appendChild(li);
  }

});


rulerContainer.addEventListener("mouseenter", function() {
  this.style.zIndex = -1;
});

rulerContainer.addEventListener("mouseleave", function() {
  var that = this;
  setTimeout(function() {
    that.style.zIndex = 1;
  }, 1000, this);
});