// //scrollUp

// var btn = $('#scrollUp');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 50) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '50');
// });



//dark_mode

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("icon");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
   
  } else {
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o");
  }
}


// send email


 document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  sendEmail();
});

function sendEmail() {
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send('service_pm71aap', 'template_y673gxj', templateParams)
    .then(resp => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(resp);
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        showConfirmButton: true,
      
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        }
      });
    })
    .catch(err =>  Swal.fire({
      icon: "warning",
      title: "Message Not Sent!",
      text: "Something wrong, Try again.",
      showConfirmButton: true,
    }));
  
}






// <script>
// document.addEventListener("DOMContentLoaded", function () {
//     // Get a reference to the loader
//     const loader = document.getElementById('loader');

//     // Function to hide the loader
//     function hideLoader() {
//         loader.style.display = 'none';
//     }

//     // Hide the loader after 5 seconds (5000 milliseconds)
//     setTimeout(hideLoader, 2000);
// });
// </script>




  






















