import { useState } from "react";
import { addNewTrip } from "../../actions";
import './NewTrip.css';

export default function TripForm (props) {

    const [errorState, setErrorState] = useState('');
    const [formData, setFormData] = useState("");
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTrip(formData));
        setText('');
    }
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        
      }
    
      const handleChange = (event) => {
        setFormData(e.target.value);
        // setFormData({ ...formData, [event.target.name]: event.target.value });
      }

    return (
    <>

        <div className="newTrip-main">
            <div className="newTrip-container">
                <div className="newTripForm-title">New Trip</div>
                    <form className='newTripForm' autoComplete="off" onSubmit={onFormSubmit}>
                    
                        <label htmlFor='name'>Trip Name:</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="name"
                                value={formData.name}
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
                        <label htmlFor='createdAt:'>Created At:</label>
                            <input
                                onChange={handleChange}
                                type="date"
                                name="createdAt"
                                value={formData.createdAt}
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