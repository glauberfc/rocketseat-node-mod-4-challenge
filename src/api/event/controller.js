import Event from './model'

export async function create(req, res) {
  const { title, localization, date, hour, userData } = req.body

  try {
    const event = Event.create({
      name,
      localization,
      date,
      hour,
      user: userData.id,
    })

    return res.status(201).json({
      message: 'Event created with success',
      event,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export async function readAll(req, res) {
  const { userData } = req.body

  try {
    const event = Event.find().where({ user: userData.id })

    return res.status(200).json({
      event,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export async function readOne(req, res) {
  const { id, userData } = req.body

  try {
    const event = Event.findById(id).where({ user: userData.id })

    return res.status(201).json({
      event,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export async function update(req, res) {
  const { id, userData } = req.body

  try {
    const event = Event.findByIdAndUpdate({ id }, req.body, {
      new: true,
    }).where({ user: userData.id })

    return res.status(201).json({
      message: 'Event updated with success',
      event,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export async function remove(req, res) {
  const { id, userData } = req.body

  try {
    await Event.findByIdAndDelete({ id }).where({ user: userData.id })

    return res.status(200).json({
      message: 'Event deleted with success',
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
