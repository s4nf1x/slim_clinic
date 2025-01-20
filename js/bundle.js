/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

var swiper = new Swiper(".treatments-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".treatments-slider .swiper-button-next",
    prevEl: ".treatments-slider .swiper-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    601: {
      spaceBetween: 24,
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
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
    prevEl: ".before-after-slider .swiper-button-prev"
  }
});
var swiper2 = new Swiper(".specialists-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 24,
  watchSlidesProgress: true,
  allowTouchMove: false,
  freeMode: true
});
var swiper3 = new Swiper(".about-treatments-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1.5,
  spaceBetween: 24,
  watchSlidesProgress: true,
  freeMode: true
});
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');
      trigger.addEventListener('click', function () {
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
document.addEventListener('DOMContentLoaded', function () {
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
    var percentage = weightLossValue / weightRange.max * 100;
    weightRange.style.background = `linear-gradient(to right, #A970AF ${percentage}%, #E7DBE8 ${percentage}%)`;
  }

  // Initial update on page load
  updateWeightValues();

  // Update values when the slider is moved
  weightRange.addEventListener('input', updateWeightValues);
});
(function ($) {
  var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
  $dragMe.draggable({
    containment: "parent",
    drag: function () {
      $viewAfter.css({
        width: parseFloat($(this).css('left')) + 5
      });
    }
  });
  $container.on("click", function (event) {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDOzs7Ozs7VUN6S0Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi50cmVhdG1lbnRzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgNjAxOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIuYmVmb3JlLWFmdGVyLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuYmVmb3JlLWFmdGVyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5iZWZvcmUtYWZ0ZXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbn0pO1xuXG52YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuc3BlY2lhbGlzdHMtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBmcmVlTW9kZTogdHJ1ZSxcbn0pO1xuXG5cbnZhciBzd2lwZXIzID0gbmV3IFN3aXBlcihcIi5hYm91dC10cmVhdG1lbnRzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgZnJlZU1vZGU6IHRydWUsXG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJyk7XG5cbiAgaWYgKGFjY29yZGlvbkl0ZW1zKSB7XG4gICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jyk7XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgd2VpZ2h0UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0LXJhbmdlJyk7XG4gIHZhciB3ZWlnaHRMb3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodC1sb3NzJyk7XG4gIHZhciBjdXJyZW50V2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VpZ2h0Jyk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlV2VpZ2h0VmFsdWVzKCkge1xuICAgIHZhciB3ZWlnaHRMb3NzVmFsdWUgPSB3ZWlnaHRSYW5nZS52YWx1ZTtcbiAgICB3ZWlnaHRMb3NzLnRleHRDb250ZW50ID0gd2VpZ2h0TG9zc1ZhbHVlO1xuXG4gICAgLy8gQXNzdW1pbmcgdGhlIGluaXRpYWwgd2VpZ2h0IGlzIDI1MiBsYnNcbiAgICB2YXIgaW5pdGlhbFdlaWdodCA9IDI1MjtcbiAgICB2YXIgbmV3V2VpZ2h0ID0gaW5pdGlhbFdlaWdodCArIHBhcnNlSW50KHdlaWdodExvc3NWYWx1ZSwgMTApO1xuICAgIGN1cnJlbnRXZWlnaHQudGV4dENvbnRlbnQgPSBuZXdXZWlnaHQ7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGJhY2tncm91bmQgc2l6ZSBiYXNlZCBvbiB0aGUgdmFsdWVcbiAgICB2YXIgcGVyY2VudGFnZSA9ICh3ZWlnaHRMb3NzVmFsdWUgLyB3ZWlnaHRSYW5nZS5tYXgpICogMTAwO1xuICAgIHdlaWdodFJhbmdlLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQTk3MEFGICR7cGVyY2VudGFnZX0lLCAjRTdEQkU4ICR7cGVyY2VudGFnZX0lKWA7XG4gIH1cblxuICAvLyBJbml0aWFsIHVwZGF0ZSBvbiBwYWdlIGxvYWRcbiAgdXBkYXRlV2VpZ2h0VmFsdWVzKCk7XG5cbiAgLy8gVXBkYXRlIHZhbHVlcyB3aGVuIHRoZSBzbGlkZXIgaXMgbW92ZWRcbiAgd2VpZ2h0UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVXZWlnaHRWYWx1ZXMpO1xufSk7XG5cbihmdW5jdGlvbigkKSB7XG4gIHZhciAkZHJhZ01lID0gJChcIi5kcmFnbWVcIiksXG4gICAgJGNvbnRhaW5lciA9ICQoXCIuc2wtY29udGFpbmVyXCIpLFxuICAgICR2aWV3QWZ0ZXIgPSAkKFwiLnZpZXctYWZ0ZXJcIik7XG4gICRkcmFnTWUuZHJhZ2dhYmxlKHtcbiAgICBjb250YWlubWVudDogXCJwYXJlbnRcIixcbiAgICBkcmFnOiBmdW5jdGlvbigpIHtcbiAgICAgICR2aWV3QWZ0ZXIuY3NzKHtcbiAgICAgICAgd2lkdGggOiBwYXJzZUZsb2F0KCQodGhpcykuY3NzKCdsZWZ0JykpICsgNVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgJGNvbnRhaW5lci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGV2ZW50TGVmdCA9IGV2ZW50LnBhZ2VYIC0gJGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0IC0gMTU7XG4gICAgYW5pbWF0ZVRvKGV2ZW50TGVmdCk7XG4gIH0pO1xuICBhbmltYXRlVG8oXCI0MCVcIik7XG4gIGZ1bmN0aW9uIGFuaW1hdGVUbyhfbGVmdCkge1xuICAgICRkcmFnTWUuYW5pbWF0ZSh7XG4gICAgICBsZWZ0OiBfbGVmdFxuICAgIH0sICdzbG93JywgJ2xpbmVhcicpO1xuICAgICR2aWV3QWZ0ZXIuYW5pbWF0ZSh7XG4gICAgICB3aWR0aDogX2xlZnRcbiAgICB9LCAnc2xvdycsICdsaW5lYXInKTtcbiAgfVxufSkoalF1ZXJ5KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5NZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC1tZW51Jyk7XG4gIGNvbnN0IGhlYWRlck1vYmlsZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW5hdicpO1xuXG4gIGJ0bk1lbnVNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaGVhZGVyTW9iaWxlV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG5cbiAgICBpZiAoaGVhZGVyTW9iaWxlV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgYnRuTWVudU1vYmlsZS5jbGFzc0xpc3QuYWRkKCdjcm9zcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG5NZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBsb2NhdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWxvY2F0aW9ucycpO1xuICBjb25zdCBsb2NhdGlvbnNDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbnMtbGlzdCcpO1xuXG4gIGxvY2F0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBsb2NhdGlvbnNDYXJkcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBsb2NhdGlvbnNCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJyk7XG4gIH0pO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbInN3aXBlciIsIlN3aXBlciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJvYnNlcnZlU2xpZGVDaGlsZHJlbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwic3dpcGVyMSIsImFsbG93VG91Y2hNb3ZlIiwic3dpcGVyMiIsImZyZWVNb2RlIiwic3dpcGVyMyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJjaGlsZCIsImFkZCIsInNjcm9sbEhlaWdodCIsIndlaWdodFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3ZWlnaHRMb3NzIiwiY3VycmVudFdlaWdodCIsInVwZGF0ZVdlaWdodFZhbHVlcyIsIndlaWdodExvc3NWYWx1ZSIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJpbml0aWFsV2VpZ2h0IiwibmV3V2VpZ2h0IiwicGFyc2VJbnQiLCJwZXJjZW50YWdlIiwibWF4IiwiYmFja2dyb3VuZCIsIiQiLCIkZHJhZ01lIiwiJGNvbnRhaW5lciIsIiR2aWV3QWZ0ZXIiLCJkcmFnZ2FibGUiLCJjb250YWlubWVudCIsImRyYWciLCJjc3MiLCJ3aWR0aCIsInBhcnNlRmxvYXQiLCJvbiIsImV2ZW50IiwiZXZlbnRMZWZ0IiwicGFnZVgiLCJvZmZzZXQiLCJsZWZ0IiwiYW5pbWF0ZVRvIiwiX2xlZnQiLCJhbmltYXRlIiwialF1ZXJ5IiwiYnRuTWVudU1vYmlsZSIsImhlYWRlck1vYmlsZVdyYXBwZXIiLCJ0b2dnbGUiLCJsb2NhdGlvbnNCdG4iLCJsb2NhdGlvbnNDYXJkcyJdLCJzb3VyY2VSb290IjoiIn0=