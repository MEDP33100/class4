document.addEventListener("DOMContentLoaded", (event) => {
    //flower spin
    const spinEl = document.querySelector('.spin');
    spinEl.addEventListener('mouseover', () => {
        gsap.to(spinEl, {
            rotate: "+=360deg"
        })
    });

    // ball bounce
    const bounceEl = document.querySelector('.bounce');
    bounceEl.addEventListener('mouseover', () => {
        gsap.fromTo(bounceEl, {
            y: -20,
            ease: "bounce.in",
            duration: 1,
        }, {
            y: 0,
            ease: "bounce.out",
            duration: 1,
        });
    });

    // lick
    const lickEl = document.querySelector('.lick');
    lickEl.addEventListener('mouseover', () => {
        const timeline = gsap.timeline({
            ease: "power4.out",
        });
        timeline.to(lickEl, {
            scale: 1.5,
        });
        timeline.to(lickEl, {
            y: -10,
        });
        timeline.to(lickEl, {
            scale: 1,
            duration: 0.5,
        });
        timeline.to(lickEl, {
            y: 0,
            duration: 0.5,
        });
    })
});