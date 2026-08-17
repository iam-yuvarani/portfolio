const navLinks = document.querySelectorAll(".navbar nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.forEach((item) => {
            item.classList.remove("active");
        });
        this.classList.add("active");

    });
});
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#06151e";
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.25)";
    } else {
        navbar.style.background = "#071923";
        navbar.style.boxShadow = "none";

    }
});

/* =========================================================
   ABOUT SECTION ANIMATION
========================================================= */

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {

    const aboutObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    aboutSection.classList.add("animate");

                    aboutObserver.unobserve(aboutSection);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    aboutObserver.observe(aboutSection);
}
/* =========================================================
   SERVICES SECTION - ONE BY ONE ANIMATION
========================================================= */

const servicesSection = document.querySelector(".services-section");

if (servicesSection) {

    const servicesObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    servicesSection.classList.add("animate");

                    servicesObserver.unobserve(servicesSection);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    servicesObserver.observe(servicesSection);
}

/* =========================================================
   SKILLS SECTION - ONE BY ONE ANIMATION
========================================================= */

const skillsSection = document.querySelector(".skills-section");

if (skillsSection) {

    const skillsObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    skillsSection.classList.add("animate");

                    skillsObserver.unobserve(skillsSection);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    skillsObserver.observe(skillsSection);
}
/* =========================================================
   PROJECTS SECTION - ONE BY ONE ANIMATION
========================================================= */

const projectsSection = document.querySelector(".projects-section");

if (projectsSection) {

    const projectsObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    projectsSection.classList.add("animate");

                    projectsObserver.unobserve(projectsSection);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    projectsObserver.observe(projectsSection);
}

/* =========================================================
   CONTACT SECTION - ONE BY ONE ANIMATION
========================================================= */

const contactSection = document.querySelector(".contact-section");

if (contactSection) {

    const contactObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    contactSection.classList.add("animate");

                    contactObserver.unobserve(contactSection);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    contactObserver.observe(contactSection);
}