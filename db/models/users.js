const { Model } = require('objection');


class Users extends Model {
    static get tableName() {
        return "users"
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer', readOnly: true },
                full_name: { type: 'string' },
            }
        }
    }
};

module.exports = Users;