<template>
  <div id="app">
    <main-logo></main-logo>
    <add-btn></add-btn>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>
              
<script>
import MainLogo from './components/mainLogo.vue'
import AddBtn from './components/addBtn.vue'

export default {
  name: 'App',
  components: {
    MainLogo,
    AddBtn,
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Nanum Gothic', sans-serif;
}
#app{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: rgb(242, 246, 250);
}
ul{
  margin: 0;
  padding: 0;
}
ul, li{
  list-style: none;
}
.shadow{
  box-shadow: 1px 1px 4px rgba(114, 111, 111, 0.322);
}
a{
  text-decoration: none;
  color: #000;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
