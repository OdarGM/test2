//NAVBAR SETTINGS

$(document).ready(function(){
    $("body").scrollspy({ target: ".navbar", offset: 50 });
  $("#frogoNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      //jQuery animation
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

//BACK TO TOP BUTTON

window.onscroll = function() {scrolFunc()};
function scrolFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
