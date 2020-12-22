import { Injectable } from '@nestjs/common';
import TaskEntity from 'db/task.entity';
import CreateTaskDto from './dto/create-task.dto';
import createCategoryDto from './dto/create-category.dto';
import createTagDto from './dto/create-tag-dto';
import CategoryEntity from 'db/category.entity';
import TagEntity from 'db/tag.entity';
import createItemDto from './dto/create-item.dto';
import ItemEntity from 'db/item.entity';

@Injectable()
export default class TodoService {
    
    async addTask(taskInfo: CreateTaskDto): Promise<TaskEntity> {
        const {name, categoryID, tagIDs} = taskInfo;
        const taskEntity: TaskEntity = TaskEntity.create();
        taskEntity.name = name;
        taskEntity.category = await CategoryEntity.findOne(categoryID);
        taskEntity.tags = [];
        for (let i = 0; i < tagIDs.length; i++){
            const tag = await TagEntity.findOne(tagIDs[i]);
            taskEntity.tags.push(tag);
        }
        await TaskEntity.save(taskEntity);
        return taskEntity;
    }

    async getAllTasks(): Promise<TaskEntity[]> {
        return await TaskEntity.find();
    }

    // async getOneTask(taskID): Promise

    async deleteTask(taskID): Promise<String> {
        const task= await TaskEntity.findByIds(taskID);
        await TaskEntity.remove(task);
        return 'Done!'
    }

    async addCategory(categoryInfo: createCategoryDto): Promise<CategoryEntity> {
        const name = categoryInfo.name;
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        categoryEntity.name = name;     
        await CategoryEntity.save(categoryEntity);
        return categoryEntity;
    }

    async getAllCategories(): Promise<CategoryEntity[]> {
        return await CategoryEntity.find();
    }

    async addTag(tagInfo: createTagDto): Promise<TagEntity> {
        const name = tagInfo.name;
        const tagEntity: TagEntity = TagEntity.create();
        tagEntity.name = name;
        await TagEntity.save(tagEntity);
        return tagEntity;
    }

    async getAllTags(): Promise<TagEntity[]> {
        return await TagEntity.find();
    }

    async addItem(itemInfo: createItemDto): Promise<ItemEntity>{
        const {context, taskID} = itemInfo;
        const itemEntity: ItemEntity = ItemEntity.create();
        itemEntity.context = context;
        itemEntity.task = await TaskEntity.findOne(taskID);
        await ItemEntity.save(itemEntity);
        return itemEntity;
    }
}
