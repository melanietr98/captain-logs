
import React from 'react'


function New() {
    return ( 
        <div>
            <h1>Captain's Log New View</h1>

            <form action="/logs" method="POST">

                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="en">Entry:</label><br />
                <input type="textarea" id="en" name="entry" /><br /><br />

                <label htmlFor="sib"> Is ship broken:</label>
                <input type="checkbox" id="sib" name="shipIsBroken" /><br /><br />

                <input type="submit"/> 

                {/* <button>Submit</button> */}
            </form>

            <br /><br />
            <img style = {{width: "500px"}} src = "https://i.redd.it/dnjyaep7nec61.png"/>
        </div>
    );
}

export default New;