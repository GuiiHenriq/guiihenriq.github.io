/* Menu Mobile */
const btnOpenMenu = document.querySelector('[data-menu="open"]');
const btnCloseMenu = document.querySelector('[data-menu="close"]');
const menu = document.querySelector('[data-menu="menu"]');

function openMenu() {
  menu.classList.add('active');
}

function closeMenu() {
  menu.classList.remove('active');
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);


/* Slide */
$(document).ready(function() {
  const speed = 4000;
  let run = setInterval('rotate()',speed);

  let item_width = $('#slide li').outerWidth();
  let left_value = item_width * (-1);

  $('#slide li:first').before($('#slide li:last'));

  $('#slide ul').css({'left' : left_value});

  $('#prev').click(function(){
    let left_intend = parseInt($('#slide ul').css('left')) + item_width;
    $('#slide ul').animate({'left':left_intend}, 200, function() {
      $('#slide li:first').before($('#slide li:last'));
      $('#slide ul').css({'left' : left_value});
    });
    clearInterval(run);
    run = setInterval('rotate()', speed);
  });

  $('#next').click(function(){
    let left_intend = parseInt($('#slide ul').css('left')) - item_width;
    $('#slide ul').animate({'left':left_intend}, 200, function() {
      $('#slide li:last').after($('#slide li:first'));
      $('#slide ul').css({'left' : left_value});
    });
    clearInterval(run);
    run = setInterval('rotate()', speed);
  });

  $('#slide').hover(
    function(){
      clearInterval(run);
      disableScroll();
    },

    function(){
      clearInterval(run);
      run = setInterval('rotate()',speed);
      enableScroll();
    });
});

function rotate() {
  $('#next').click();
}

const keys = { 37:1, 38:1, 39:1, 40:1 };

function preventDefault(e) {
  e = e || window.event;
  if(e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if(keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  window.onWheel = preventDefault;
  window.ontouchmove = preventDefault;
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  window.onWheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
