/// <reference path="angularjs/angular.d.ts" />
/// <reference path="jquery/jquery.d.ts" />

angular.module('todoApp', [])
	.controller('TodoListController', function() {
		var todoList = this;
		todoList.todos = [
			{ text: 'learn angular', done: true },
			{ text: 'build an angular app', done: false }
		];
		todoList.addTodo = () => {
			todoList.todos.push({ text: todoList.todoText, done: false });
			todoList.todoText = '';
		}
		todoList.remaining = () => {
			var count = 0;
			angular.forEach(todoList.todos, (todo) => {
				count += todo.done ? 0 : 1;
			});
			return count;
		}

		todoList.archive = () => {
			var oldTodos = todoList.todos;
			todoList.todos = [];
			angular.forEach(oldTodos, (todo) => {
				if (!todo.done) todoList.todos.push(todo);
			});
		}
	});