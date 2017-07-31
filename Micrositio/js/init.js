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


    
<!-- DIVISIÓN DE CIENCIAS SOCIALES-->
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  
  $('#modal1 #modal2 #modal3 #modal4 #modal5 #modal6').modal('open');


   $('#modal1 #modal2 #modal3 #modal4 #modal5 #modal6').modal('close');       


<!-- DIVISIÓN DE CIENCIAS FÍSICO-MATEMÁTICAS Y DE LAS INGENIERÍAS-->
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  
  $('#modal7 #modal8 #modal9 #modal10 #modal11 #modal12').modal('open');


    $('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
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
