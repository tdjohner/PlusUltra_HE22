import React from 'react'

const Tickets = ({tickets}) => {

    return(

        tickets.map((ticket, index) => 

            <div key={index} className='ticket'>

                <div><div>{ticket.title}</div><div>Grand Hall 2018</div></div>
                <div></div> {/* ticket url image from dc db */}

            </div>

        )

    )

}

export { Tickets };