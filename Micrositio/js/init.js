(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



<!-- slider-->     
    $(document).ready(function(){
      $('.slider').slider();
    });
        




       $(document).ready(function(){
    $('.collapsible').collapsible();
  });


    // Finds all iframes from youtubes and gives them a unique class
    jQuery('iframe[src*="https://www.youtube.com/embed/1nTqqc3WaHM"]').addClass("youtube-iframe");



    jQuery(".fancybox-close").click(function() {
      // changes the iframe src to prevent playback or stop the video playback in our case
      $('.youtube-iframe').each(function(index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
      });
      
//click function
    });
