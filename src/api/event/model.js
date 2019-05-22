import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  localization: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hour: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export default mongoose.model('Event', eventSchema)
