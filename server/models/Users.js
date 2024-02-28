import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    }

})

export default mongoose.model('Users', userSchema)