import initMenuMobile from './modules/menu-mobile.js';
import SlideNav from './modules/slide.js';

initMenuMobile();
const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
