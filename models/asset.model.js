module.exports = (sequelize, Sequelize) => {
    const Asset = sequelize.define('asset', {
        title: {
            type: Sequelize.STRING
        },
        asset_number: {
            type: Sequelize.INTEGER
        },
        date_in_service: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        tax_cost: {
            type: Sequelize.INTEGER
        },
        model_number: {
            type: Sequelize.STRING
        },
        serial_number: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        }
    });

    return Asset;
}