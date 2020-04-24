import { Task, TaskList } from '../models/index';

const TaskController = {}

TaskController.create = async (req, res, next) => {
    const task = await Task.create({
        description: req.body.description,
        TaskListId: req.body.tasklist
    });

    const taskList = await TaskList.findAll({
        where:{
            BoardId: req.body.board
        },
        include:[
            {model:Task, require:true}
        ]
    })

    res.status(201).json(taskList);
}

export default TaskController;