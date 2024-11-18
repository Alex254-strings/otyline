// Handle Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const details = document.getElementById('details').value;
  
    // For demonstration purposes, we will just show a confirmation message
    document.getElementById('booking-status').innerText = `Thank you, ${name}! Your booking for ${date} is confirmed.`;
    document.getElementById('booking-form').reset();
  });
  
  // Handle Contact Form Submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
    document.getElementById('contact-form').reset();
  });
  let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const textContents = document.getElementsByClassName("text-content");

  // Hide all slides and text contents
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    textContents[i].style.display = "none";
  }

  // Increment slide index
  slideIndex++;
  
  // Reset to first slide if slideIndex exceeds the number of slides
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  // Display current slide and text content
  slides[slideIndex - 1].style.display = "block";
  textContents[slideIndex - 1].style.display = "block";
  
  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Start the slideshow on page load
showSlides();

    