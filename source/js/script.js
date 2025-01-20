var swiper = new Swiper(".treatments-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".treatments-slider .swiper-button-next",
    prevEl: ".treatments-slider .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    601: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

var swiper1 = new Swiper(".before-after-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 30,
  watchSlidesProgress: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".before-after-slider .swiper-button-next",
    prevEl: ".before-after-slider .swiper-button-prev",
  },
});

var swiper2 = new Swiper(".specialists-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 24,
  watchSlidesProgress: true,
  allowTouchMove: false,
  freeMode: true,
});


var swiper3 = new Swiper(".about-treatments-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1.5,
  spaceBetween: 24,
  watchSlidesProgress: true,
  freeMode: true,
});


document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');

      trigger.addEventListener('click', function() {
        const parent = this.parentNode;

        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var weightRange = document.getElementById('weight-range');
  var weightLoss = document.getElementById('weight-loss');
  var currentWeight = document.getElementById('current-weight');

  function updateWeightValues() {
    var weightLossValue = weightRange.value;
    weightLoss.textContent = weightLossValue;

    // Assuming the initial weight is 252 lbs
    var initialWeight = 252;
    var newWeight = initialWeight + parseInt(weightLossValue, 10);
    currentWeight.textContent = newWeight;

    // Update the background size based on the value
    var percentage = (weightLossValue / weightRange.max) * 100;
    weightRange.style.background = `linear-gradient(to right, #A970AF ${percentage}%, #E7DBE8 ${percentage}%)`;
  }

  // Initial update on page load
  updateWeightValues();

  // Update values when the slider is moved
  weightRange.addEventListener('input', updateWeightValues);
});

(function($) {
  var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
  $dragMe.draggable({
    containment: "parent",
    drag: function() {
      $viewAfter.css({
        width : parseFloat($(this).css('left')) + 5
      });
    }
  });
  $container.on("click", function(event) {
    var eventLeft = event.pageX - $container.offset().left - 15;
    animateTo(eventLeft);
  });
  animateTo("40%");
  function animateTo(_left) {
    $dragMe.animate({
      left: _left
    }, 'slow', 'linear');
    $viewAfter.animate({
      width: _left
    }, 'slow', 'linear');
  }
})(jQuery);


document.addEventListener('DOMContentLoaded', function () {
  const btnMenuMobile = document.querySelector('.btn-popup-menu');
  const headerMobileWrapper = document.querySelector('.header-nav');

  btnMenuMobile.addEventListener('click', function () {
    headerMobileWrapper.classList.toggle('show');

    if (headerMobileWrapper.classList.contains('show')) {
      btnMenuMobile.classList.add('cross');
    } else {
      btnMenuMobile.classList.remove('cross');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const locationsBtn = document.querySelector('.btn-locations');
  const locationsCards = document.querySelector('.locations-list');

  locationsBtn.addEventListener('click', function () {
    locationsCards.classList.toggle('hidden');
    locationsBtn.classList.toggle('rotate');
  });
});