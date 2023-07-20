import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
    //state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    //get contacts form redux store
    const contacts = useSelector(state => state);

    //dispatch function to update the redux store
    const dispatch = useDispatch();
    // Navigate function for redirecting to a different route
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //check if email or number already exists or not
        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number);

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
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success('Contact added successfully');
        navigate('/');
    };
    return (
        <div className="container">
            <h1 className="display-3 text-center fw-bold">Add Contact</h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Phone Number" className="form-control" value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="submit" className="btn btn-block btn-dark" value='Add contact' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;