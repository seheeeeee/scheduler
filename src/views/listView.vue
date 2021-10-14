<template>
  <div class="listWrap">
      <ul>
          <li class="shadow" v-for="(dupliItem, index) in dupliItems" :key="dupliItem.item.todoItem">
            <i class="fas fa-check checkBtn" @click="toggleComplete(dupliItem)" :class="{checkBtnCompleted: dupliItem.completed}"></i>
            <span class="text" @click="openModal(index)" :class="{textCompleted: dupliItem.completed}">{{dupliItem.item.todoItem}}</span>
            <span @click="removeTodo(dupliItem, index)">
                <i class="fas fa-trash-alt"></i>
            </span>
          </li>
      </ul>
      <modal-todo v-on:closeModal="closeModal" :class="{hidden: this.showModal}" :showIndex="showIndex"></modal-todo>
  </div>
</template>

<script>
import ModalTodo from '../components/modalTodo.vue';

export default {
    components: {
        ModalTodo,
    },
    data(){
        return{
            todoItems: [],
            showModal: false,
            showIndex: '',
            dupliItems:[],
        }
    },
    computed:{
        category(){
            return this.$route.params.category
        }
    },
    methods: {
        removeTodo(dupliItem, index){
            // var keyIndex = sessionStorage.key(index);
            // const keyItem = sessionStorage.getItem(dupliItem);
            sessionStorage.removeItem(dupliItem); 
            this.dupliItems.splice(index, 1);
        },
        toggleComplete(todoItem){
            todoItem.completed = !todoItem.completed;
            sessionStorage.removeItem(todoItem.item.todoItem);
            sessionStorage.setItem(todoItem.item.todoItem, JSON.stringify(todoItem));
        },
        openModal(index){
            this.showModal = !this.showModal;
            this.showIndex = index;
        },
        closeModal(){
            this.showModal = false;
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
    }
}
</script>

<style scoped>
.listWrap{
    position: relative;
    width: 100%;
    height: 100vh;
    text-align: center;
    font-size: 1.1rem;
}
ul{
    position: absolute;
    left: 50%; top: 250px;
    transform: translate(-50%, 0);
    width: 100%;
    text-align: center;
}
li{
    width: 40%;
    padding: 20px 30px;
    margin: 15px auto;
    background-color: #fff;
    border-radius: 10px;
}
ul li:first-child{
    margin-top: 0;
}
ul li > *{
    cursor: pointer;
}
.text{
    padding: 0 45px 0 20px;
    font-size: 1.1rem;
}
.textCompleted{
    color: #ddd;
    text-decoration: line-through;
}
.checkBtn{
    color: #62acde;
}
.checkBtnCompleted{
    color: #ddd;
}
.fa-trash-alt{
    color: #e03f34;
}
.hidden{
    display: block;
}
</style>