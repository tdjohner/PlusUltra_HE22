import React from 'react'

const Tickets = ({tickets}) => {

    return(

        tickets.map((ticket, index) => 

            <div key={index} className='ticket'>

                <div><div>{ticket.title}</div><div>Grand Hall 2018</div></div>
                <div>{(ticket.desc.length <= 150) ? ticket.desc : ticket.desc.substr(0, 150) + '...' }</div>
                <div>{ticket.url}</div>

            </div>

        )

    )

}

export { Tickets };