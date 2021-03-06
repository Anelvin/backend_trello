import { Task, TaskList } from '../models/index';
import { Op } from 'sequelize';

const TaskController = {}

TaskController.create = async (req, res, next) => {
    const max = await Task.max('index', {
        where: {
            TaskListId: req.body.tasklist
        }
    })

    const task = await Task.create({
        name: req.body.name,
        TaskListId: req.body.tasklist,
        index: max + 1
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

TaskController.findById = async (req, res, next) => {
    const task = await Task.findOne({
        where: {
            id: req.body.id
        }
    });

    res.status(200).json(task);
}

TaskController.changeoflist = async (req, res, next) => {
    if(req.body.originId != req.body.destId){

        await Task.update({
            TaskListId: req.body.destId,
            index: null
        },{
            where: {
                index: req.body.originIndex,
                TaskListId: req.body.originId
            }
        });

        const total = await Task.findAll({
            where: {
                taskListId: req.body.destId,
                index: {
                    [Op.gte]: req.body.destIndex
                }
            }
        });

        await total.sort(function (a, b) {
            if (a.index > b.index) {
              return 1;
            }
            if (a.index < b.index) {
              return -1;
            }
            return 0;
        });
    
        for(let i = 0; i < total.length; i++){
            let taskPosition = total[total.length - 1 - i];
            let oldTask = await Task.update({
                index: taskPosition.index + 1
            },{
                where:{
                    index: taskPosition.index
                }
            })
        }

        await Task.update({
            index: req.body.destIndex
        },{
            where: {
                index: null,
            }
        })
        
        const total1 = await Task.findAll({
            where: {
                taskListId: req.body.originId,
                index: {
                    [Op.gte]: req.body.originIndex
                }
            }
        });

        await total1.sort(function (a, b) {
            if (a.index > b.index) {
                return 1;
            }
            if (a.index < b.index) {
                return -1;
            }
            return 0;
        });
    
        for(let i = 0; i < total1.length; i++){
            let taskPosition = total1[i];
            let oldTask = await Task.update({
                index: taskPosition.index - 1
            },{
                where:{
                    index: taskPosition.index,
                    TaskListId: taskPosition.TaskListId
                }
            })
        }
    
        const taskLists = await TaskList.findAll({
            where:{
                BoardId: req.body.board
            },
            include:[
                {model:Task, require:true}
            ]
        })
    
            return res.status(200).send(taskLists);
    }else{
        if(req.body.originIndex > req.body.destIndex){

            await Task.update({
                TaskListId: req.body.destId,
                index: null
            },{
                where: {
                    index: req.body.originIndex,
                    TaskListId: req.body.originId
                }
            });

            const total = await Task.findAll({
                where: {
                    taskListId: req.body.destId,
                    index:{
                        [Op.and]:[
                            {[Op.gte]: req.body.destIndex},
                            {[Op.lte]: req.body.originIndex},
                            {[Op.ne]: req.body.originIndex},
                            {[Op.ne]: null}
                        ]
                    } 
                }
            });

            await total.sort(function (a, b) {
                if (a.index > b.index) {
                  return 1;
                }
                if (a.index < b.index) {
                  return -1;
                }
                return 0;
              })

            for(let i = 0; i < total.length; i++){
                let taskPosition = total[total.length - 1 - i];
                let oldTask = await Task.update({
                    index: taskPosition.index + 1
                },{
                    where:{
                        index: taskPosition.index
                    }
                });
            }

            await Task.update({
                index: req.body.destIndex
            },{
                where: {
                    index: null,
                }
            });

            const taskLists = await TaskList.findAll({
                where:{
                    BoardId: req.body.board
                },
                include:[
                    {model:Task, require:true}
                ]
            });
            
            return res.status(200).send(taskLists);
        }

        if(req.body.originIndex < req.body.destIndex){
            await Task.update({
                TaskListId: req.body.destId,
                index: null
            },{
                where: {
                    index: req.body.originIndex,
                    TaskListId: req.body.originId
                }
            });

            const total = await Task.findAll({
                where: {
                    taskListId: req.body.destId,
                    index:{
                        [Op.and]:[
                            {[Op.lte]: req.body.destIndex},
                            {[Op.gte]: req.body.originIndex},
                            {[Op.ne]: req.body.originIndex},
                            {[Op.ne]: null}
                        ]
                    } 
                }
            });

            await total.sort(function (a, b) {
                if (a.index > b.index) {
                  return 1;
                }
                if (a.index < b.index) {
                  return -1;
                }
                return 0;
            });
            
            for(let i = 0; i < total.length; i++){
                let taskPosition = total[i];
                await Task.update({
                    index: taskPosition.index - 1
                },{
                    where:{
                        index: taskPosition.index
                    }
                });
            }

            await Task.update({
                index: req.body.destIndex
            },{
                where: {
                    index: null,
                }
            });

            const taskLists = await TaskList.findAll({
                where:{
                    BoardId: req.body.board
                },
                include:[
                    {model:Task, require:true}
                ]
            });
            
            return res.status(200).send(taskLists);
        }
    }
}

export default TaskController;