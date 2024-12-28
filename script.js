/* =========================
   1) STICKY HEADER ON SCROLL
   ========================= */
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  // If scrolled, add .sticky
  header.classList.toggle("sticky", window.scrollY > 0);
});

/* =========================
   2) MOBILE TOGGLE NAV
   ========================= */
const navigation = document.querySelector('nav');
const toggleButton = document.querySelector('.toggle');
toggleButton.onclick = function() {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
};

/* =========================
   3) SCROLL INDICATOR
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const indicator = document.querySelector('.scrollIndicator');
  const textValue = document.getElementById('textValue');

  function updateIndicator() {
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = window.scrollY / maxHeight;
    const angle = scrollRatio * 360;
    const percent = Math.round(scrollRatio * 100);
    textValue.innerHTML = percent + '<span>%</span>';
  }

  window.addEventListener('scroll', updateIndicator);
  updateIndicator(); // run once at load
});

/* =========================
   4) TOGGLE "LISAINFО" in PRICING
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-info");
  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const extraInfo = button.nextElementSibling;
      // Close all other open .extra-info
      document.querySelectorAll(".extra-info.open").forEach(info => {
        if (info !== extraInfo) {
          info.classList.remove("open");
          info.style.maxHeight = "0";
          info.previousElementSibling.classList.remove("active");
        }
      });
      // Toggle this one
      if (extraInfo.classList.contains("open")) {
        extraInfo.classList.remove("open");
        extraInfo.style.maxHeight = "0";
        button.classList.remove("active");
      } else {
        extraInfo.classList.add("open");
        extraInfo.style.maxHeight = `${extraInfo.scrollHeight}px`;
        button.classList.add("active");
      }
    });
  });
});

/* =========================
   5) PORTFOLIO FILTER + LIGHTBOX
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Filtering
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterCategory = button.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        if (filterCategory === 'all' || item.getAttribute('data-category') === filterCategory) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Optional Lightbox
  const portfolioImages = document.querySelectorAll(".portfolio-item img");
  portfolioImages.forEach(image => {
    image.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      Object.assign(lightbox.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: "99999"
      });
      document.body.appendChild(lightbox);

      const img = document.createElement("img");
      img.src = image.src;
      img.style.maxWidth = "80%";
      img.style.maxHeight = "80%";
      lightbox.appendChild(img);

      lightbox.addEventListener("click", () => {
        lightbox.remove();
      });
    });
  });
});

/* =========================
   6) COLOR SELECTOR (BODY BG)
   ========================= */
function changeColor(el, color) {
  document.body.style.backgroundColor = color;
  document.querySelectorAll('.colors span').forEach(item => {
    item.classList.remove('active');
  });
  el.classList.add('active');
}
function changeColor2(el, color2) {
  document.body.style.color = color2;
  document.querySelectorAll('.colors2 span').forEach(item => {
    item.classList.remove('active');
  });
  el.classList.add('active');
}