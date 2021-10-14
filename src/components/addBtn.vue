<template>
  <div class="addBtnWrap">
    <router-link to="/addItem">
      <div class="addBtn shadow">
          <i class="fas fa-plus"></i>
      </div>
    </router-link>
    <!-- <ul class="subList">
      <li>
        <router-link to="/addItem">
          addItem
        </router-link>
      </li>
      <li>
        <router-link to="/addCategory">
          addCategory
        </router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.addBtnWrap{
    position: fixed;
    right: 5%; bottom: 5%;
    z-index: 999;
}
.addBtn{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #01579b;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    line-height: 75px;
}
.subList{
  position: absolute;
  left: 0; bottom: 50px;
  opacity: 0;
  transition: all .5s;
}
.addBtnWrap:hover .subList{
  bottom: 90px;
  opacity: 1;
}
.fa-plus{
    color: #fff;
    font-size: 1.5rem;
}
</style>