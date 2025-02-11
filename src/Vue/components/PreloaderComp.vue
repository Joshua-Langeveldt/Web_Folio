<template>
    <div class="preloader-wrap">
      <div class="preloader">
        <!-- Your existing loading circles -->
        <div class="loading-circle loading-circle-one"></div>
        <div class="loading-circle loading-circle-two"></div>
        <div class="loading-circle loading-circle-three"></div>
        <div class="loading-circle loading-circle-four"></div>
        <div class="loading-circle loading-circle-five"></div>
        <div class="loading-circle loading-circle-six"></div>
        <div class="loading-circle loading-circle-seven"></div>
        <div class="loading-circle loading-circle-eight"></div>
  
        <!-- Progress bar -->
        <div class="progress-container">
          <div class="progress-bar" :style="{ width: progressWidth + '%' }">
            <span class="progress-text">{{ progressText }}</span>
          </div>
        </div>
        <div class="progress-percentage">{{ Math.round(progressWidth) }}%</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true,
        progressWidth: 0,
        progressText: '',
        fullName: "LOADING JAMIN'S PORTFOLIO"
      };
    },
    mounted() {
      window.addEventListener('load', this.hidePreloader);
      this.startProgress();
    },
    methods: {
      hidePreloader() {
        this.isLoading = false;
      },
      startProgress() {
        const interval = 10000 / this.fullName.length; // 10 seconds divided by the number of characters
        let index = 0;
        const progressInterval = setInterval(() => {
          if (index < this.fullName.length) {
            this.progressWidth += (100 / this.fullName.length);
            this.progressText += this.fullName[index];
            index++;
          } else {
            clearInterval(progressInterval);
            this.hidePreloader();
          }
        }, interval);
      }
    },
    beforeUnmount() {
      window.removeEventListener('load', this.hidePreloader);
    }
  };
  </script>
  
  <style scoped>
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    font-family: arial;
    font-size: 16px;
    margin: 0;
    background: #000;
    color: #000;
  }
  .preloader-wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .preloader {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    perspective: 780px;
  }
  .loading-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 0 7px #f5ba19, 0 0 14px #f12711;  }
  
    .loading-circle-one {
    left: 0%;
    top: 0%;
    animation: loadingCircleOne 3s linear infinite;
    border-bottom: 15px solid #f5ba19;
  }
  .loading-circle-two {
    top: 0%;
    right: 0%;
    animation: loadingCircleTwo 3s linear infinite;
    border-right: 15px solid #f12711;
  }
  .loading-circle-three {
    right: 0%;
    bottom: 0%;
    animation: loadingCircleThree 3s linear infinite;
    border-top: 20px solid #f5ba19;
  }
  .loading-circle-four {
    left: 0%;
    bottom: 0%;
    animation: loadingCircleFour 3s linear infinite;
    border-left: 15px solid #f5ba19;
  }
  .loading-circle-five {
    top: 0%;
    left: 0%;
    animation: loadingCircleFive 3s linear infinite;
    border-top: 15px solid #f12711;
  }
  .loading-circle-six {
    top: 0%;
    left: 0%;
    animation: loadingCircleSix 3s linear infinite;
    border-left: 15px solid #f12711;
    transform-origin: center;
    transform: translate(-50%, -50%);
  }
  .loading-circle-seven {
    bottom: 0%;
    right: 0%;
    animation: loadingCircleSeven 3s linear infinite;
    border-bottom: 15px solid #f12711;
    transform-origin: center;
  }
  .loading-circle-eight {
    top: 0%;
    right: 0%;
    animation: loadingCircleEight 15s linear infinite;
    border-left: 15px solid #f5ba19;
    transform-origin: center;
    transform: translateX(-50%, -50%);
  }

  .progress-container {
  position: absolute;
  bottom: -5rem;
  left: 0;
  width: 110%;
  height: auto;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
}

.progress-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #f5ba19, #f12711, #f5ba19, #f12711) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 3rem;
  box-shadow: 0 0 5px #f5ba19, 0 0 10px #f12711, 0 0 15px #f5ba19, 0 0 20px #f12711; /* Dimmer glow effect */
}

.progress-text {
  font-family: "Karla", sans-serif;
  font-weight: 400;
  color: #f0f0f0;
  width: fit-content;
}

.progress-percentage {
  margin-top: 10px;
  font-family: "Karla", sans-serif;
  font-weight: 400;
  color: #f0f0f0;
  position: absolute;
  bottom: -8rem;
  left: 6rem;
}

  @keyframes loadingCircleOne {
    0% {
      transform: rotateX(60deg) rotateY(-40deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(60deg) rotateY(-40deg) rotateZ(360deg);
    }
  }
  @keyframes loadingCircleTwo {
    0% {
      transform: rotateX(60deg) rotateY(40deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(60deg) rotateY(40deg) rotateZ(360deg);
    }
  }
  @keyframes loadingCircleThree {
    0% {
      transform: rotateX(138deg) rotateY(100deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(138deg) rotateY(100deg) rotateZ(360deg);
    }
  }
  @keyframes loadingCircleFour {
    0% {
      transform: rotateX(60deg) rotateY(40deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(60deg) rotateY(40deg) rotateZ(360deg);
    }
  }
  @keyframes loadingCircleFive {
    0% {
      transform: rotateX(60deg) rotateY(-40deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(60deg) rotateY(-40deg) rotateZ(360deg);
    }
  }
  @keyframes loadingCircleSix {
    0% {
      transform: rotateX(75deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(75deg) rotateY(0deg) rotateZ(360deg);
    }
  }
  @keyframes loadingCircleSeven {
    0% {
      transform: rotateX(138deg) rotateY(100deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(138deg) rotateY(100deg) rotateZ(360deg);
    }
  }
  @keyframes loadingCircleEight {
    0% {
      transform: rotateX(75deg) rotateY(-0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(75deg) rotateY(-0deg) rotateZ(1000deg);
    }
  }
  </style>
  