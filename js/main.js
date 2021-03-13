jQuery(document).ready(function() {
   "use strict"
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
    });

    var typed = new Typed('.text', {
        strings: [
            "<span class='weight-bold'>While there's</span> <span class='weight-bold primary'>code.</span>",
            "<span class='weight-bold'>there's</span> <span class='weight-bold primary'>bug!</span>"
        ],
        typeSpeed: 60,
        loop: true
    });
});