const Trip = require('../../models/trip');

module.exports = {
  list,
  addToList,
};


// Add an item to the list
async function addToList(req, res) {
  try{
    const list = await Trip.getList(req.user._id);
    await list.addItemToList(req.params.id);
    res.status(200).json(list);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

  