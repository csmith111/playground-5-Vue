import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import ToDoList from '@/components/ToDoList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: ToDoList,
    },
  ],
});
