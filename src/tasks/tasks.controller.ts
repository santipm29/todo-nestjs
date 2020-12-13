import { TaskStatusPipe } from './pipes/task-status.pipe';
import { GetTasksFilterDTO } from './dto/get-task.dto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(
    @Query(ValidationPipe) filterDTO: GetTasksFilterDTO,
  ): Promise<Task[]> {
    return this.tasksService.getTasks(filterDTO);
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() body: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(body);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  @Put(':id/status')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusPipe) status: TaskStatus,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
