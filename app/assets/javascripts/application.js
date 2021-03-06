//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .
//= require jquery-fileupload/basic
//= require cloudinary/jquery.cloudinary
//= require attachinary
//= require bootsy



$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    $(function(){
      $(".tab").on("click", function(e){
        // Change active tab
        $(this).addClass('active');
        $(this).siblings('.tab').removeClass('active');
        // Hide all tab-content (use class="hidden")
        $('.tab-content').addClass('hidden');
        // Show target tab-content (use class="hidden")
        var target = $(this).data("target");
        $(target).removeClass("hidden");
      });
    });

    window.setTimeout(function() {
      $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove();
      });
    }, 1200);

    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'medium');
    }

    $("#chevron").click(function() {
      event.preventDefault();
      scrollToAnchor('how');
    });

});
