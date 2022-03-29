const { Model } = require("objection");



class Attendace_type extends Model {
    static get tableName() {
        return "attendance_type"
    }

    static get jsonSchema() {
        return {
            type: "object",
            properties: {
                id: { type: 'integer', readOnly:true },
                type: {type:"string"}
            }
        }
    }
    
}
module.exports= Attendace_type;