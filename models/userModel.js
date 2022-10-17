module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wallet_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        avatar_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        
    } ,{
        //createdAt and updatedAt gets created automatically so changing name of those columns
        freezeTableName: true,            
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    )
    return User
}