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
                fullName: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                role_id: { type: "integer" }
            }
        }
    }
    static get relationMappings() {
        const Roles  = require('./roles')
        return{
        roles: {
            relation: Model.BelongsToOneRelation,
            modelClass: Roles,
            join: {
                from: 'users.role_id',
                to: 'roles.id'
            }
        }
    }}


};

module.exports = Users;