import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [{
        name: "Pay Bill",
        priority: "High"
      }],
      newPriority: ""
    },
    methods: {
  saveNewTodo: function() {
    this.items.push({
    name: this.newTodo,
    priority: this.newPriority
    });
    this.newTodo = "";
  },
  deleteAll: function() {
    this.items = [];
  }
}
  });
});
