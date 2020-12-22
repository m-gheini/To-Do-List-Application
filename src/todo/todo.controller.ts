import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import CreateTaskDto from './dto/create-task.dto';
import CreateCategoryDto from './dto/create-category.dto';
import TodoService from './todo.service';
import CreateTagDto from './dto/create-tag-dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    //Add Task
    @Post('post/task')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    postTask( @Body() task: CreateTaskDto) {
        return this.todoService.addTask(task);
    }

    //Get All Tasks
    @Get('/tasks')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    getAllTasks() {
        return this.todoService.getAllTasks();
    }

    //Add Category
    @Post('post/category')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    postCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.addCategory(category);
    }

    //Get All Categories
    @Get('/categories')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    getAllCategories() {
        return this.todoService.getAllCategories();
    }

    @Post('post/tag')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    postTag( @Body() tag: CreateTagDto) {
        return this.todoService.addTag(tag);
    }

    //Get All Tags
    @Get('/tags')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    getAllTags() {
        return this.todoService.getAllTags();
    }
}
