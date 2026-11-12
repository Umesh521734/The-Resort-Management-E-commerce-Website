document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for getting in touch! We'll get back to you soon.");
    this.reset(); // Clear form
  });
  

    const elems = document.querySelectorAll(".elem");
    const fixedImage = document.getElementById("fixed-image");

    elems.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            const imageUrl = elem.getAttribute("data-image");
            fixedImage.style.backgroundImage = `url(${imageUrl})`;
            fixedImage.style.display = "block";
        });

        elem.addEventListener("mousemove", (e) => {
            // Optional: Make the image follow your mouse
            fixedImage.style.left = `${e.clientX + 20}px`;
            fixedImage.style.top = `${e.clientY - 100}px`;
        });

        elem.addEventListener("mouseleave", () => {
            fixedImage.style.display = "none";
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        document.addEventListener("mousemove", function(e) {
          const ball = document.getElementById("ball-cursor");
          if (ball) {
            ball.style.left = e.clientX + "px";
            ball.style.top = e.clientY + "px";
          }
        });
      });
