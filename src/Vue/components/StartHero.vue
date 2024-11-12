<template>
<<<<<<< HEAD
    <div class="parallax-hero">
      <div class="wrapper">
        <!-- Only render AppHeader outside the animated wrapper -->
        <AppHeader />
        <div class="content">
          <div class="section hero">
            <!-- Parallax content goes here, excluding AppHeader -->
            <AppBanner />
          </div>
        </div>
        <div class="image-container">
          <img
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
            alt="image"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import AppHeader from '../pages/AppHeader.vue';
  import AppBanner from '../components/AppBanner.vue';
  
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    name: 'ParallaxHero',
    components: {
      AppHeader,
      AppBanner
    },
    setup() {
      onMounted(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: '.parallax-hero .wrapper',
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: true,
            markers: false,
          },
        })
          .to('.parallax-hero .image-container img', {
            scale: 2,
            z: 350,
            transformOrigin: 'center center',
            ease: 'power1.inOut',
          })
          .to(
            '.parallax-hero .section.hero',
            {
              scale: 1.1,
              transformOrigin: 'center center',
              ease: 'power1.inOut',
            },
            '<'
          );
      });
    },
  };
  </script>
  
  <style scoped>
  .parallax-hero {
    position: relative;
    width: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .wrapper {
    position: relative;
    width: 100%;
    z-index: 1; /* Ensures the wrapper stays under AppHeader */
    overflow: hidden;
  }
  
  .content {
    position: relative;
    overflow-x: hidden;
  }
  
  .content .section {
    width: 100%;
    height: 100vh;
  }
  
  .image-container {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2; /* Keeps the image above the content */
    perspective: 500px;
    overflow: hidden;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  
  /* Fixing the navbar (AppHeader) to be above everything */
  .parallax-hero .wrapper {
    position: relative;
    z-index: 10; /* Make sure the wrapper is below the navbar */
  }
  
  .parallax-hero .image-container {
    z-index: 1; /* Ensure the image stays behind the navbar */
  }
  
  /* Ensures the navbar is always on top */
  .parallax-hero .app-header {
    z-index: 1000; /* Forces navbar to be above the content and image */
    
  }
  </style>
  
=======
  <div class="parallax-hero">
    <div class="wrapper">
      <!-- Only render AppHeader outside the animated wrapper -->
      <AppHeader />
      <div class="content">
        <div class="section hero">
          <!-- Parallax content goes here, excluding AppHeader -->
          <AppBanner />
        </div>
      </div>
      <div class="image-container">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppHeader from '../pages/AppHeader.vue';
import AppBanner from '../components/AppBanner.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ParallaxHero',
  components: {
    AppHeader,
    AppBanner
  },
  setup() {
    onMounted(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.parallax-hero .wrapper',
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
          markers: false,
        },
      })
        .to('.parallax-hero .image-container img', {
          scale: 2,
          z: 350,
          transformOrigin: 'center center',
          ease: 'power1.inOut',
        })
        .to(
          '.parallax-hero .section.hero',
          {
            scale: 1.1,
            transformOrigin: 'center center',
            ease: 'power1.inOut',
          },
          '<'
        );
    });
  },
};
</script>

<style scoped>
.parallax-hero {
  position: relative;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  position: relative;
  width: 100%;
  z-index: 1;
  overflow: hidden;
}

.content {
  position: relative;
  overflow-x: hidden;
}

.content .section {
  width: 100%;
  height: 100vh;
}

.content .section.hero {
  background-image: url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; /* Make sure it's relative for proper stacking */
  z-index: 0; /* Ensure it's behind content */
}

.image-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  perspective: 500px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

</style>
>>>>>>> d2efa1ba2288a522db1e7b2ad2a178f5cd4c52ad
