$(document).ready(function() {

  $('.popup').click(function () {
    $(".modal-box").addClass("modal ");
    $('.modal-wrapper').addClass('active')
    $('.outerDiv').addClass('active')
  });

  $('.outerDiv').on("click", function() {
    $(".modal-box").removeClass("modal ");
    $('.modal-wrapper').removeClass('active')
    $(this).removeClass('active')
  })
  $(".time-close").click(function () {
    console.log(this);
    $(".modal-box").removeClass("modal");
    $('.modal-wrapper').removeClass('active')
  });

  $(".submit").click(function () {
    // console.log($(this))
    setTimeout( function () { 
      // alert("Successfully..! Massage Your Sent...") ;  
     let massage =  confirm("Successfully..! Massage Your Sent...");
     if (massage == true) {
      $(".modal-box").hide();
     }
     else {
      alert("You pressed Cancel ...!");
    }
      console.log(confirm)
      alert("Successfully..! Massage Your Sent...")      
  }, 500);
  });

  $(".cancle").click(function () {
    $(".modal-box").hide();
  });

  $(document).on('click', function(e) {
    console.log("clicked")
    const className = $(e.target).attr('class')
    console.log($(e.target).attr('class'));

  //   if (!(className.includes('popup') || (className.includes('modal-wrapper') || className.includes('modal-wrapper > *')))) {
  //     $(".modal-box").removeClass("modal");
  //     $('.modal-wrapper').removeClass('active')                        
  // }
  })

  // $(".submit").on("submit", function(){
  //   setTimeout( function () { 
  //     $(this).alert("s...............................d")
  // }, 300);
  // })


  // Validate Username

//   $('.usercheck').hide();
//   let usernameError = true;
//   $('.usernames').keyup(function () {
//     validateUsername();
//   });

// function validateUsername() {
//   let usernameValue = $('.usernames').val();
//   if (usernameValue.length == '') {
//     $('.usercheck').show();
//         usernameError = false;
//         return false;
//     }
//     else if((usernameValue.length < 3)||
//               (usernameValue.length > 10)) {
//           $('#usercheck').show();
//           $('#usercheck').html
// ("**length of username must be between 3 and 10");
//           usernameError = false;
//           return false;
//       }
// }
// else {
//   $('#usercheck').hide();
// }

});

