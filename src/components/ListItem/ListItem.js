import { useState } from "react";
import { toggleTrip, updateTrip } from "../../actions";
import { deleteTrip } from "../../actions";
import { useDispatch } from "react-redux";

export default function ListItem ({ trip }) {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(trip?.name);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
      e.preventDefault();

      setEditing(prevState => !prevState);

      dispatch(updateTrip(trip._id, text))
  }


  return (
    <ul>
      <li>
        <a href={`/trips/${trip._id}`}>{trip.name}</a> is {trip.days} {trip.note}
        <form action={`/trips/${trip._id}?_method=DELETE`} method="POST" >
          <input type="submit" value="DELETE" />
        </form>
        <a href={`/trips/${trip._id}/edit`}>Edit The Trip</a>
      </li>
    </ul>
  )

}
