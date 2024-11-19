<template>
      <section id="education" class="light-section">
      
    <div class="container-fluid">
        <h1 class="section-header">{{ heading }}</h1>
      <div class="row">
        <!-- Main timeline container -->
        <div class="timeline-container">
          <!--  timeline point -->
          <div class="timeline-point">
            <i class="fa-solid fa-graduation-cap"></i>
            <div class="popup">
              <div class="popup-number">1</div>
              <div class="popup-details">
                <div class="popup-title">Alexander Sinton High</div>
                In my high school years, I had the opportunity to develop essential life skills and gain valuable lessons. These experiences have greatly influenced my personal growth and helped me navigate life after graduating and obtaining my Matric certification.
              </div>
            </div>
          </div>
  
          <!--  timeline point -->
          <div class="timeline-point">
            <i class="fa-sharp fa-solid fa-dog"></i>
            <div class="popup">
              <div class="popup-number">2</div>
              <div class="popup-details">
                <div class="popup-title">Mango5 Dotsure</div>
                After completing high school, I gained valuable work experience at an insurance company where I specialized in selling car and home insurance. During my tenure, I actively participated in professional development by completing multiple courses and obtaining relevant certifications.
              </div>
            </div>
          </div>
  
          <!-- timeline point -->
          <div class="timeline-point">
            <i class="fa-sharp fa-solid fa-comments-dollar"></i>
            <div class="popup">
              <div class="popup-number">3</div>
              <div class="popup-details">
                <div class="popup-title">Sanlam</div>
                After leaving Dotsure, I was sought out by Sanlam due to my outstanding performance. During my tenure at Sanlam, I established valuable connections and consistently excelled in my role.
              </div>
            </div>
          </div>
  
          <!--  timeline point -->
          <div class="timeline-point">
            <i class="fa-solid fa-house-chimney-user"></i>
            <div class="popup">
              <div class="popup-number">4</div>
              <div class="popup-details">
                <div class="popup-title">IHS House Sitting</div>
                After signing a part-time contract with Sanlam to accommodate my studies, I faced financial challenges. Subsequently, I transitioned to working for IHS, where my responsibilities included maintaining houses and apartments by living on-site and ensuring their cleanliness and order.
              </div>
            </div>
          </div>
  
          <!--  timeline point -->
          <div class="timeline-point">
            <i class="fa-solid fa-laptop-code"></i>
            <div class="popup">
              <div class="popup-number">5</div>
              <div class="popup-details">
                <div class="popup-title">Life Choice Academy</div>
                While employed at IHS, I received an email from Life Choices informing me that I had been accepted for enrollment at the institution. This news brought me immense joy and relief, as it meant I could continue pursuing my dream of becoming a web developer.
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://drive.google.com/uc?export=download&id=1eR4opf_Mh8h2LNUNjNpJUVlSUcLiiFge" id="download-link"><button class="btn">Download CV</button></a>
      <!-- <a href="https://joshua-langeveldt.github.io/learnify_certified/Jamin%20CV%202k24.pdf" download="Jamin_CV_2k24.pdf" class="btn btn-primary border-white">Download CV</a> -->
    </div>
    <AppArrow />
</section>
  </template>
  
  <script>
  import data from "../../data/data.json";
  import AppArrow from "../components/AppArrow.vue";
  
  export default {
    name: "AppAbout",
    components: {
      AppArrow,
    },
    data() {
      return {
        heading: data.main.headings.education,
      };
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap");
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
  
  /* Timeline container styling */
  
  button {
      background-color: #0A0D12;
      color: white;
      border-radius: 1rem;
      padding: 0.3rem;
      border: 0;
      width: 9rem;
      margin:2rem;
      height: 3.5rem;
    }
    button:hover {
      background-color: #141C27;
      color: #84A7A1;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
      transition: 0.2s;
      transform: scale(1.1);
    }
  
  
  .timeline-container {
    display: flex;
    gap: 33.5px;
    width: 200%;
    height: 154px;
    justify-content: center;
    font-weight: 900;
    font-size: 3rem;
    margin-top: 17rem;
    margin-bottom: 20rem;
  }
  
  /* Individual timeline point styling */
  .timeline-point {
    transition-duration: 0.5s;
    border-radius: 50%;
    background: linear-gradient(145deg, #1e2125, #23282c);
    box-shadow: 13.4px 13.4px 40.2px #1c1f23, -13.4px -13.4px 40.2px #262b2f;
    display: grid;
    place-items: center;
    width: 158px;
    height: 154px;
    position: relative;
    color: var(--color);
  }
  
  .timeline-point::before {
    content: "";
    width: 170px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    background: conic-gradient(
      var(--color) var(--angle),
      transparent 0deg 360deg
    );
    animation: rotateBorder 1s linear var(--delay) forwards;
  }
  
  .timeline-point:nth-child(odd)::before {
    transform: rotate(-90deg);
  }
  
  .timeline-point:nth-child(even)::before {
    transform: rotate(90deg) scaleY(-1);
  }
  
  /* Custom property for angle */
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  
  /* Common styling for timeline points */
  .timeline-point:nth-child(1) {
    --color: #f5ba19;
    --delay: 0s;
  }
  
  .timeline-point:nth-child(2) {
    --color: #f5ba19;
    --delay: 1s;
  }
  
  .timeline-point:nth-child(3) {
    --color: #f5ba19;
    --delay: 2s;
  }
  
  .timeline-point:nth-child(4) {
    --color: #f5ba19;
    --delay: 3s;
  }
  
  .timeline-point:nth-child(5) {
    --color: #f5ba19;
    --delay: 4s;
  }
  
  /* Popup styling */
  .popup {
    width: 350.6px;
    height: 250px;
    max-height: 0;
    background: linear-gradient(-45deg, #f5ba19, #f12711, #f5ba19);
    display: grid;
    grid-template-columns: 16% 84%;
    position: absolute;
    color: white;
    border-radius: 30px;
    box-shadow: 6.7px 6.7px 21.4px #17191d, -6.7px -6.7px 21.4px #212529;
  
    transform-origin: bottom bottom;
    animation: expandPopup 0.5s linear calc(var(--delay) + 0.5s) forwards;
  }
  
  .timeline-point:nth-child(odd) .popup {
    bottom: 221.1px;
  }
  
  .timeline-point:nth-child(even) .popup {
    top: 221.1px;
  }
  
  /* Popup number styling */
  .popup-number {
    grid-row: span 2;
    display: grid;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    place-items: center;
    cursor: auto;
    animation: fadeIn 0.5s linear calc(var(--delay) + 0.7s) forwards;
    opacity: 0;
    height: 100%;
  }
  
  /* Popup title styling */
  .popup-title {
    color: var(--color);
    padding-bottom: 6.7px;
    font-size: 1.2rem;
    font-weight: 400;
  }
  
  /* Popup details styling */
  .popup-details {
    padding: 20.1px;
    background-color: #1c1f23;
    border-radius: 30px;
    opacity: 0;
    font-weight: 500;
    user-select: none;
    cursor: auto;
    overflow: hidden;
    font-size: 0.8rem;
    text-align: justify;
    background: linear-gradient(145deg, #16181b, #22262b);
    margin: 3.35px;
    animation: fadeIn 0.5s linear calc(var(--delay) + 0.7s) forwards;
  }
  
  .popup::before {
    content: "";
    width: 6.7px;
    height: 0;
    border-radius: 20px;
    background-color: var(--color);
    position: absolute;
    left: 50%;
    top: -41.9px;
    display: flex;
    animation: drawLine 0.5s linear var(--delay) forwards;
  }
  
  .timeline-point:nth-child(odd) .popup:before {
    top: calc(100% + 47px);
    transform: rotateX(180deg);
    transform-origin: top;
  }
  
  /* Hover effect for timeline points */
  .timeline-point:hover {
    background: linear-gradient(145deg, var(--color), #1e2125);
    color: white;
  }
  
  /* Animation for border rotation */
  @keyframes rotateBorder {
    from {
      --angle: 0deg;
    }
  
    to {
      --angle: 180deg;
    }
  }
  
  /* Animation for popup expansion */
  @keyframes expandPopup {
    0% {
      max-height: 0;
    }
  
    100% {
      max-height: 220px;
    }
  }
  
  /* Animation for line drawing */
  @keyframes drawLine {
    0% {
      height: 0%;
      opacity: 0;
    }
  
    100% {
      height: 33.5px;
      opacity: 1;
    }
  }
  
  /* Animation for fade-in effect */
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  @media (max-width: 1024px) {
  body {
    height: auto;
    display: block;
  }

  .timeline-container {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 100px 0px;
    margin-bottom: 0rem;
    margin-top: 0;
  }

  .timeline-point {
    height: 100px; /* Smaller size for icons */
    width: 100px;  /* Smaller size for icons */
    flex-shrink: 0;
    left: calc(-200px / 2);
    margin: 4rem 9rem; /* Adjusted margin */
    position: relative;
  }

  .timeline-point i {
    font-size: 1.5rem; /* Smaller icon size */
  }

  .timeline-point:nth-child(odd)::before {
    transform: rotate(0deg);
  }

  .timeline-point:nth-child(even)::before {
    transform: rotate(0deg) scaleX(-1);
  }

  .popup {
    width: 250px; /* Smaller width for popups */
    height: 190px; /* Smaller height for popups */
    grid-template-columns: 20% 80%; /* Adjusted layout */
  }

  .popup-number {
    font-size: 1rem; /* Smaller font size for numbers */
  }

  .popup-details {
    font-size: 0.6rem; /* Smaller font size for details */
    padding: 15px; /* Adjusted padding */
  }

  .popup-title {
    font-size: 1rem; /* Smaller title font size */
  }

  .timeline-point .popup:before {
    display: none;
  }

  .timeline-point:nth-child(odd) .popup {
    bottom: auto;
    right: -280px;
  }

  .timeline-point:nth-child(even) .popup {
    top: auto;
    right: -280px;
  }
}
</style>