import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [{
        name: "Pay Bill",
        priority: "High",
        isComplete: false
      }]
    },
    methods: {
  saveNewTodo: function() {
    this.items.push({
    name: this.newTodo,
    isComplete: false,
    priority: this.newPriority
    });
    this.newTodo = "";
  },
  // buyItem: function(index) {
  //   this.items[index].isPurchased = !this.items[index].isPurchased;
  // },
  deleteAll: function() {
    this.items = [];
  }
}
  });
});
