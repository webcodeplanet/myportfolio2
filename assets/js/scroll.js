document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  const headerHeight = 0; // <--- ЗАДАЙТЕ ЗДЕСЬ ВЫСОТУ HEADER В ПИКСЕЛЯХ

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetY = targetElement.offsetTop - headerHeight;
        const start = window.pageYOffset;
        let startTime = null;

        function animateScroll(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / 500, 1);
          window.scrollTo(0, start + (targetY - start) * progress);
          if (progress < 1) requestAnimationFrame(animateScroll);
        }

        requestAnimationFrame(animateScroll);
      }
    });
  });
});



// document.addEventListener('DOMContentLoaded', function() {
//   const header = document.querySelector('header');
//   const links = document.querySelectorAll('a[href^="#"]');

//   links.forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         const headerHeight = header.offsetHeight;
//         const yOffset = headerHeight;
//         const targetY = targetElement.offsetTop - yOffset;
//         const start = window.pageYOffset;
//         let startTime = null;

//         function animateScroll(timestamp) {
//           if (!startTime) startTime = timestamp;
//           const progress = Math.min((timestamp - startTime) / 1000, 1); // 500ms - длительность анимации
//           window.scrollTo(0, start + (targetY - start) * progress);
//           if (progress < 1) requestAnimationFrame(animateScroll);
//         }

//         requestAnimationFrame(animateScroll);
//       }
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   const header = document.querySelector('header');
//   const links = document.querySelectorAll('a[href^="#"]'); // все ссылки с href, начинающиеся с #

//   links.forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault(); // предотвратить стандартное поведение ссылки

//       const targetId = this.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         const headerHeight = header.offsetHeight;
//         const yOffset = headerHeight; // корректируем на высоту header
//         window.scrollTo({
//           top: targetElement.offsetTop - yOffset,
//           behavior: 'smooth' // плавная прокрутка
//         });
//       }
//     });
//   });
// });