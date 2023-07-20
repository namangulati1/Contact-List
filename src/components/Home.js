import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    // Get contacts from the Redux store
    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    // Function to delete a contact
    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-end">
                    <Link to='/add' className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td id={id+1}>{id+1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                        <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary me-2">
                                            <FontAwesomeIcon icon={faEdit} /> {/* Edit Icon */}
                                            </Link>
                                            <button type="button" onClick={() => deleteContact(contact.id)} className="btn btn-small btn-danger">
                                            <FontAwesomeIcon icon={faTrashAlt} /> {/* Delete Icon */}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;
