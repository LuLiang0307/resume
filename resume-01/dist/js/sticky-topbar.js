'use strict';

!function () {
  var view = document.querySelector('#topNavBar');

  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.bindEvents();
      // this.bindEvnets.call(this)
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var view = this.view;
      window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
          _this.active();
        } else {
          _this.deactive();
        }
      });
      // 箭头函数没有 this
    },
    active: function active() {
      this.view.classList.add('sticky');
    },
    deactive: function deactive() {
      this.view.classList.remove('sticky');
    }

  };
  controller.init(view);
  // controller.init.call(controller, view)
}.call();