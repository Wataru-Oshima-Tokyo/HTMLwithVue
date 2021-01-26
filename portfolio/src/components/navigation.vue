<template>
<div id="_navbar">
  <div>
    <b-nav pills style="padding: 10px;">
      <b-nav-item >
        <router-link class="text-white px-3" to="/">
          <b-img :src="require('../assets/home_icon.jpg')" fluid rounded style="width: 100px; height: 100px;" alt="Responsive image"></b-img>
        </router-link>
      </b-nav-item>
      <b-nav-item-dropdown class="centering" id="my-nav-dropdown" text="Link" toggle-class="nav-link-custom">
        <b-dropdown-item>
          <!-- cannot jump to the link, need to fix -->
          <a href="https://www.instagram.com/chibi_risa_/">Instagram</a>
        </b-dropdown-item>
        <b-dropdown-item>
          <a href="#">Twitter(not yet linked)</a>
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown class="centering" id="my-nav-dropdown" text="Sitemap" toggle-class="nav-link-custom">
        <b-dropdown-item>
          <router-link class="text-black px-3" to="/portfolio">portfolio</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link class="text-black px-3" to="/makeupVideos">Make-up Videos</router-link>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>
          <router-link class="text-black px-3" to="/contact">Contact</router-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      msg: 'This is a Navigation var'
    }

  }
}
</script>

<style>
#_navbar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(25, 77, 76);
  margin: 10px;
  background-color: rgba(215, 243, 247, 0.44);
}
.centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
