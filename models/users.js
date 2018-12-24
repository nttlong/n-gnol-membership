module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Username: type.STRING,
        HashPassword:type.STRING,
        Email:type.STRING
    })
}