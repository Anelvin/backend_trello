module.exports = (sequelize, type) => {
    const RoleUser = sequelize.define('role_user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: type.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        role_id: {
            type: type.INTEGER,
            references: {
                model: 'roles',
                key: 'id'
            }
        },
        board_id: {
            type: type.INTEGER,
            references: {
                model: 'boards',
                key: 'id'
            }
        }
    },{
        timestamps: true
    });
    return RoleUser;
}