<template>
  <div class="ToDoList">
    <h1>Hello {{ userName }} - Here is a list of your To - Do items</h1>
  <p>
    <ul>
      <li v-for="item in toDoItems">{{item.description}}</li>
    </ul>
  </p>
      <label>Enter a new todo item : </label>
      <input type="text" name="newItem" v-on:keyup.enter="onHit">
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  newItem: '',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: 'VAP',
      toDoItems: [
        { id: 1, description: 'Learn Vue.js' },
        { id: 2, description: 'Securing a web app using passport' },
        { id: 3, description: 'Store data in MongoDB' },
      ],
      item: this.newItem,
    };
  },
  methods: {
    onHit(e) {
      this.toDoItems.push({ id: 4, description: e.target.value });
      e.target.value = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}
</style>
