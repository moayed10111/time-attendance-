const { Model } = require("objection");



class Roles extends Model {
    static get tableName() {
        return "roles"
    }

    static get jsonSchema() {
        return {
            type: "object",
            properties: {
                id: { type: 'integer', readOnly:true },
                role_name: {type:"string"}
            }
        }
    }
}
module.exports= Roles;