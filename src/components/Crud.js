import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import '../App.css'

function Crud() {

    const list = [
        {
            id: 1,
            name: "HP",
            phone: "222",
            address: "Mysore"
        },
        {
            id: 2,
            name: "HP1",
            phone: "333",
            address: "Bangalore"
        }
    ]
    const [lists, setlists] = useState(list)
    const [addinfo, setaddinfo] = useState({
        name: '',
        phone: '',
        address: ''
    })
    function handleChange(event) {
        event.preventDefault()

        const fieldname = event.target.getAttribute('name')
        const fieldvalue = event.target.value

        const newformdata = { ...addinfo }
        newformdata[fieldname] = fieldvalue
        setaddinfo(newformdata)
    }

    function handlesubmit(event) {
        event.preventDefault()
        const newContact = {
            id: nanoid(),
            name: addinfo.name,
            phone: addinfo.phone,
            address: addinfo.address
        }
        const newContacts = [...lists, newContact]
        setlists(newContacts)
    }
    return (
        <div className='main'>
            <h1>Form</h1>
            <form action="" onSubmit={handlesubmit}>
                <label >Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} required/>
                <br /><br />
                <label>Phone</label>
                <input type="text" name='phone' id='phone' onChange={handleChange} required/>
                <br /><br />
                <label>Address</label>
                <input type="text" name='address' id='address' onChange={handleChange} required/>
                <br /><br />
                <button type='submit'>Add</button><br /><br />
            </form>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    {
                        lists.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>

        </div>
    )
}

export default Crud