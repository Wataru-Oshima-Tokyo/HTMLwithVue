<template>
  <div id="app">
    <div class="container-fluid text-left">
      <h1>Lisa Yokojima</h1>
    </div>
    <navigation></navigation>
    <router-view/>
    <footer>
      <div class="cnotainer-fluid" style="margin: 10px 0px 0px 0px;">
        <div class="row" style="background-color: rgba(0, 0, 0, 0.2);">
          <div class="col-md-8 mx-auto pt-4" style="font-size: 18px;">
            <p>© 2021 Wataru Oshima. All rights reserved</p>
          </div>

          <!-- <div class="col-md-4" style="padding: 0px;">
            <div class="row justify-content-end" style="padding: 0px 40px 0px 0px;">
              <div class="col-2 _contentEnd">
                <a href="https://www.instagram.com/chibi_risa_/">
                  <img src="images/iconfinder_SocialMedia_Instagram-Outline_2959748.png" alt="Instagram icon" style="width: 100%; height: auto;">
                </a>
            </div>


          </div> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import navigation from './components/navigation'
export default {
  name: 'App',
  components: {
    navigation,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
