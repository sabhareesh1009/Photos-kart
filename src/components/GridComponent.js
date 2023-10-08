import React, { useEffect } from 'react';

function GridComponent() {
  useEffect(() => {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle the animation when an element is in the viewport
    function handleScrollAnimation(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }

    // Set up the Intersection Observer
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust the threshold as needed (0.3 means 30% of the element must be in view)
    };

    var observer = new IntersectionObserver(handleScrollAnimation, options);

    // Observe each grid item for on-scroll animation
    document.querySelectorAll('.grid-item').forEach((item) => {
      observer.observe(item);
    });

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []); // Run this effect once when the component mounts

  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src="image1.jpg" alt="Image 1" />
      </div>
      <div className="grid-item">
        <img src="image2.jpg" alt="Image 2" />
      </div>
      {/* Add more grid items as needed */}
    </div>
  );
}

export default GridComponent;
