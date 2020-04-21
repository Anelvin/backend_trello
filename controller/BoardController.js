import { Board, User, RoleUser } from '../database/sequelize';

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

BoardController.create = async (req, res, next) => {
    const newBoard = await Board.create({
        name: req.body.name
    });

    const user = await User.findOne({
        where:{
            name: req.body.email
        }
    });

    const roleUser = await RoleUser.create({
        user_id: user.id,
        role_id: 1,
        board_id: newBoard.id
    });

    res.status(200).json({
        'message': 'Board created'
    });
}

export default BoardController;