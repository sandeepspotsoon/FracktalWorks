 jQuery(document).ready(function () {
     //     var getbaseurl = $("#getbaseurl").val();
     var getbaseurl = "http://localhost/Fracktal/";
     var getlocation = window.location.href;
     if (getlocation == getbaseurl || getlocation == getbaseurl + "index.php") {
         //$("body").removeClass("aboutus");
     }
     if (getlocation == getbaseurl + "index.html?signin") {
         setTimeout(function () {
             $('.signinandregister_js[data-option*="signin"]').click();
         }, 300);

     }
     $(".getformid_js").click(function () {
         
         $(".getformid_js").removeClass("nopointerevents");
         $(this).addClass("nopointerevents");
         let getformid = $(this).attr("data-formid");
         $(".hideform_js").slideUp(500);
         $(getformid).slideDown(500);
     });
     
     
     $(".signinandregister_js").click(function(){
         $('.signupandloginwrapper .form-control').val('');
         $(".signinandregister_js").removeClass("redcolor");
         $(this).addClass("redcolor");
         let getformtype = $(this).attr("data-option");
         if(getformtype == "signin"){
             $(".hideforsignin_js").slideUp(500);
             $(".signupandloginwrapper .btn-submit").text("Sign In");
         }
         else{
             $(".hideforsignin_js").slideDown(500);
             $(".signupandloginwrapper .btn-submit").text("Sign Up");
         }
     });
     $('a[href^="#"]').click(function (e) {
         e.preventDefault();
         var target = this.hash;
         var $target = jQuery(target);
         jQuery('html, body').stop().animate({
             'scrollTop': $target.offset().top - 0
         }, 500, 'swing', function () {});
     });
     $('.animate-slide').animatedHeadline({
         animationType: 'slide'
     });

     var getdevicewidth = $(window).width()
     if(getdevicewidth < 768){
         $('.mobilemenu_js').click(function(){
             $(".logoandmenudiv").slideToggle(400, function () {
                 $(".logoandmenudiv").toggleClass("active");
                 $(".mobilemenu_js").children().toggleClass("fa-close fa-bars");

             });
         });
     }

 });
