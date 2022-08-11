import { model, models, Schema } from 'mongoose'

const betSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Bet = models.Bet || model('Bet', betSchema)

export default Bet