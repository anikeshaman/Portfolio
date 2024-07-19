document.addEventListener('DOMContentLoaded', function() {
    const cubeContainer = document.querySelector('.cube-container');
    const sections = document.querySelectorAll('.section');
    const homeSection = document.querySelector('#home');
    const thankYouSection = document.querySelector('#thank-you');
    
    function scrollToSections() {
        let index = 0;

        function scrollNextSection() {
            if (index < sections.length) {
                window.scrollTo({
                    top: sections[index].offsetTop,
                    behavior: 'smooth'
                });

                index++;
                setTimeout(scrollNextSection, 4000); // Scroll every 4 seconds
            } else {
                // Show "Thank You" section
                window.scrollTo({
                    top: thankYouSection.offsetTop,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    // Scroll back to the home section after "Thank You"
                    window.scrollTo({
                        top: homeSection.offsetTop,
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

