import React from 'react'

const Tickets = ({tickets}) => {

    return(

        tickets.map((ticket, index) => 

            <div key={index}>

                <div>{ticket.title}</div>
                <div>{ticket.desc}</div>
                <div>{ticket.url}</div>

            </div>

        )

    )

}

export { Tickets };