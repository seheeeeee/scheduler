<template>
  <div class="logoWrap">
      <router-link to="/home">
      <div class="mainLogo">
        <span class="image"><img src="../img/logo_bk.png" alt="mainlogo"></span>
        <span class="name">What I have to do</span>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logoWrap{
    position: absolute; left: 30px; top: 30px;
    width: 100%;
    z-index: 1000;
}
.mainLogo{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 260px;
}
.mainLogo .image{
    flex: 3;
}
.mainLogo .image img{
    display: block;
    width: 100%;
}
.mainLogo .name{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 200;
}
</style>