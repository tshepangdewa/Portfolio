document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       MOBILE NAVIGATION
    ======================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);
            menuButton.setAttribute("aria-expanded", isOpen);

        });


        /* Close menu when a navigation link is clicked */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");
                menuButton.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");

            });

        });


        /* Close menu when clicking outside the navigation */

        document.addEventListener("click", (event) => {

            const clickedInsideNav = nav.contains(event.target);
            const clickedMenuButton = menuButton.contains(event.target);

            if (
                !clickedInsideNav &&
                !clickedMenuButton &&
                nav.classList.contains("active")
            ) {

                nav.classList.remove("active");
                menuButton.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");

            }

        });

    }


    /* ========================================
       HEADER ON SCROLL
    ======================================== */

    const header = document.querySelector(".header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        updateHeader();

        window.addEventListener("scroll", updateHeader);

    }


    /* ========================================
       CURRENT YEAR
    ======================================== */

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});