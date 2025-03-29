

export default function Ticket({lotteryNo}) {

    let ticketStyle = {
        // height: "5rem",
        width: "20rem",
        backgroundColor: "gold", 
        padding: "1rem",
        border: "2px dashed black ",
        margin: "0.5rem 9rem"
    }

    return (
        <div style={ticketStyle}>
            <p>Your Lottery Number = <b>{lotteryNo}</b></p>
        </div>
    );
};