import EmptyLayout from '@/components/layout/EmptyLayout';
import React, { useState } from 'react';
import axios from 'axios';
export default function Contact({ contacts }) {
    const [visibility, setVisibility] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [favorite, setFavorite] = useState('');
    const [contactId, setContactId] = useState('');

    const editContact = (name, email, address, phone, favorite, contactId) => {
        setVisibility((visibility) => !visibility);
        setName(name);
        setEmail(email);
        setAddress(address);
        setPhone(phone);
        setFavorite(favorite);
        setContactId(contactId);
    };

    const updateContact = async (contactId) => {
        const contactObj = {
            name: name,
            email: email,
            address: address,
            phone: phone,
            favorite: favorite,
        };
        console.log(contactObj);
        await axios.put(`http://localhost:3000/api/contacts/${contactId}`, contactObj).then(() => {
            window.location.reload(false);
        });
    };
    const deleteContact = (contactId) => {
        axios
            .delete(`http://localhost:3000/api/contacts/${contactId}`)
            .then(() => {
                window.location.reload(false);
            })
            .catch((error) => {
                console.error('Error deleting contact:', error.message);
            });
    };

    console.log(contacts);
    return (
        <main>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Favorite</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => {
                            return (
                                <tr key={contact._id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.favorite}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning"
                                            onClick={(name, email, address, phone, favorite) =>
                                                editContact(
                                                    contact.name,
                                                    contact.email,
                                                    contact.address,
                                                    contact.phone,
                                                    contact.favorite,
                                                    contact._id,
                                                )
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteContact(contact._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {visibility && (
                <div className="container mt-5">
                    <h2>Update Contact</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="favorite" className="form-label">
                                Favorite
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="favorite"
                                value={favorite}
                                onChange={(event) => setFavorite(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={() => updateContact(contactId)}>
                            Submit
                        </button>
                        <button className="btn btn-danger" onClick={() => setVisibility((visibility) => !visibility)}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </main>
    );
}

Contact.Layout = EmptyLayout;
export async function getStaticProps() {
    try {
        const response = await axios.get('http://localhost:3000/api/contacts/');
        const contactData = response.data;

        return {
            props: {
                contacts: JSON.parse(JSON.stringify(contactData)),
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);

        return {
            props: {
                contacts: [], // Return an empty array or appropriate error data when there's an error
            },
        };
    }
}
