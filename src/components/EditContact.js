import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";

const EditContact = () => {
    //state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    //get the id parameter from the url
    const { id } = useParams();
    const navigate = useNavigate();

    //get contacts from the redux store
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    // Check if the Redux store is still being initialized
    const currentContact = useSelector(state => state.find(contact => contact.id === parseInt(id)));

    const [loading, setLoading] = useState(true);
    //update the state variable when the current contact changes
    useEffect(() => {
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
            setLoading(false);
        }
    }, [currentContact]);

    if(loading || currentContact  === undefined){
        return <Loader/>
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        //check if email or number already exists or not
        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number));

        //validation checks
        if(!email || !number || !name){
            return toast.warning('Please fill in all the details');
        }
        if(checkEmail){
            return toast.error('This email already Exists!');
        }
        if(checkNumber) {
            return toast.error('This number already Exists');
        }

        // create a new contact object
        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }
        //dispatch an action to update the contact in the redux store
        dispatch({ type: 'UPDATE_CONTACT', payload: data });
        toast.success('Contact Updated successfully');
        navigate('/');
    };
    return (
        <div className="container">
            {
                currentContact ? (
                    <>
                        <h1 className="display-3 text-center fw-bold">Edit contact {id}</h1>
                        <div className="row">
                            <div className="col-md-6 shadow mx-auto p-5">
                                <form className="text-center" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder="Phone Number" className="form-control" value={number} onChange={e => setNumber(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="submit" className="btn btn-dark" value= "Update Contact" />
                                        <Link to='/' className="btn btn-danger ms-3">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className="display-3 my-5 text-center fw-bold">Contact with id {id} does not exists!!</h1>
                )
            }
        </div>
    )
}

export default EditContact;