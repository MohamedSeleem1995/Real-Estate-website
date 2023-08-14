
window.addEventListener("DOMContentLoaded", () => {
    // variable declaration
    const stickyNav = document.querySelector("header .second-row");
    const themeBtn = document.querySelector(".theme_switcher_menu .btn");
    const white = document.getElementsByClassName("white")[0];
    const dark = document.getElementsByClassName("dark")[0];
    const body = document.body;
    const h2 = document.getElementsByTagName("h2");
    const footer = document.querySelector("footer");
    const a = document.getElementsByClassName("footer_btn");
    const mediaIcons = document.querySelectorAll(".media .icon");
    const footerImg = document.querySelector(".footer_widget .logo img");
    const h3 = document.getElementsByTagName("h3");
    const h4 = document.getElementsByTagName("h4");
    const p = document.getElementsByTagName("p");
    /* const input = document.querySelectorAll("input"); */
    const input = document.querySelectorAll("input");
    const textArea = document.getElementsByTagName("textarea")[0];
    const scrollTopBtn = document.getElementById("scroll_top");
    const counterSection = document.querySelector(".counter");
    let counter = document.querySelectorAll(".counter .counter_info .number");
    let started = false;
    
    // Dark mode on action

    themeBtn.addEventListener("click", () => {

        const change = () => {

            body.classList.toggle("dark_mode");
            
            if (document.body.className === 'dark_mode') {
                footerImg.src = "images/logo.png.webp";
                white.style.display = "none";
                dark.style.display = "block";
            } else {
                footerImg.src = "images/footer_logo.png.webp";
                dark.style.display = "none";
                white.style.display = "block";
            }
            // for footer 
            footer.classList.toggle("dark_mode");
            // for a elements 
            for (let n = 0; n < a.length; n++) {
                a[n].classList.toggle("text-white");
            }
            // for h2 elements 
            for (let i = 0; i < h2.length; i++) {
                h2[i].classList.toggle("text-white");
            }
            // h3 element
            for (let t = 0; t < h3.length; t++) {
                h3[t].classList.toggle("text-white");
            }
            for (let q = 0; q < h4.length; q++) {
                h4[q].classList.toggle("text-white");
            }
            // p element
            for (let n = 0; n < p.length; n++) {
                p[n].classList.toggle("text-white");
            }
            for (let x = 0; x < mediaIcons.length; x++) {
                mediaIcons[x].classList.toggle("text-white");
            }
            
            input.forEach((m) => m.classList.toggle("text-white"));
            textArea.classList.toggle("text-white");
            
        }
        change();
    });

    window.addEventListener("scroll", () => {
         //making header appears when scroll down 
        if (window.scrollY > 80) {
            stickyNav.classList.add('sticky');
        }
        else {
            stickyNav.classList.remove('sticky');
        }

        if (body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
        if (window.scrollY >= counterSection.offsetTop) {
            if (!started) {
                    counter.forEach((number) => startCount(number));
            }
            started = true;
        }
    })
    const startCount = (el) => {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.innerHTML++;
            if (el.innerHTML === goal) {
                clearInterval(count)
            }
        }, 2000 / goal);
    }
    scrollTopBtn.onclick = () => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth'});
        body.scrollTo({ top: 0, behavior:'smooth'});
    }
    //form validaion 
    function validateForm() { 
        const form = document.forms[0];
        form.addEventListener("submit", (e) => {
            const userName = document.querySelector("[name='username']");
            const mail = document.querySelector("[type='email']");
            const phoneNum = document.querySelector("[type='number']");
            if (mail.value !== "" && mail.value.indexOf("@") !== -1 && userName.value.length < 15 && phoneNum.value.length < 12) {
                return true;
            } else {
                e.preventDefault();
                alert('Please enter a valid info');
            }
        });
    }
    validateForm();
    
    // wow js 
    new WOW().init();
    
});