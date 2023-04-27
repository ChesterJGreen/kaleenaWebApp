<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <div class="col-4 text-center mt-5">
        <div class="row">
          <div class="col-12 mt-5">
            <span class="cardo large-font">Hi! I'm &nbsp;&nbsp;</span><span>Kaleena</span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-12">
            <span class="cardo large-font">Author</span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-12">
            <span class="cardo large-font">Lover of Romance</span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-12">
            <span class="cardo large-font">Seeker of Happines</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="cardo small-font"><a href="http://www.kaleenashreeve.com">GET TO KNOW ME</a></span>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <img src="src\assets\img\KaleenaPortrait.jpg" alt="" width="500">
      </div>
      <div class="col-4 mt-5 text-center">
        <div class="row">
          <div class="col-12 mt-5">
            <span>If you like</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span>enchanting stories,</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span>you are in the right</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span>place.</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
<style>
.cardo {
  font-family: 'Cardo', serif;
}
.large-font {
  font-size: 250%;
}
.small-font {
  font-size: 125%;;
}
</style>