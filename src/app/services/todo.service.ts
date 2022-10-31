import { Injectable } from "@angular/core";
import { Todo } from "../model/todo.model";

@Injectable({
    providedIn: "root"
})

export class TodoService {

    todos: Todo[] = [
        new Todo("Test 1"),
        new Todo("Test 2")
    ];

    getTodos(): Todo[] {
        return this.todos;
    }

    getTodo(id: string):Todo | undefined{
        return this.todos.find((todo: Todo) => todo.id === id)
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }

    updateTodo(id: string, updatedFields: Partial<Todo>){
        const todo:Todo = (<Todo>this.getTodo(id));
        Object.assign(todo, updatedFields);
    }

    deleteTodo(id: string) {
        const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
        this.todos.splice(todoIndex, 1);
    }

}