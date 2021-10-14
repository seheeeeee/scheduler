<template>
  <div class="modal">
      <ul class="shadow">
          <li class="closeBtn" @click="closeModal" ><i class="fas fa-times"></i></li>
          <li>
              <span>제목</span>
              <span>{{showItem[0].todoItem}}</span>
          </li>
          <li>
              <span>분류</span>
              <span>{{showItem[0].category}}</span>
          </li>
          <li>
              <span>마감</span>
              <span>{{showItem[0].deadline}}</span>
          </li>
          <li>
              <span>내용</span>
              <span>{{showItem[0].detail}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['showIndex'],
    data(){
        return{
            todoItems: [],
            showItem: [],
            dupliItems: [],
        }
    },
    computed: {
        category(){
            return this.$route.params.category
        }
    },
    watch: {
        showIndex: function(){
            this.sliceItem(this.dupliItems,"item", this.showIndex)
        },
    },
    methods: {
        sliceItem(input, field, index){
                this.showItem = []; 
                this.showItem.push(input[index].[field]);
                return this.showItem;
        },
        closeModal(){
            let modal = document.querySelector('.modal');
            modal.classList.remove('hidden');
            this.$emit('closeModal');
        },
        duplicateTodoItems(){
            let category = this.category
            for(var i = 0; i < this.todoItems.length; i++){
                if(this.todoItems[i].['item'].['category'].indexOf(category) !== -1){
                    this.dupliItems.push(this.todoItems[i]);
                }
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
        this.duplicateTodoItems();
    },
    mounted(){
        this.sliceItem(this.dupliItems,"item", this.showIndex);
    },
}
</script>

<style scoped>
.modal{
  display: none;
  position: fixed;
  left: 0; top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #01589b94;
}
.modal ul{
    position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    border-radius: 25px;
    background: #fff;
}
.modal ul li{
    margin-bottom: 10px;
}
.modal ul li:last-child{
    margin-bottom: 0px;
}
.closeBtn{
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    background: #e03f34;
    position: absolute;
    right: 0; top: 0;
    transform: translate(30%, -50%);
    text-align: center;
    color: #fff;
    cursor: pointer;
}
</style>