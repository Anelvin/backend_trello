import { Background } from '../models/index';

const BackgroundController = {}

BackgroundController.create = async (req, res, next) => {
    await Background.create({
        description: req.body.description
    });

    res.status(200).json({
        message: "Background created"
    })
}

BackgroundController.findAll = async (req, res, next) => {
    const backgrounds = await Background.findAll();
    
    return res.status(200).json(backgrounds);
}

BackgroundController.findById = async (req, res, next) => {
    const background = await Background.findOne({
        where: {
            id: req.body.id
        }
    });

    res.status(200).json(background);
}

export default BackgroundController;