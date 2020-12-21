import { Injectable } from '@nestjs/common';
import TaskEntity from 'db/task.entity';
import CreateTaskDto from './dto/create-task.dto';

@Injectable()
export default class TodoService {
    //add Task
    async addTask(taskInfo: CreateTaskDto): Promise<TaskEntity> {
        const taskEntity: TaskEntity = TaskEntity.create();
        const name = taskInfo.name;
        taskEntity.name = name;
        await TaskEntity.save(taskEntity);
        return taskEntity;
    }
}
