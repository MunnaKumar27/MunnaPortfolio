/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Software Engineer at QUALCOMM","Ex - Software Engineer at TVS Motors Company","NITIAN(NIT Patna)","Navodayan","Competitive Programmer","Navodayan","Nitian"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ============================== hero image slider ============================ */
const heroSlides = document.querySelectorAll(".hero-slide");
let activeHeroSlide = 0;

if(heroSlides.length > 1)
{
    setInterval(() => {
        heroSlides[activeHeroSlide].classList.remove("active");
        activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
        heroSlides[activeHeroSlide].classList.add("active");
    }, 1500);
}

/* ============================== story sliders ============================ */
function initStorySlider(selector, interval = 1500)
{
    const slides = document.querySelectorAll(selector);
    let activeSlide = 0;

    if(slides.length > 1)
    {
        setInterval(() => {
            slides[activeSlide].classList.remove("active");
            activeSlide = (activeSlide + 1) % slides.length;
            slides[activeSlide].classList.add("active");
        }, interval);
    }
}

initStorySlider(".hobby-slide");
initStorySlider(".recharge-slide");
