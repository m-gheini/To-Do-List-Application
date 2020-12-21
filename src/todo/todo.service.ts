import { Injectable } from '@nestjs/common';
import TaskEntity from 'db/task.entity';
import CreateTaskDto from './dto/create-task.dto';
import createCategoryDto from './dto/create-category.dto';
import CategoryEntity from 'db/category.entity';

@Injectable()
export default class TodoService {
    //add Task
    async addTask(taskInfo: CreateTaskDto): Promise<TaskEntity> {
        const {name, categoryID} = taskInfo;
        const taskEntity: TaskEntity = TaskEntity.create();
        taskEntity.name = name;
        taskEntity.category = await CategoryEntity.findOne(categoryID);
        await TaskEntity.save(taskEntity);
        return taskEntity;
    }

    async addCategory(categoryInfo: createCategoryDto): Promise<CategoryEntity> {
        const name = categoryInfo.name;
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        categoryEntity.name = name;     
        await CategoryEntity.save(categoryEntity);
        return categoryEntity;
    }
}
