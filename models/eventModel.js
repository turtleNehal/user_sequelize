module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('events', {
        
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_of_event: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_of_ticket: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        cost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING,
            foreignKey: 'user_id',
            allowNull: false
        },
        
        
    } ,{
        //createdAt and updatedAt gets created automatically so changing name of those columns
        freezeTableName: true,            
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    )
    return Event
}