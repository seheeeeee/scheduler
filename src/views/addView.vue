<template>
  <div class="addWrap">
    <div class="box">
      <ul>
        <li>
          <label for="todoItem" class="star">제목</label>
          <input type="text" v-model="contents.todoItem" id="todoItem" autocomplete="off"
          placeholder="무엇을 해야하나요?" required>
        </li>
        <li>
          <label for="category" class="star">분류</label>
          <input type="text" v-model="contents.category" id="category" autocomplete="off"
          placeholder="예)일상, 건강, 취업 etc." required>
        </li>
        <li>
          <label for="deadline" class="star">마감</label>
          <input type="date" v-model="contents.deadline" id="deadline" autocomplete="off" required>
        </li>
        <li>
          <label for="detail">내용</label>
          <textarea v-model="contents.detail" id="detail"
          placeholder="자세한 내용을 입력하세요."></textarea>
        </li>
      </ul>
      <button class="addBtn" @click="addTodo">ADD</button>
      <button class="clearBtn" @click="clearInput">CANCLE</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      contents: {
        todoItem : '',
        category : '',
        deadline : '',
        detail : ''
      }
    }
  },
  methods: {
    addTodo(){
      if(this.contents.todoItem !== ''){
        var obj = {completed: false, item: this.contents};
        sessionStorage.setItem(this.contents.todoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput(){
      this.contents = '';
      history.go(-1);
    }
  }
}
</script>

<style scoped>
.addWrap{
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
}
.box{
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%,-50%);
  width: 500px;
  text-align: center;
}
.box ul{
  text-align: left;
}
.box li{
  margin-top: 30px;
  position: relative;
}
.box li:first-child{
  margin-top: 0;
}
.box li:last-child{
  
}
.box li label{
  position: absolute; 
  left: 0; top: 10px;
  display: inline-block;
  margin-right: 10px;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: .3rem;
  color: #102646;
}
.box li input{
  margin-left: 65px;
  padding: 10px 20px;
  width: 80%;
  height: 45px;
  border: none;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 0.9rem;
}
.box li input:focus,
.box li textarea:focus{
  outline: none;
  background-color: #01589bc5;
  color: #fff;
}
.box li input::placeholder{
  font-size: 0.9rem;
}
.box li input:focus::placeholder,
.box li textarea:focus::placeholder{
  color: #fff;
}
.box li textarea{
  display: inline-block;
  width: 80%;
  height: 350px;
  margin-left: 65px;
  padding: 20px 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
}
.box li textarea::placeholder{
  font-size: 0.9rem;
  font-family: 'Nanum Gothic', sans-serif;
}

.star::before{
  content: '*';
  color: #ec5151;
  position: absolute; left: -18px;
}
button{
  margin: 30px 10px 0 0;
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
}
.box button:last-child{
  margin-right: 0;
}
.addBtn{
  background-color: #01579b;
  color: #fff;
}
.clearBtn{
  background-color: #ec5151;
  color: #fff;
}
</style>