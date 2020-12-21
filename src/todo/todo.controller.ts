import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import CreateTaskDto from './dto/create-task.dto';
import TodoService from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    //Add Task
    @Post('post')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    postTask( @Body() task: CreateTaskDto) {
        return this.todoService.addTask(task);
    }
}
