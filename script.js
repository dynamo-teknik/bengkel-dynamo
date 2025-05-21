document.getElementById("testimonialForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
  
    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial");
    testimonial.innerHTML = `<strong>${name}</strong> – ${"⭐".repeat(rating)}<p>${comment}</p>`;
  
    document.getElementById("testimonialList").appendChild(testimonial);
  
    // Reset form setelah submit
    this.reset();
  });  