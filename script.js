anime({
    targets: '.box',
    translateX: 820,
    duration: 2000,
    easing: 'linear'
});
anime({
    targets: '.cage',
    opacity: [0,1],
    duration: 2000,
    delay: 2000,
    easing: 'linear'
});
anime({
    targets: '.glasses',
    translateY: 630,
    duration: 2000,
    easing: 'linear',
    delay: 3000,
    rotate: 20
})

let textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime({
    targets: '.letter',
    opacity: [0,1],
    duration: 1000,
    delay: function(el, i) {
        return 110 * (i+1)
    }
});