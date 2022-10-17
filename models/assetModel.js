module.exports = (sequelize, DataTypes) => {
    const Asset = sequelize.define('asset', {
        
        asset_url: {
            type: DataTypes.STRING,
            allowNull: false
        },

        asset_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asset_size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asset_type: {
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
    return Asset
}