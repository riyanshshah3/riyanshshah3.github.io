// main.js

document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta");

  // Animate CTA button on hover
  if (cta) {
    cta.addEventListener("mouseenter", () => {
      cta.style.transform = "scale(1.05)";
      cta.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    cta.addEventListener("mouseleave", () => {
      cta.style.transform = "scale(1)";
      cta.style.boxShadow = "none";
    });
  }

  // Fade-in effect on scroll for sections and cards
  const revealElements = document.querySelectorAll(".card, .intro, .project, .contact");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Scroll to top button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "30px";
  scrollBtn.style.right = "30px";
  scrollBtn.style.padding = "12px 18px";
  scrollBtn.style.fontSize = "18px";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.backgroundColor = "#1b263b";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  scrollBtn.style.display = "none";
  scrollBtn.style.zIndex = "1000";

  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Interactive header background change on scroll
  const header = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.opacity = "0.9";
    } else {
      header.style.opacity = "1";
    }
  });
});
