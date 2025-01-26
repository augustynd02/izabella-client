const offerItems = document.querySelectorAll('.item');

const contactContainer = document.querySelector('.contact-info-container');
const contactSubsections = document.querySelectorAll('.contact-subsection');

const contactObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSubsections.forEach(node => {
            node.classList.add('appear');
        })
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

contactObserver.observe(contactContainer);

const galleryTextContainers = document.querySelectorAll('.description')

const galleryObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const galleryTexts = entry.target.querySelectorAll('p');
        galleryTexts.forEach(text => text.classList.add('appear'));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  galleryTextContainers.forEach(container => galleryObserver.observe(container));


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

const allItems = [...offerItems, ...contactSubsections];
allItems.forEach(element => observer.observe(element));
