import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {Todo} from "./interfaces/todo.interface";
import {CreateTodoDto} from "./dto/create-todo.dto";

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.todosService.findOne(id);
    }
    @Get()
    findAll(): Todo[]{
        return this.todosService.findAll();
    }
    @Post()
    createToto(@Body() newTodo: CreateTodoDto){
        this.todosService.create(newTodo);
    }
    @Patch(':id')
    updateTodo(@Param('id')id: string, @Body() todo: CreateTodoDto){
return this.todosService.update(id, todo);
    }
}
