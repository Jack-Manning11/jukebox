import React, { useEffect } from 'react';
import { Link } from 'wouter';

const Landing = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.album-cover');
    const imageContainer = document.querySelector('.image-container');
    const memories = ['array of memories'];

    function getRandomImage() {
      const index = Math.floor(Math.random() * images.length);
      return images[index];
    }

    function calculateMaxScale(image) {
      const containerWidth = image.parentElement.clientWidth;
      const imageWidth = image.clientWidth;
      return containerWidth / imageWidth;
    }

    function isOffScreen(image) {
      const rect = image.getBoundingClientRect();
      return rect.left < 0 || rect.right > window.innerWidth;
    }

    function animateImage(image, container) {
      const maxScale = calculateMaxScale(image);
      if (isOffScreen(image)) {
        image.classList.remove('enlarged');
      } else {
        image.classList.add('enlarged');
      }
      container.classList.add('transparent');
      setTimeout(() => {
        image.classList.remove('enlarged');
        container.classList.remove('transparent');

        setTimeout(() => {
          animateImage(getRandomImage(), imageContainer);
        }, 1000);
      }, 7000);
    }
    animateImage(getRandomImage(), imageContainer);

    function updateBannerText() {
      const randomIndex = Math.floor(Math.random() * memories.length);
      const randomString = memories[randomIndex];
      const bannerContent = document.querySelector('.banner-content');
      bannerContent.textContent = randomString;
      const textWidth = bannerContent.offsetWidth;
      const durationFactor = 0.5;
      const animationDuration = textWidth * durationFactor / 75;
      bannerContent.style.animationDuration = `${animationDuration}s`;
    }
    updateBannerText();
    setInterval(updateBannerText, 10000);
  }, []);

  return (
    <div>
      <div className="nav-bar-container">
        <div className="nav-bar">
          <Link className="nav-link on-page" href="/">HOME</Link>
          <Link className="nav-link" href="/about">ABOUT</Link>
          <a className="nav-link" href="https://docs.google.com/forms/d/1KInCehTTZ-uSC-_DHUe5xv85l8g6AJ5Noz1d7AtyI0Y/viewform?edit_requested=true">CONTRIBUTE</a>
          <Link href="/jukebox" className="round-button"><i className="fa fa-play fa-1x"></i></Link>
        </div>
      </div>

      <div className="image-container" id="imageContainer">
        <img class="album-cover" src="./images/0.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/1.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/2.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/3.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/4.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/5.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/6.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/7.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/8.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/9.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/10.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/11.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/12.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/13.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/14.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/15.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/16.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/17.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/18.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/19.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/20.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/21.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/22.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/23.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/24.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/25.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/26.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/27.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/28.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/29.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/30.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/31.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/32.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/33.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/34.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/35.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/36.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/37.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/38.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/39.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/40.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/41.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/42.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/43.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/44.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/45.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/46.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/47.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/48.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/49.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/50.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/51.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/52.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/53.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/54.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/55.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/56.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/57.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/58.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/59.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/60.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/61.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/62.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/63.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/64.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/65.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/66.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/67.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/68.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/69.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/70.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/71.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/72.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/73.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/74.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/75.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/76.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/77.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/78.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/79.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/80.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/81.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/82.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/83.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/84.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/85.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/86.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/87.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/88.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/89.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/90.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/91.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/92.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/93.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/94.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/95.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/96.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/97.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/98.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/99.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/146.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/101.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/102.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/103.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/104.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/105.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/106.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/107.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/108.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/109.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/110.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/111.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/112.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/113.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/114.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/115.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/116.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/117.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/118.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/119.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/120.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/121.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/122.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/123.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/124.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/125.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/126.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/127.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/128.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/129.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/130.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/131.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/132.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/133.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/134.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/135.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/136.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/137.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/138.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/139.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/140.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/141.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/142.jpg" alt="album cover test" />
        <img class="album-cover" src="./images/143.jpg" alt="album cover test" />
      </div>
      <div className="scrolling-banner">
        <div className="banner-content">Scrolling text</div>
      </div>
    </div>
  );
};

export default Landing;
