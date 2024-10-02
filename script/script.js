// smooth scrolling--------------------------------------------------------------------------------
      $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
// smooth scrolling---------------------------------------------------------------------------------------


//Loader start-------------------------------------------------------------------------------------------------------------
      document.addEventListener("DOMContentLoaded", function () {
        const petalContainer = document.getElementById("petals-container");
        
        function createPetal() {
          const petal = document.createElement("div");
          petal.classList.add("petal");
          
          const rotateDiv = document.createElement("div");
          rotateDiv.classList.add("rotate");
          
          const askewDiv = document.createElement("div");
          askewDiv.classList.add("askew");
          
          rotateDiv.appendChild(askewDiv);
          petal.appendChild(rotateDiv);
          
          // Randomize petal properties
          petal.style.left = `${Math.random() * 100}vw`;
          petal.style.animationDuration = `${Math.random() * 2 + 5}s`;
          petal.style.color = `rgba(255, ${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, 0.8)`;
          
          petalContainer.appendChild(petal);
          
          // Remove petal after falling
          setTimeout(() => {
            petal.remove();
          }, 7000); // Match fall animation
        }
        
        // Generate petals continuously
        setInterval(createPetal, 300);
        
        // Fade out loader after 5 seconds
        setTimeout(() => {
          document.getElementById("wedding-loader").classList.add("fade-out");
          setTimeout(() => {
            document.getElementById("wedding-loader").style.display = "none";
          }, 1000); // Fade-out duration
        }, 5000);
      });

//Loader End ---------------------------------------------------------------------------------------------------------------------


//Navbar Start----------------------------------------------------------------------------------------------
    window.onscroll = function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('nav-scrolled');
      } else {
          navbar.classList.remove('nav-scrolled');
      }
  };
//Navbar Start-----------------------------------------------------------------------------------------------
  
// simplyCountdown-----------------------------------------------------------------------------------
      simplyCountdown(".simply-countdown", {
        year: 2025, // required
        month: 5, // required
        day: 28, // required
        hours: 8, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: {
          days: { singular: "Day", plural: "Days" },
          hours: { singular: "Hour", plural: "Hours" },
          minutes: { singular: "Minute", plural: "Minutes" },
          seconds: { singular: "Second", plural: "Seconds" },
        },
        onEnd: function () {
          alert("The marriage has ended!");
          document.querySelector(".simply-countdown").classList.add("celebrate");
          return;
        },
        refresh: 1000, // default refresh every 1s
        onUpdate: function() {
          // Add animation effect on every countdown tick
          document.querySelectorAll(".simply-countdown span").forEach((el) => {
            el.classList.add("change");
            setTimeout(() => el.classList.remove("change"), 500);
          });
        },
      });
//simplyCountdown end ---------------------------------------------------------------------------------------

//Disable scroll----------------------------------------------------------------------------------------------
      const elementRoot = document.querySelector(":root");

          function disableScroll() {
            let scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            let scrollLeft =
              window.pageXOffset || document.documentElement.scrollLeft;

            window.onscroll = function () {
              window.scrollTo(scrollTop, scrollLeft);
            };

            elementRoot.style.scrollBehavior = "auto";
          }

      function enableScroll() {
        window.onscroll = function () {};
        elementRoot.style.scrollBehavior = "smooth";
        localStorage.setItem("opened", "true");
      }

      if (!localStorage.getItem("opened")) {
        disableScroll();
      }
//Disable scroll End-----------------------------------------------------------------------------------------------

//Attendance Form---------------------------------------------------------------------------------------------------
      window.addEventListener("load", function () {
        const form = document.getElementById("my-form");
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          const data = new FormData(form);
          const action = e.target.action;
          fetch(action, {
            method: "POST",
            body: data,
          }).then(() => {
            alert("Attendance Confirmation Successfully Sent!");
          });
        });
      });

      document.getElementById("my-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("Name").value;
        let attendees = document.getElementById("Members").value;
        let status = document.getElementById("status").value;
      
        if (!name || !attendees || status === "Select one") {
          document.getElementById("form-message").innerHTML = "<span class='text-danger'>Please fill in all the fields correctly.</span>";
          return;
        }
      
        // Simulate success message after submission
        document.getElementById("form-message").innerHTML = "<span class='text-success'>Thank you for your response!</span>";
        document.getElementById("my-form").reset();
      });
      document.getElementById("my-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let submitButton = event.target.querySelector("button[type=submit]");
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Submitting...';
      
        setTimeout(() => {
          // Reset button and show success message
          submitButton.disabled = false;
          submitButton.innerHTML = '<i class="bi bi-send"></i> Submit';
          document.getElementById("form-message").innerHTML = "<span class='text-success'>RSVP Submitted Successfully!</span>";
        }, 1500);
      });
         
//Attendance Form End--------------------------------------------------------------------------------------------------------------------------   
      

/* ===== SCROLL REVEAL ANIMATION ===== */

ScrollReveal().reveal("p", {
  duration: 1500,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
ScrollReveal().reveal(".navbar-brand", {
  duration: 2000,
  origin: "top",
  distance: "300px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});
ScrollReveal().reveal("h2", {
  duration: 2500,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});
ScrollReveal().reveal(".timeline-panel", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});
ScrollReveal().reveal(".gallery img", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});