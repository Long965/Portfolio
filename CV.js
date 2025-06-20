//Highlight menu khi scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar a");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//Hiệu ứng tuyết rơi random nền của hero
const container = document.getElementById('hero-effects');
if (container) {
  const bordersArray = ['50%', '0px'];
  const blursArray = ['0px', '5px'];
  const colorsArray = ['#FF6600', '#FFE660', '#4472CA'];
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const count = 40;

  function createElementRandom() {
    for (let i = 0; i < count; i++) {
      const randomLeft = Math.floor(Math.random() * width);
      const randomTop = Math.floor(Math.random() * height);
      const color = Math.floor(Math.random() * colorsArray.length);
      const border = Math.floor(Math.random() * bordersArray.length);
      const blur = Math.floor(Math.random() * blursArray.length);
      const widthElement = Math.floor(Math.random() * 10) + 10;
      const timeAnimation = Math.floor(Math.random() * 8) + 5;

      const div = document.createElement("div");
      div.style.backgroundColor = colorsArray[color];
      div.style.position = 'absolute';
      div.style.width = widthElement + 'px';
      div.style.height = widthElement + 'px';
      div.style.left = randomLeft + 'px';
      div.style.top = randomTop + 'px';
      div.style.borderRadius = bordersArray[border];
      div.style.filter = `blur(${blursArray[blur]})`;
      div.style.animation = `hero-snow-move ${timeAnimation}s ease-in infinite`;

      container.appendChild(div);
    }
  }

  createElementRandom();
}

//Reveal hiệu ứng cho các phần tử có class .reveal + animate kỹ năng
let skillsAnimated = false;

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
      el.classList.add('active');

      // Nếu là khu vực kỹ năng thì animate
      if (el.id === "skills" && !skillsAnimated) {
        animateSkills();
      }
    } else {
      el.classList.remove('active');
    }
  });
}

//Animate kỹ năng
function animateSkills() {
  const skillItems = document.querySelectorAll("#skills .skill");
  skillsAnimated = true;

  skillItems.forEach((item, index) => {
    const progress = item.querySelector(".progress");
    const targetWidth = progress.getAttribute("data-width");
    progress.style.width = "0%";
    setTimeout(() => {
      progress.classList.add("active");
      progress.style.width = targetWidth;
    }, index * 300); // Delay theo từng dòng kỹ năng
  });
}

// Gọi hiệu ứng khi load và scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Modal ảnh phóng to
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".modal-close");



// Gán sự kiện click cho từng ảnh dự án
document.querySelectorAll(".project img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    
  });
});

// Đóng modal khi click nút X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Đóng modal khi click bên ngoài ảnh
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Thêm delay động cho từng project
function applyRevealDelay(selector, baseDelay = 0.4, step = 0.3) {
  const items = document.querySelectorAll(selector);
  items.forEach((item, index) => {
    item.style.transitionDelay = `${baseDelay + index * step}s`;
  });
}

applyRevealDelay('#projects .project');
applyRevealDelay('#certificates .cert-item');

const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });


  