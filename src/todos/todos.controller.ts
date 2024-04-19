import {Body, Controller, Get, Post} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {Todo} from "./interfaces/todo.interface";

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}
    @Get()
    findAll(): Todo[]{
        return this.todosService.findAll();
    }
    @Post()
    createToto(@Body() newTodo){
        console.log('newTodo', newTodo);
        this.todosService.create(newTodo);
    }
}
