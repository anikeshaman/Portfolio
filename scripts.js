document.addEventListener('DOMContentLoaded', function() {
    const cubeContainer = document.querySelector('.cube-container');
    const sections = Array.from(document.querySelectorAll('.section'));
    const homeSection = document.querySelector('#hero'); // Assuming the hero section should be used as 'home'
    const thankYouSection = document.querySelector('#thank-you');
    
    function scrollToSections() {
        let index = 0;

        function scrollNextSection() {
            if (index < sections.length) {
                window.scrollTo({
                    top: sections[index].offsetTop - document.querySelector('header').offsetHeight, // Adjust for header height
                    behavior: 'smooth'
                });

                index++;
                setTimeout(scrollNextSection, 4000); // Scroll every 4 seconds
            } else {
                // Show "Thank You" section
                window.scrollTo({
                    top: thankYouSection.offsetTop - document.querySelector('header').offsetHeight, // Adjust for header height
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    // Scroll back to the hero section after "Thank You"
                    window.scrollTo({
                        top: homeSection.offsetTop - document.querySelector('header').offsetHeight, // Adjust for header height
                        behavior: 'smooth'
                    });
                }, 2000); // Show "Thank You" for 2 seconds
            }
        }

        scrollNextSection();
    }

    // Start scrolling after rotating animation ends
    setTimeout(() => {
        cubeContainer.classList.add('scroll-to-section');
        scrollToSections();
    }, 4000); // 4 seconds pause
});
