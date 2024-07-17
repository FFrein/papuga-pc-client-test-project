import './styles.css';

function UserPCs(props){
    
    const PC = props.PC;

    return(
        <div className='UserPCs_Wrap'>
            <div className="PC_Container">
                <p className="PC_Author">{PC._id}</p>
                <h4 className="PC_Name">{PC.Name}</h4>
                <div className="PC_Components">
                    <p>Motherboard: {PC.Motherboard}</p>
                    <p>CPU: {PC.CPU}</p>
                    <p>GPU: {PC.GPU}</p>
                    <p>RAM size: {PC.RAM_SIZE}</p>
                    <p>RAM quantity: {PC.RAM_Quantity}</p>
                    <p>Published: {PC.Published? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
    )
}
export default UserPCs;