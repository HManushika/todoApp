<template>

  <div class="container col-sm-8 col-sm-offset-2">
  <div id ="app">
    <h2>My To Do Task List</h2>
    <div class="panel panel-default">
      <label>Add Task : </label>
      <input type="text" v-model="name">
      <button @click="submitTodo()" class="btn btn-info btn-group-lg">Add</button>
    </div>

<table class="table">
  <thead>
  <th>Mark As Done</th>
  <th>To Do Task</th>
  <th>Start</th>
  <th>Delete</th>
  </thead>
  <tbody>
  <tr v-for="todo of todos" v-bind:key="todo['.key']" >
    <td><input type="checkbox" :disabled="todo.done"@click="doneTask(todo['.key'])" > </td>
    <td><span :class="{taskdone : todo.done, inProgress : todo. startProgress}">{{todo.name}}</span></td>
    <td><button class="btn btn-warning" @click="startProgress(todo['.key'])" :disabled="todo.done || todo.startProgress" >Start</button></td>
    <td><button class="btn btn-danger" @click="removeTodo(todo['.key'])">Delete</button></td>
  </tr>
  </tbody>
</table>
  </div>
  </div>

</template>

<script>
  import { todoRef } from './firebase';
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }

  },
  firebase :{
     todos:todoRef
  },
  methods :{
    submitTodo(){
      todoRef.push({ name : this.name, edit : false, done : false , startProgress:false});
      this.name='';
    },
    removeTodo(key){
      todoRef.child(key).remove();
    },
    startProgress(key){
      todoRef.child(key).update({edit:true, startProgress:true});
    },
    doneTask(key){
      todoRef.child(key).update({edit:true, done:true, startProgress:false });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .taskdone{
    text-decoration: line-through;
    text-decoration-color: red;
    color: red;

  }
  .inProgress{
    color: green;
  }

</style>
