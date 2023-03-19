import React from 'react'


function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    console.log(props.logs)
    return (
            <div>
                <h1>Index View</h1>
                <ul>
                    {props.logs.map((log, index) => 
                        <li key={index}>
                            <a href={`/logs/${log._id}`}><strong>{log.title}</strong></a>
                        </li>
                    )}
                </ul>
                <a href="/logs/new">Add...</a>

                <br/><br/><br/>

                <form action="/logs/seed" method="POST">
                    <button>SEED</button>
                </form>

                <br/>

                <form action="/logs/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>
                </form>
            </div>
     
    )
}

export default Index