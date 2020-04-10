module.exports = (sequelize, type) => {
    const User = sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        password: type.STRING
    },{
        timestamps: true
    });
    User.associate = (models) => {
        User.hasMany(models.role_user, {onDelete: 'cascade'})
    }
    return User;
}