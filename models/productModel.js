module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product",{
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published:{
            typo: DataTypes.BOOlEAN
        }
    })
    return Product;
}