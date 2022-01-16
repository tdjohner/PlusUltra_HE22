import React from 'react'

const Tickets = ({tickets}) => {

    if (tickets === undefined) {

        return(

            <div className="ticket" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.25vw'}}>Loading tickets</div>

        )

    }

    if (tickets === false) {

        return(

            <div className="ticket" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.25vw'}}>Failed to fetch tickets</div>

        )

    } else if (tickets.length === 0) {

        return(

            <div className="ticket" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.25vw'}}>No tickets</div>

        )

    }

    return(

        <>

        {tickets.map((ticket, index) => 

            <div key={index} className='ticket'>

                {/* on hover show more info */}

                <div><div>{ticket.title}</div><div>{(ticket.description.length <= 50) ? ticket.description : ticket.description.substr(0, 50) + '...'}</div></div>
                <div><img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, ticket.hex.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")))}></img></div>

            </div>

        )}<div className="ticket" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.25vw'}}>No more tickets</div>

        </>

    )

}

export { Tickets };