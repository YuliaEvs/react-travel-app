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
                            <span className='name-box'>Hawaii</span>
                                <div className='buttons-div'>
                                    <button className='edit-btn'>Edit</button>
                                    <button className='remove-btn'>Remove</button>
                                </div>
                        </div>
                        <div className='item-box'>
                            <span className='name-box'>Alaska</span>
                                <div className='btn-div'>
                                    <button className='edit-btn'>Edit</button>
                                    <button className='remove-btn'>Remove</button>
                                </div>
                            
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