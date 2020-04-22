import { UserBoard, User, Role, Board } from '../models/index';

const UserBoardController = {}

UserBoardController.findByUser = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })
    console.log(user);
    const boards = await UserBoard.findAll({
        where:{
            UserId: user.id
        },
        include:[
            {model: Role, require: true},
            {model: Board, require: true}
        ]
    });

    res.status(200).json(boards);
}

export default UserBoardController;