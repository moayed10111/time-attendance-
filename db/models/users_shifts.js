const { Model } = require("objection");



class Users_shifts extends Model {
    static get tableName() {
        return "users_shifts"
    }

    static get jsonSchema() {
        return {
            type: "object",
            properties: {
                id: { type: 'integer', readOnly:true },
                user_id: {type:"integer"},
                shift_id:{type:"integer"}
            }
        }
    }
    static get relationMappings() { 
        const Users  = require('./users')
        const Shifts = require('./shifts')
        return{
        users: {
            relation: Model.BelongsToOneRelation,
            modelClass: Users,
            join: {
                from: 'user_shifts.user_id',
                to: "users.id"
            }
        },
    
        shifts: {
            relation:Model.BelongsToOneRelation,
            modelClass: Shifts,
            join: {
                from:'user_shifts.shift_id',
                to:'shifts.id'
            }
        }
    
}}

}
module.exports= Users_shifts;