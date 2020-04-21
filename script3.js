var slider = new IdealImageSlider.Slider('#slider');

slider.start();

var slider = new IdealImageSlider.Slider({
    selector: '',
    height: 'auto', // "auto" | px value (e.g. 400) | aspect ratio (e.g. "16:9")
    initialHeight: 400, // for "auto" and aspect ratio
    maxHeight: 700, // for "auto" and aspect ratio
    interval: 2500,
    transitionDuration: 700,
    effect: 'slide',
    disableNav: false,
    keyboardNav: true,
    previousNavSelector: '',
    nextNavSelector: '',
    classes: {
      container: 'ideal-image-slider',
      slide: 'iis-slide',
      previousSlide: 'iis-previous-slide',
      currentSlide: 'iis-current-slide',
      nextSlide: 'iis-next-slide',
      previousNav: 'iis-previous-nav',
      nextNav: 'iis-next-nav',
      animating: 'iis-is-animating',
      touchEnabled: 'iis-touch-enabled',
      touching: 'iis-is-touching',
      directionPrevious: 'iis-direction-previous',
      directionNext: 'iis-direction-next'
    }
});

var slider = new IdealImageSlider.Slider({
    onInit: function() {},
    onStart: function() {},
    onStop: function() {},
    onDestroy: function() {},
    beforeChange: function() {},
    afterChange: function() {}
});
