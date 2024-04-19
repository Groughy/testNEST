import {Injectable, NotFoundException} from '@nestjs/common';
import {Todo} from "./interfaces/todo.interface";
import {CreateTodoDto} from "./dto/create-todo.dto";

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: 'todos app',
            description: 'Create NestJS todos app',
            done: false,
        },
        {
            id: 2,
            title: 'bread',
            description: 'Buy some breads',
            done: true,
        },
        {
            id: 3,
            title: 'wine',
            description: 'buy wine',
            done: false,
        }
    ]

    findOne(id: string) {
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo as Todo];
    }

    update(id: string, todo: Todo) {
        const todoToUpdate = this.todos.find(todo => todo.id === +id);
        if (!todoToUpdate) {
            return new NotFoundException('No todos found');
        }
        if (todo.hasOwnProperty('done')) {
            todoToUpdate.done = todo.done
        }
        if(todo.title){
            todoToUpdate.title = todo.title
        }
        if(todo.description){
            todoToUpdate.description = todo.description
        }
        const updatedTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate)
        this.todos = [...updatedTodos];
        return {updatedTodo: 1, todo: updatedTodos};
    }
}
