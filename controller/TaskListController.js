import { TaskList, Board, Task } from '../models/index';

const TaskListController = {}

TaskListController.create = async (req, res, next) => {
    console.log('Hola');
    const taskList = await TaskList.create({
        description: req.body.description,
        BoardId: req.body.board
    });

    const taskLists = await TaskList.findAll({
        where: {
            BoardId: req.body.board
        },
        include:[
            {model: Task, require: true}
        ]
    });

    res.status(201).json(taskLists);
}

TaskListController.findByBoard = async (req, res, next) => {
    const taskLists = await TaskList.findAll({
        where: {
            BoardId: req.body.board
        },
        include:[
            {model: Task, require: true}
        ]
    });

    res.status(200).json(taskLists);
}

export default TaskListController;