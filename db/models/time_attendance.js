const { Model } = require("objection");





class Time_attendance extends Model {
    static get tableName() {
        return "time_attendance"
    }

    static get jsonSchema() {
        return {
            type: "object",
            properties: {
                id: { type: 'integer', readOnly: true },
                user_id: { type: "string" },
                shift_id: { type: "integer" },
                branch_id: { type: "integer" },
                attendance_type_id: { type: "integer" }

            }
        }
    };


    static get relationMappings() {
        const Attendace_type = require("./attendance_type");
        const Branches = require("./branches");
        const Shifts = require("./shifts");
        const { Users } = require("./users");
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'time_attendance.user_id',
                    to: 'users.id'
                }
            },
            shifts: {
                relation: Model.BelongsToOneRelation,
                modelClass: Shifts,
                join: {
                    from: 'time_attendance.shift_id',
                    to: 'shifts.id'
                }
            },
            branches: {
                relation: Model.BelongsToOneRelation,
                modelClass: Branches,
                join: {
                    from: 'time_attendance.branch_id',
                    to: 'branches.id'
                }
            },
            attendance_type: {
                relation: Model.BelongsToOneRelation,
                modelClass: Attendace_type,
                join: {
                    from: 'time_attendance.attendance_type_id',
                    to: 'attendance_type.id'
                }
            }
        }

    }
}
module.exports = Time_attendance;