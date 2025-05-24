import TicketNum from "./TicketNum";

export default function Ticket({lotteryNo}) {

    let ticketStyle = {
        height: "8rem",
        width: "20rem",
        backgroundColor: "gold", 
        border: "2px dashed black ",
        margin: "0.5rem 10rem"
    }

    return (
        <div style={ticketStyle}>
            <h4 style={{marginBottom: "0"}}>Ticket</h4>
            {
                lotteryNo.map(
                    (digit) => (
                        <TicketNum num={digit}/>
                    )
                )
            }
        </div>
    );
};


// Dumb Component
// Propes -> lotteryNo (Array)
// State -> 0
// event -> 0