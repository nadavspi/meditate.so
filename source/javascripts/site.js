// KEYBOARD SHORTCUTS/NAVIGATION
$(document).ready(function () {
  $(document).keydown(function(e) {
        var url = false;
        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
          if (e.which == 37) {  // Left arrow key code
              url = $('#nav-entry .newer').attr('href');
          }
          else if (e.which == 39) {  // Right arrow key code
              url = $('#nav-entry .older').attr('href');
          }
          if (url) {
              window.location = url;
          }
        }
    });
});
