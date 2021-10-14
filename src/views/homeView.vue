<template>
  <div class="homeWrap">
    <none-item :class="{hidden: isNoneItem}"></none-item>
    <categories :class="{block: isNoneItem}"></categories>
  </div>
</template>

<script>
import categories from '../components/categories.vue'
import NoneItem from '../components/noneItem.vue'

export default {
 components:{
  categories,
  NoneItem,
 },
 data(){
   return {
     isNoneItem : false,
   }
 },
 created(){
   if(sessionStorage.length > 0){
     this.isNoneItem = true;
   }
 }
}
</script>

<style scoped>
.homeWrap{
  /* position: fixed; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hidden{
  display: none;
}
.block{
  display: block;
}
</style>