import React from 'react'

// res.send('<h1></h1>')

function Edit(props) {
    return ( 
        <div>
            <h1>Edit Logs</h1>
            <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
                <label htmlFor="nme">Title:</label><br />
                <input type="text" id="nme" name="title" defaultValue={props.log.title} /><br /><br />

                <label htmlFor="clr">Entry:</label><br />
                <input type="textarea" id="clr" name="entry" defaultValue={props.log.entry} /><br /><br />

                <label htmlFor="rdy">Ready To Eat:</label>
                <input type="checkbox" id="rdy" name="shipIsBroken" defaultChecked={props.log.shipIsBroken} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Edit;