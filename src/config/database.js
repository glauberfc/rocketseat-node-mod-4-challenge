import mongoose from 'mongoose'

export default function databaseConfig() {
  try {
    mongoose.connect('mongodb://localhost:27017/challenge-3', {
      useCreateIndex: true,
      useNewUrlParser: true,
    })
  } catch (error) {
    console.log(error)
  }
}
