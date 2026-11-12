// Where the Scripture memory worlds live.
// When they move to their own repository, change this one line, e.g.
// var LTM_BASE = 'https://gebsierra.github.io/ltm/';
var LTM_BASE = 'https://gebsierra.github.io/inbox/';

(function () {
  var frame = document.getElementById('world');
  var full = document.getElementById('full');
  var url = LTM_BASE + frame.getAttribute('data-world') + '/';
  frame.src = url;
  full.href = url;
})();
