
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (burger) {

    burger.addEventListener('click', () => {

        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

    });

}


const mobileLinks = document.querySelectorAll('.mobile-nav a');

mobileLinks.forEach(link => {

    link.addEventListener('click', () => {

        mobileMenu.classList.remove('active');
        burger.classList.remove('active');

    });

});


const revealElements = document.querySelectorAll(
    '.importance-card, .sos-content, .map-wrapper, .route-section, .community-layout, .tariff-card, .download-section'
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});


const heroTags =
    document.querySelectorAll('.hero-tag');

function showHeroTags() {

    const hero =
        document.querySelector('.hero__visual');

    const top =
        hero.getBoundingClientRect().top;

    if (top < window.innerHeight - 200) {

        heroTags.forEach((tag, index) => {

            setTimeout(() => {

                tag.classList.add('show');

            }, index * 250);

        });

        window.removeEventListener(
            'scroll',
            showHeroTags
        );

    }

}

window.addEventListener(
    'scroll',
    showHeroTags
);

showHeroTags();


const mascot = document.querySelector('.mascot-face');

document.addEventListener('mousemove', (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) * 0.15;
    const moveY = (mouseY - centerY) * 0.15;

    mascot.style.transform =
        `translate(-50%, 0) translate(${moveX}px, ${moveY}px)`;

});


const sosButton = document.querySelector('.sos-button');
const statusCards = document.querySelectorAll('.status-card');

if (sosButton) {

    sosButton.addEventListener('click', () => {

        // делаем кнопку ярче
        sosButton.classList.add('activated');

        // скрываем карточки перед повторным запуском
        statusCards.forEach(card => {

            card.classList.remove('show');

        });

        // карточка 1
        setTimeout(() => {

            statusCards[0].classList.add('show');

        }, 400);

        // карточка 2
        setTimeout(() => {

            statusCards[1].classList.add('show');

        }, 900);

        // карточка 3
        setTimeout(() => {

            statusCards[2].classList.add('show');

        }, 1400);

    });

}


const pins = document.querySelectorAll('.map-pin');

function showPins() {

    const map = document.querySelector('.map-wrapper');

    if (!map) return;

    const mapTop = map.getBoundingClientRect().top;

    if (mapTop < window.innerHeight - 200) {

        pins.forEach((pin, index) => {

            setTimeout(() => {

                pin.classList.add('show');

            }, index * 400);

        });

        window.removeEventListener('scroll', showPins);
    }
}

window.addEventListener('scroll', showPins);


const routeSection = document.querySelector('.route-section');
const routeLight = document.querySelector('.route-light');
const routeMain = document.querySelector('.route-main');

function showRoute() {

    if (!routeSection) return;

    const top = routeSection.getBoundingClientRect().top;

    if (top < window.innerHeight * 0.7) {

        routeLight.classList.add('show');

        setTimeout(() => {
            routeMain.classList.add('show');
        }, 400);

        window.removeEventListener('scroll', showRoute);
    }
}

window.addEventListener('scroll', showRoute);


const communitySection =
    document.querySelector('.community-section');

const messages =
    document.querySelectorAll('.message');

let chatStarted = false;

function startChatAnimation() {

    if (chatStarted) return;

    const top =
        communitySection.getBoundingClientRect().top;

    if (top < window.innerHeight * 0.7) {

        chatStarted = true;

        messages.forEach((message, index) => {

            setTimeout(() => {

                message.style.transition =
                    '.6s ease';

                message.style.opacity = '1';

                message.style.transform =
                    'translateY(0)';

            }, index * 800);

        });

    }

}

window.addEventListener(
    'scroll',
    startChatAnimation
);


const cards = document.querySelectorAll('.article-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        cards.forEach(item => {

            item.classList.remove('active');

        });

        card.classList.add('active');

    });

});


const tariffCards =
    document.querySelectorAll('.tariff-card');

tariffCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.classList.add('hovered');

    });

    card.addEventListener('mouseleave', () => {

        card.classList.remove('hovered');

    });

});


function animateCounter(counter) {

    const target =
        Number(counter.dataset.target);

    let current = 0;

    const step =
        Math.ceil(target / 100);

    const timer = setInterval(() => {

        current += step;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.textContent =
            current.toLocaleString();

    }, 20);

}

const counters =
    document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    observer.observe(counter);

});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('current');

        if (
            link.getAttribute('href') ===
            '#' + current
        ) {

            link.classList.add('current');

        }

    });

});