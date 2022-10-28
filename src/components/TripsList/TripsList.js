import ListItem from '../ListItem/ListItem';
import { useNavigate } from 'react-router-dom';
import './TripsList.css'

export default function TripsList (props) {
    const navigate = useNavigate();
    return (
            <div className='tripsList-container'>
                <div className='tripsList-title'>Trip List</div> 
                <div className='tripsList-box'>
                    {/* <ul> */}
                        <div className='item-box'>
                            <span>Hawaii
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </span>
                        </div>
                        <div className='item-box'>
                            <li>Alaska
                                <button className='edit-btn'>Edit</button>
                                <button className='delete-btn'>Delete</button>
                            </li>
                        </div>
                        <li className='item-box'>
                            <a href={`/trips/${ListItem}/details`}>{props.name}</a>
                        </li>
                    {/* </ul> */}
                </div>
                <button className='newTrip-btn' onClick={() => navigate('/trips/new')}>Create<br/>New Trip</button>
            </div>
        
    )

}