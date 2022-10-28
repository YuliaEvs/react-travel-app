const React = require('react');

export default function ListItem ({ trip }) {

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
