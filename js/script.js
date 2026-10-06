document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       MOBILE NAVIGATION
    ======================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        /* Close menu when a navigation link is clicked */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* Close menu when clicking outside the navigation */

        document.addEventListener("click", (event) => {

            const clickedInsideNav = nav.contains(event.target);

            const clickedMenuButton =
                menuButton.contains(event.target);

            if (
                !clickedInsideNav &&
                !clickedMenuButton &&
                nav.classList.contains("active")
            ) {

                nav.classList.remove("active");

                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* ========================================
       HEADER ON SCROLL
    ======================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        };

        updateHeader();

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

    }


    /* ========================================
       CONTACT FORM
    ======================================== */

    const contactForm = document.querySelector("#contact-form");

    const formStatus = document.querySelector("#form-status");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const name =
                document.querySelector("#name").value.trim();

            const email =
                document.querySelector("#email").value.trim();

            const message =
                document.querySelector("#message").value.trim();


            /* Validate fields */

            if (!name || !email || !message) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please complete all fields.";

                }

                return;

            }


            /* Validate email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please enter a valid email address.";

                }

                return;

            }


            /*
             * Create the email contents.
             * Change this address if your real
             * portfolio email is different.
             */

            const recipient =
                "tshepangdewa@email.com";

            const subject =
                `Portfolio Contact from ${name}`;

            const body =
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`;


            const mailtoURL =
                `mailto:${recipient}` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;


            /* Open the user's email client */

            window.location.href = mailtoURL;


            if (formStatus) {

                formStatus.textContent =
                    "Opening your email client...";

            }

        });

    }


    /* ========================================
       CURRENT YEAR
    ======================================== */

    const yearElement =
        document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

   /* ========================================
   STAGGER TEXT SCRAMBLE
======================================== */

/* ========================================
   STAGGER TEXT SCRAMBLE
======================================== */

const scrambleText = document.querySelector(".scramble-text");

if (scrambleText) {

    const originalText =
        scrambleText.dataset.text;

    const characters =
        "{}[]()<>/\\=+-_*&|!?:;.,#@$%^~`";

    const scrambleCycles = 6;
    const letterStagger = 4;
    const cycleSpeed = 4;
    const frameDuration = 61;

    let frame = 0;

    const totalFrames =
        ((originalText.length - 1) * letterStagger) +
        (scrambleCycles * cycleSpeed);

    const updateText = () => {

        let output = "";

        for (let i = 0; i < originalText.length; i++) {

            const letterStart =
                i * letterStagger;

            const letterEnd =
                letterStart +
                (scrambleCycles * cycleSpeed);

            if (frame >= letterEnd) {

                output += originalText[i];

            } else if (frame >= letterStart) {

                const cycleFrame =
                    Math.floor(
                        (frame - letterStart) /
                        cycleSpeed
                    );

                if (cycleFrame >= scrambleCycles) {

                    output += originalText[i];

                } else {

                    output +=
                        characters[
                            Math.floor(
                                Math.random() *
                                characters.length
                            )
                        ];

                }

            } else {

                output +=
                    characters[
                        Math.floor(
                            Math.random() *
                            characters.length
                        )
                    ];

            }

        }

        scrambleText.textContent = output;

        frame++;

        if (frame <= totalFrames) {

            setTimeout(
                updateText,
                frameDuration
            );

        } else {

            scrambleText.textContent =
                originalText;

        }

    };

    updateText();

}
});