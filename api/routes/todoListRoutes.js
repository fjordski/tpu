module.exports = (app) => {
  const todoList = require('../controllers/todoListController.js');

  // todoList Routes
  app.route('/api/v1/users')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/api/v1/users/:userId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
