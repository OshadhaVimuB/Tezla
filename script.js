function navigateToSignInPage() {
    const signInPage = document.querySelector('.sign-in');
  
    // Smooth scrolling (optional)
    // Uncomment these lines if you want smooth scrolling
    // const scrollY = window.scrollY; // Get current scroll position
    // const distance = signInPage.offsetTop - scrollY; // Calculate distance to scroll
    // const duration = 500; // Animation duration in milliseconds
  
    // window.scrollTo({
    //   top: scrollY + distance,
    //   behavior: 'smooth'
    // });
  
    // Alternatively, you can use a library like ScrollMagic for more advanced scrolling effects.
  
    signInPage.style.display = 'block'; // Show the sign-in page
  }
  const container = document.querySelector('.dashboard .container');

  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  
    // Assuming scrollLine is also a child of the dashboard element
    const scrollLine = document.querySelector('.dashboard .scrollLine');
    scrollLine.style.width = container.scrollLeft + 'px';
  });
