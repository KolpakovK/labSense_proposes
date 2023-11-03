function splitTextIntoWords(target){
    var targetObject = $(target);
    var text = targetObject.text();
    var words = text.split(" ");
    
    // Clear the text content of the targetObject
    targetObject.text('');
    
    // Wrap each line in a <span>
    words.forEach(function (word) {
        let span = $("<span></span>").text(word+" ");
        targetObject.append(span);
    });
}

///////////////////////////////////////////
///////////////////////////////////////////
// HERO
splitTextIntoWords(".hero h1");

let heroSize = $(".hero").height();
// added padding
let heroImageRowSize = $(".hero .image-row").height() + 48;
let heroContentSize = $(".hero .hero-content").height();
// set new value
$(".hero .image-row").height(heroSize-48);
$(".hero .hero-content").height(0);

// HEADER
anime({
    targets: '.hero h1 span',
    opacity: [0,1],
    translateY: [40,0],
    duration: 800,
    delay: anime.stagger(100, {start: 1600}),
    easing: 'easeInOutQuad',
});

// CTA
anime({
    targets: '.hero .hero-cta',
    opacity: [0,1],
    translateX: [-64,0],
    duration: 800,
    delay: 2000,
    easing: 'easeInOutQuad'
});

anime({
    targets: '.hero .image-row .image-container',
    opacity: [0,1],
    translateY: [100,0],
    duration: 800,
    delay: anime.stagger(400, {start: 0}),
    easing: 'easeInOutQuad',
    complete: function(){
        anime({
            targets: '.hero .image-row .image-container:first-child',
            flex: "4 0 0",
            duration:800,
            delay: 100,
            easing: 'easeInOutCubic'
        });
        
        anime({
            targets: '.hero .image-row',
            height: [heroSize,heroImageRowSize],
            duration: 800,
            delay: 100,
            easing: 'easeInOutQuad'
        });
        
        anime({
            targets: '.hero .hero-content',
            height: [0,heroContentSize],
            duration: 800,
            delay: 100,
            easing: 'easeInOutQuad',
            complete: function(){
                $(".hero .hero-content").css("height","auto");
            }
        });
    }
});


//////////////////////////////////////////////////
//////////////////////////////////////////////////
// SECTION 1

splitTextIntoWords(".section1 h2");
let s1Header = anime({
    targets: '.section1 h2 span',
    opacity: [0,1],
    duration: 800,
    delay: anime.stagger(100),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s1Illustration = anime({
    targets: ".section1 .fixed-illustration",
    rotate: 360,
    duration: 35000,
    loop: true,
    easing: "linear"
});

let s1Columns = anime({
    targets: ".section1 .section1-column",
    opacity: [0,1],
    translateY: [40,0],
    duration: 800,
    delay: anime.stagger(300, {start: 700}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s1Waypoint = new Waypoint({
    element: document.querySelector(".section1"),
    handler: function(direction) {
        if (direction === 'down') {
            s1Header.play();
            s1Columns.play();
        }
    },
    offset: '40%'
});


///////////////////////////////////////
///////////////////////////////////////
// SECTION 2
splitTextIntoWords(".section2 h2");
let s2Header = anime({
    targets: '.section2 h2 span',
    opacity: [0,1],
    duration: 800,
    delay: anime.stagger(100),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s2Illustration = anime({
    targets: ".section2 .illustration circle",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    easing: 'easeInOutQuad',
    autoplay: false
});

let s2Illustration2 = anime({
    targets: ".section2 .illustration .fadeInSvg",
    opacity: [0,1],
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    easing: 'easeInOutQuad',
    autoplay: false
});

let s2Content = anime({
    targets: ".section2 .content-paragraph",
    opacity: [0,1],
    translateY: [40,0],
    duration: 800,
    delay: anime.stagger(300, {start: 700}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s2Waypoint = new Waypoint({
    element: document.querySelector(".section2"),
    handler: function(direction) {
        if (direction === 'down') {
            s2Header.play();
            s2Content.play();
            s2Illustration.play();
            s2Illustration2.play();
        }
    },
    offset: '40%'
});



///////////////////////////////////////
///////////////////////////////////////
// SECTION 3
splitTextIntoWords(".section3 h2");
let s3Header = anime({
    targets: '.section3 h2 span',
    opacity: [0,1],
    duration: 800,
    delay: anime.stagger(100, {start: 1800}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s3Images = anime({
    targets: ".section3 .image-container",
    opacity: [0,1],
    translateY: [100,0],
    duration: 800,
    delay: anime.stagger(400, {start: 0}),
    easing: 'easeInOutQuad',
    autoplay: false,
    complete: function(){
        anime({
            targets: '.section3 .image-container:first-child',
            flex: "4 0 0",
            duration:800,
            delay: 100,
            easing: 'easeInOutCubic'
        });
    }

});

let s3Content = anime({
    targets: ".section3 p.fs-5",
    opacity: [0,1],
    translateY: [40,0],
    duration: 800,
    delay: anime.stagger(300, {start: 2200}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s3Waypoint = new Waypoint({
    element: document.querySelector(".section3"),
    handler: function(direction) {
        if (direction === 'down') {
            s3Header.play();
            s3Content.play();
            s3Images.play();
        }
    },
    offset: '40%'
});


///////////////////////////////////////
///////////////////////////////////////
// SECTION 4
splitTextIntoWords(".section4 h2");
let s4Header = anime({
    targets: '.section4 h2 span',
    opacity: [0,1],
    duration: 800,
    delay: anime.stagger(100, {start: 0}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s4Image = anime({
    targets: ".section4 .image-container",
    opacity: [0,1],
    translateY: [100,0],
    duration: 800,
    delay: anime.stagger(400, {start: 1200}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s4ImagePanel = anime({
    targets: ".section4 .image-container .panel",
    opacity: [0,1],
    translateY: [100,0],
    duration: 800,
    delay: anime.stagger(400, {start: 1800}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s4Content = anime({
    targets: ".section4 p.fs-5",
    opacity: [0,1],
    translateY: [40,0],
    duration: 800,
    delay: anime.stagger(300, {start: 700}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s4Form = anime({
    targets: [".section4 form input",".section4 form textarea",".section4 form .d-flex",],
    opacity: [0,1],
    translateY: [100,0],
    duration: 800,
    delay: anime.stagger(400, {start: 1300}),
    easing: 'easeInOutQuad',
    autoplay: false
});

let s4Waypoint = new Waypoint({
    element: document.querySelector(".section4"),
    handler: function(direction) {
        if (direction === 'down') {
            s4Header.play();
            s4Image.play();
            s4ImagePanel.play();
            s4Content.play();
            s4Form.play();
        }
    },
    offset: '40%'
});