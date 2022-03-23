const { Model } = require("objection");



class Shifts extends Model {
    static get tableName() {
        return "shifts"
    }

    static get jsonSchema() {
        return {
            type: "object",
            properties: {
                id: { type: 'integer', readOnly:true },
                start_shift: {type:"string"},
                end_shift: {type:"string"}
            }
        }
    }
}
module.exports= Shifts;