import { model, Schema } from "mongoose";

const EventSchema = new Schema({
    eventTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    hostUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    location: {
        type: String,
        required: false, // TODO: change eventually
    },
    startTime: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    durationMinutes: {
        type: Number,
        required: true,
    },
    transportInfo: {
        type: String,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
    },
    registeredUsers: [
        { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
});

const Event = model("Event", EventSchema);
export default Event;
