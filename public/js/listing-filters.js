(() => {
  const filterScroll = document.querySelector('.filter-scroll');
  const filterArrowLeft = document.querySelector('.filter-arrow-left');
  const filterArrowRight = document.querySelector('.filter-arrow-right');

  // Carousel arrows (active filter is now rendered by the server)
  if (filterScroll && filterArrowLeft && filterArrowRight) {
    const updateFilterArrows = () => {
      const maxScrollLeft = filterScroll.scrollWidth - filterScroll.clientWidth;
      filterArrowLeft.classList.toggle('is-hidden', filterScroll.scrollLeft <= 0);
      filterArrowRight.classList.toggle('is-hidden', filterScroll.scrollLeft >= maxScrollLeft - 1);
    };

    const scrollFilters = (direction) => {
      filterScroll.scrollBy({
        left: direction * (filterScroll.clientWidth * 0.75),
        behavior: 'smooth',
      });
    };

    filterArrowLeft.addEventListener('click', () => scrollFilters(-1));
    filterArrowRight.addEventListener('click', () => scrollFilters(1));
    filterScroll.addEventListener('scroll', updateFilterArrows);
    window.addEventListener('resize', updateFilterArrows);

    updateFilterArrows();
  }

  // GST toggle: show prices with or without 16% tax
  const taxSwitch = document.getElementById('taxSwitch');
  if (taxSwitch) {
    taxSwitch.addEventListener('change', () => {
      document.querySelectorAll('.listing-price').forEach((el) => {
        const base = Number(el.dataset.basePrice);
        if (taxSwitch.checked) {
          const withTax = Math.round(base * 1.16);
          el.textContent = `Rs ${withTax.toLocaleString('en-PK')}/night (incl. GST)`;
        } else {
          el.textContent = `Rs ${base.toLocaleString('en-PK')}/night`;
        }
      });
    });
  }
})();
