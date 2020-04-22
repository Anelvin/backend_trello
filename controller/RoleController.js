import { Role } from '../models/index';

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
        Role.create({
            description: req.body.description
        }).then(role => {
            res.status(201).json(role)
        })
}

export default RoleController;