// smooth scrolling--------------------------------------------------------------------------------
      $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
// smooth scrolling---------------------------------------------------------------------------------------
document.addEventListener('copy', (event) => {
    event.preventDefault();  // Prevent the default copy behavior

    // You can modify the clipboard content or just clear it
    event.clipboardData.setData('text/plain', '');  // Clears the copied content

    alert("Don't copy anything");
});

        // Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Disable image dragging
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
            });
        });

        // Disable Ctrl+S, Ctrl+P, and other save actions
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u' || e.key === 'Shift+I')) {
                e.preventDefault();
            }
        });



// Disable PrintScreen (PrtSc)
document.addEventListener("keyup", function (event) {
    if (event.key === "PrintScreen") {
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "black";
        overlay.style.zIndex = "9999";
        document.body.appendChild(overlay);
        setTimeout(() => document.body.removeChild(overlay), 500);
        alert("Screenshots are disabled on this website.");
    }
});

// Disable Right-Click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Right-click is disabled.");
});

// Disable Developer Tools (F12, Ctrl + Shift + I/J, Ctrl + U)
document.addEventListener("keydown", function (event) {
    if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl + Shift + I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl + Shift + J
        (event.ctrlKey && event.key === "U") // Ctrl + U
    ) {
        event.preventDefault();
        alert("Developer tools are disabled.");
    }
});

// Disable Print (Ctrl + P)
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        alert("Printing is disabled.");
    }
});





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
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notificationMessage");
const viewInvitationButton = document.getElementById("viewInvitationButton");
const dismissButton = document.getElementById("dismissButton");

let notificationTimeout;

function disableScroll() {
    // Prevent scrolling
    window.onscroll = function (e) {
        e.preventDefault();
        window.scrollTo(0, 0); // Optionally, you can set scroll position to the top of the page
    };
    
    // Prevent touch events (for mobile devices)
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    window.onscroll = function () {};
    elementRoot.style.scrollBehavior = "smooth";
    localStorage.setItem("opened", "true"); 
    hideNotification(); // Hide notification
}

function showNotification(message) {
    // Only show notification if the invitation hasn't been opened
    if (!localStorage.getItem("opened")) {
        notificationMessage.textContent = message; // Set message
        notification.classList.add("show"); // Add class for animation

        // Clear existing timeout if any
        clearTimeout(notificationTimeout);
        
        // Show notification and set a timeout to hide it
        notification.style.display = "block";
        notificationTimeout = setTimeout(hideNotification, 3000);
    }
}

function hideNotification() {
    notification.classList.remove("show"); // Remove class for animation
    // Delay the actual hiding to allow the fade-out animation to complete
    setTimeout(() => {
        notification.style.display = "none"; // Hide notification
    }, 500); // Match the duration of the opacity transition
}

// Dismiss button functionality
dismissButton.addEventListener("click", hideNotification);

// Initial check for localStorage
if (!localStorage.getItem("opened")) {
    disableScroll();
}

// Add click event to the button
viewInvitationButton.addEventListener("click", enableScroll);

// Notify users if they click anywhere else or try to scroll
document.addEventListener("click", function(event) {
    if (event.target !== viewInvitationButton) {
        showNotification("Please click the 'View Invitation' "); // Show notification
    }
});

// Show notification on scroll attempt
document.addEventListener("scroll", function() {
    showNotification("Please click the 'View Invitation'"); // Show notification
});

// 
//Disable scroll

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

// video playing script-------------------------------------------------

const video = document.querySelector('.video');

video.addEventListener('mouseenter', () => {
  video.play();
});

video.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0; // Optional: Reset to start when not hovering
});
