import { useState } from "react";
import './NewTrip.css';

export default function Trip (props) {

    const [errorState, setErrorState] = useState('');
    
    const [formData, setFormData] = useState({
        tripname: '',
        days: '',
        note: '',
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        
      }
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      }

    return (
    <>

        <div className="newTrip-main">
            <div className="newTrip-container">
                <div className="newTripForm-title">New Trip</div>
                    <form className='newTripForm' autoComplete="off">
                    
                        <label htmlFor='tripname'>Trip Name:</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="tripname"
                                value={formData.tripname}
                                required
                            />
                        <label htmlFor='days'>Days:</label>
                            <input
                                onChange={handleChange}
                                type="number"
                                name="days"
                                value={formData.days}
                                required
                                />
                        <label htmlFor='note'>Note:</label>
                            <input className="input-note"
                                onChange={handleChange}
                                type="text"
                                name="note"
                                value={formData.note}
                                required
                        />
                        <button className='newTrip-btn' onClick={ () => ('/home')} type="submit">Create
                        </button> 
                    </form>
            </div>        
        </div>
    </>
    )
}