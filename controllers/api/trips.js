import Trip from '../../models/trip';

// Add an item to the list
export const addTrip = async (req, res) => {
  try{
      const newTrip = await Trip.create({
        name: request.body.name,
        days: request.body.days,
        createdAt: Date.now(),
        note: request.body.note
    })
    await newTrip.save();
    return response.status(200).json(newTrip);
  } catch (error) {
    return response.status(500).json(error.message);
  }
}

export const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({}).sort({ 'createdAt': -1})

    return response.status(200).json(trips);
  } catch (error) {
    return response.status(500).json(error.message); 
  }
}

export const toggleTripDone = async (req, res) => {
  try {
      const tripRef = await Trip.findById(req.params.id);

      const trip = await Trip.findOneAndUpdate(
          { _id: req.params.id },
          { done: !tripRef.done }
      )

      await trip.save();

      return response.status(200).json(trip);
  } catch (error) {
      return response.status(500).json(error.message);
  }
}

export const updateTodo = async (request, response) => {
  try {
      await Todo.findOneAndUpdate(
          { _id: request.params.id },
          { data: request.body.data }
      )

      const todo = await Todo.findById(request.params.id);

      return response.status(200).json(todo);
  } catch (error) {
      return response.status(500).json(error.message);
  }
}

export const deleteTrip = async (req, res) => {
  try {
      const trip = await Trip.findByIdAndDelete(request.params.id)

      return response.status(200).json(trip);
  } catch (error) {
      return response.status(500).json(error.message);
  }
}

  