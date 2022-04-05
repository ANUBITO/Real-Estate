// loader
var loader = document.querySelector('.loader');

window.addEventListener('load', function() {
    loader.classList.add('loaded');
    setTimeout(() => {
        loader.remove();
    }, 2000);
})

// burger menu
var burgerbtn = document.querySelector('.burger');
var burgermenu = document.querySelector('.burgerMenu');
var burgerlinks = document.querySelectorAll('.burgerLinks a');

burgerbtn.addEventListener('click', function() {
    burger();
})

burgerlinks.forEach(Element => {
    Element.addEventListener('click', function() {
        burger();
    })
})

var active = false;

function burger() {
    active = !active
    burgerbtn.classList.toggle('burgerActive')
    if (active) {
        burgermenu.classList.toggle('active')
    } else {
        burgermenu.classList.toggle('active')
        burgermenu.classList.toggle('deactive')
        setTimeout(() => {
            burgermenu.classList.toggle('deactive')
            
        }, 500);
    }
}

// search menu
var searchbtn = document.querySelector('.search');
var exitbtn = document.querySelector('.exitbtn');
var searchmenu = document.querySelector('.searchMenu');

searchbtn.addEventListener('click', function() {
    searchmenu.classList.add('searchActive');
});

exitbtn.addEventListener('click', function() {
    searchmenu.classList.remove('searchActive');
});

// scroll animation

var agency = document.querySelector('.agency');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 150) {
        agency.classList.add('greenSpan');
    } else {
        agency.classList.remove('greenSpan');
    }
}

const hidden = document.querySelectorAll(".hide");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(window.innerWidth >= 1200) {
                entry.target.classList.toggle("show", entry.isIntersecting)
            }
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        rootMargin: "-200px",
    }
)

hidden.forEach(element => {
    observer.observe(element)
})


// slick carousel on property section
$('.propertyslider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    touchThreshold: 100,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// slick carousel on main slider
$('.mainSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 700
})

$('.newswrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    touchThreshold: 100,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});