import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    todos = [
        {
            id: 1,
            title: 'todos app',
            description: 'Create NestJS todos app'
        },
        {
            id: 2,
            title: 'bread',
            description: 'Buy some breads',
        },
    ]
    findAll(): any[]{
        return this.todos;
    }
}
