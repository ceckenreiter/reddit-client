import React from "react";


export default function ComplaintForm () {
    console.log('complaint form')

    const handleSubmit = () => {
        
    }

    return (
        <div id='complaint-form'>
            <form onSubmit={handleSubmit}> 
                <p>Name</p>
                <input type='text'/>
                <p>email</p>
                <input type='text' />
                <p>Complaint</p>
                <input type='textarea' />
                <p>Date</p>
                <input type='date' />
            </form>

        </div>
        
    )
}

