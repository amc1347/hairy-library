// var folded = new OriDomi();

// var $folded = $(document.getElementsByClassName('paper')[0]).oriDomi({/* options object */});
// // when using jQuery, iterate OriDomi methods over multiple elements like this:
// $folded.oriDomi('accordion', 20);
// // to access the OriDomi instance at the top of the jQuery selection directly:
// var folded = $folded.oriDomi(true);
//
// var folded = new OriDomi(document.getElementsByClassName('paper'), {
//   vPanels:          3,     // number of panels when folding left or right (vertically oriented)
//   hPanels:          0,     // number of panels when folding top or bottom
//   speed:            1200,  // folding duration in ms
//   ripple:           2,     // backwards ripple effect when animating
//   shadingIntensity: .5,    // lessen the shading effect
//   perspective:      800,   // smaller values exaggerate 3D distortion
//   maxAngle:         40,    // keep the user's folds within a range of -40 to 40 degrees
//   shading:          'soft' // change the shading type
// });
// folded.accordion(30);
// folded.curl(-50, 'top', function(event, instance) {
//   // arguments are the transition event and the OriDomi instance
//   alert('It seems my folding days are through.');
// });

// new Oridomi(document.getElementsByClassName('paper'));
//
// var oriDomi = new OriDomi('.paper', {
//   vPanels: 3,
//   speed: 2000,
//   touchEndCallback: function() {
//     console.log('touch ended');
//   }
// });
//
// document.getElementById('button').addEventListener('click', function(){
//   oriDomi.collapse(40);
// })


(function(){

function init(){
    var paper = document.getElementsByClassName('menu-image')[0],
        domi2 = new OriDomi(paper, { hPanels: 1, vPanels: 3 }),
        foldMe = document.querySelector('.fold-me > p'),
        foldDomi = new OriDomi(foldMe, { vPanels: 1, hPanels: 4, perspective: 200, speed: 500 });

    foldMe.addEventListener('mouseover', function(){
        foldDomi.accordion(-40, 1);
    }, false);

    foldMe.addEventListener('mouseout', function(){
        foldDomi.reset();
    }, false);


    setTimeout(function(){
        domi2.reveal(40);
    }, 3000);

}

document.addEventListener('DOMContentLoaded', init, false);

})();

//
// (function(){
//
// function init(){
//     var demo = document.getElementsByClassName('menu')[0],
//         domi1 = new OriDomi(demo),
//
//     foldMe.addEventListener('mouseover', function(){
//         foldDomi.accordion(-40, 1);
//     }, false);
//
//     foldMe.addEventListener('mouseout', function(){
//         foldDomi.reset();
//     }, false);
//
//     setTimeout(function(){
//         domi1.reveal(40, 1);
//     }, 1000);
//
// }
// document.addEventListener('DOMContentLoaded', init, false);
//
// })();
