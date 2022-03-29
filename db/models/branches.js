const { Model } = require("objection");



class Branches extends Model {
    static get tableName() {
        return "branches"
    }

    static get jsonSchema() {
        return {
            type: "object",
            properties: {
                id: { type: 'integer', readOnly:true },
                branch_name: {type:"string"},
                branch_location: {type:"string"}
            }
        }
    }
} 
module.exports= Branches;