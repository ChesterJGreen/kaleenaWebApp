<template>
    <div class="container-fluid mt-5">
      <div class="row pinkSquareBorder">
        <div class="col-10 offset-1 pinkBorder">
          <div class="row">
            <div class="col-3 p-5">
              <img src="src\assets\img\LogoTransparentEnlargedCropped.png" width="300">
            </div>
            <div class="col-6 p-5 text-center">
              <div class="row">
                <div class="col-12 pt-5" id="SweetBites">
                  <p class="ThanksText cardo-font">Thanks for stopping by!</p>
                  <button class="btn rounded p-4 keepInTouch cardo-font" data-toggle="modal"
                              data-target="#newsletterModal">Let's keep in touch</button>
                    <img src="src\assets\img\Arrow.png" id="Arrow">
                    <p id="SBText">Sweet Bites</p>
                  <p id="NewsLetter">Newsletter</p>
                </div>
              </div>
            </div>
            <div class="col-3 pt-5">
              <img src="src\assets\img\StampPic.png">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
        
          <ul class="navbar justify-content-center justify-content-end">
            <ul>
              <a href="https://www.facebook.com/kaleena.shreeve"><img width="25"
                  src="src\assets\img\f_logo_RGB-Black_144.png"></a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/kaleenashreeve1/"><img width="25"
                  src="src\assets\img\Instagram_Glyph_Black.png"></a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/kaleenashreeve1/"><img width="25"
                  src="src\assets\img\PinterestLogo.png"></a>
            </ul>
          </ul>
        </div>
      </div>
      <div class="row">
      </div>
      <nav class="navbar navbar-expand-lg px-5">
        <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
          <div class="d-flex flex-column align-items-center">
          </div>
          <div class="">
            <img src="src\assets\img\Transparent Logo Cropped.png" class="rounded-pill w-50" alt="">
          </div>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto text-dark">
            <li>
              <router-link :to="{ name: 'About' }" class="btn text-success darken-30 selectable text-uppercase">
                About Me
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Books' }" class="btn text-success darken-30 selectable text-uppercase">
                Books
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Contact' }" class="btn text-success darken-30 selectable text-uppercase">
                Contact
              </router-link>
            </li>
        </ul>
        </div>
  
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  a:hover {
    text-decoration: none;
  }
  .nav-link {
    text-transform: uppercase;
  }
  .navbar-nav .router-link-exact-active {
    border-bottom: 2px solid var(--bs-success);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  li {
    font-family: cursive;
  }
  button {
    font-size: x-large;
  }
  .pinkBorder {
    border: solid 12px;
    border-color: rgb(250, 183, 224);
    border-radius: 12px;
  }
  .ThanksText {
    font-size: 300%;
  }
  #SweetBites {
    position: relative;
  }
  #Arrow {
    position: absolute;
    top: 10em;
    left: 6em;
    width: 21%;
    transform: scaleY(-1);
  }
  #SBText {
    font-size: 400%;
    font-family: 'Rochester', serif;
  }
  .keepInTouch {
    background-color: rgb(201 210 188);
    font-size:xx-large;
  }
  #NewsLetter {
    font-size: 300%;
    font-family: 'Volk', serif;
  }
  </style>