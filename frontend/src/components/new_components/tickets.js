import React from 'react'

const Tickets = ({tickets}) => {

    return(

        <>

        {tickets.map((ticket, index) => 

            <div key={index} className='ticket'>

                {/* on hover show more info */}

                <div><div>{ticket.title}</div><div>{(ticket.desc.length <= 50) ? ticket.desc : ticket.desc.substr(0, 50) + '...'}</div></div>
                <div><img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, ticket.hex.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")))}></img></div>

            </div>

        )}<div className="ticket" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.25vw'}}>No tickets to load</div>

        </>

    )

}

export { Tickets };