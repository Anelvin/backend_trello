import { TaskList, Board } from '../models/index';

const TaskListController = {}

TaskListController.create = async (req, res, next) => {
    const taskList = await TaskList.create({
        name: req.body.name,
        description: req.body.description,
        BoardId: req.body.board
    });

    const taskLists = await TaskList.findAll({
        where: {
            BoardId: req.body.board
        }
    });

    res.status(201).json({
        message: 'TaskList Created',
        taskList
    });
}

TaskListController.findByBoard = async (req, res, next) => {
    const taskLists = await TaskList.findAll({
        where: {
            BoardId: req.body.board
        }
    });

    res.status(200).json(taskLists);
}

export default TaskListController;