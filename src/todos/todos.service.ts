import { Injectable } from '@nestjs/common';
import {Todo} from "./interfaces/todo.interface";

@Injectable()
export class TodosService {
    todos:Todo[] = [
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
            id:3,
            title: 'wine',
            description: 'buy wine',
            done: false,
        }
    ]
    findOne(id:string){
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[]{
        return this.todos;
    }

    create(todo: Todo){
        this.todos = [...this.todos, todo];
    }
}
