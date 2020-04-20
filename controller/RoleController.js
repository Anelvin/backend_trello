import { Role } from '../database/sequelize';

const RoleController = {}

RoleController.getRoles = async (req, res, next) => {
    const roles = await Role.findAll();
    return res.status(200).json(roles);
}

RoleController.getRole = async (req, res, next) => {
    const role = await Role.findOne({
        where:{
            id: req.params.id
        }
    });

    res.status(200).json(role)
}

RoleController.create = async (req, res, next) => {
    const newRole = await Role.create({
        description: req.body.description
    });

    res.status(201).json({
        message:'Role created'
    });
}

export default RoleController;