function myFunction() {
    // Toggle the responsive navigation menu
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openPopup(popupId) {
    // Display the specified popup
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
    }
}

function closePopup(popupId) {
    // Close the specified popup
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
}
//navigation within the body

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll behavior for anchor links
    const links = document.querySelectorAll('a[href^="SERVICES"]');
    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    }
});

       /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
       function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
      /*accordion on services good*/
      var acc = document.getElementsByClassName("accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
              document.addEventListener("DOMContentLoaded", function () {
          // Get the contact button element by its ID
          const contactButton = document.getElementById("contact-button");
      
          // Add a click event listener to the contact button
          contactButton.addEventListener("click", function () {
              // Display an alert when the button is clicked
              alert("Contact button clicked!");
          });
      });
      
      
                      // JavaScript to toggle accordion content
                      const accordions = document.querySelectorAll('.accordion');
              
                      accordions.forEach(accordion => {
                          const heading = accordion.querySelector('h2');
                          const content = accordion.querySelector('p');
              
                          heading.addEventListener('click', () => {
                              content.classList.toggle('active');
                          });
                      });
