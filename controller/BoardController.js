
import { Board, User, Role, UserBoard } from '../models/index';

const BoardController = {}

BoardController.getBoards = async (req, res, next) => {
    const boards = await Board.findAll();
    return res.status(200).json(boards);
}

BoardController.getBoard = async (req, res, next) => {
    const board = await Board.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(board)
}

BoardController.getUserBoards = async (req, res, next) => {
    const boards = await UserBoard.findAll({
        include: [
            {model: User, require: true},
            {model: Role, require: true}
        ]
    });

    return res.status(200).json(boards);
}

BoardController.create = async (req, res, next) => {
    const newBoard = await Board.create({
        name: req.body.name
    });

    const user = await User.findOne({
        where:{
            email: req.body.email
        }
    });

    const userBoard = await UserBoard.create({
        UserId: user.id,
        RoleId: 1,
        BoardId: newBoard.id
    });

    const boards = await UserBoard.findAll({
        where: {
            UserId: user.id
        }
    })

    res.status(200).json({
        'message': 'Board created',
        boards
    });
}

export default BoardController;