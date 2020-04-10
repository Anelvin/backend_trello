module.exports = (sequelize, type) => {
    const Role = sequelize.define('role', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING
    },{
        timestamps: true
    });
    Role.associate = (models) => {
        Role.hasMany(models.role_user, {onDelete: 'cascade'})
    }
    return Role;
}