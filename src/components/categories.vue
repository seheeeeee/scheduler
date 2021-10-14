<template>
  <div class="flexbox">
      <ul>
        <li v-for="category in categories" :key="category">
          <router-link :to="{name: 'list', params:{category}}" >
            <div class="box shadow">
             {{category}}
             </div>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todoItems: [],
      categories: [],
    }
  },
  methods:{
    addCategories(){
      for(var i = 0; i < this.todoItems.length; i++){
        this.categories.push(this.todoItems[i].item.category);
      }
      this.duplicateCategories();
    },
    duplicateCategories(){
      for(var i = 0; i < this.categories.length; i++){
        if(this.categories.indexOf(this.categories[i]) === this.categories.lastIndexOf(this.categories[i])){
          // console.log('good');
        }else{
          this.categories.splice(i, 1);
        }
      }
    }
    ,
    addColorClass(){
      let box = document.querySelectorAll('.box');
      for(var i = 0; i < box.length; i++){
        // if(i/2 !== 0){
        //   box[i].classList.add('even');
        // }else{
        //   box[i].classList.add('odd');
        // }
        i%2 != 0 ? box[i].classList.add('odd') : box[i].classList.add('even');
      }
    }
  },
  created(){
    if(sessionStorage.length > 0){
      for(var i = 0; i < sessionStorage.length; i++){
        if(sessionStorage.key(i) !== 'loglevel:webpack-dev-server'){
            this.todoItems.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
        }
      }
    }
    this.addCategories();
  },
  mounted(){
    this.addColorClass();
  }
}
</script>

<style scoped>
.flexbox{
  display: none;
  width: 1280px;
  margin: 0 auto;
}
.flexbox ul{
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.flexbox ul li{
  width: 350px;
  height: 350px;
  margin: 70px 35px 0;
}
a{
  display: block;
  width: 350px;
  height: 350px;
}
.box{
  width: 100%;
  height: 100%;
  line-height: 350px;
  text-align: center;
  border-radius: 35px;
  font-size: 1.8rem;
  font-weight: 700;
}
.even{
  background-color: #01579b;
  color: #fff;
}
.odd{
  background-color: #fff;
  color: #01579b;
}
</style>