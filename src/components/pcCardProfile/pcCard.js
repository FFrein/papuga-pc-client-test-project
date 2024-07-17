import "./styles.css"
import {observer} from "mobx-react-lite"

function PcCard(props){
    const pc = props.configpc;

    return(
        <div className='PC_Card'>
            <h3>{pc.Name}</h3>
            <p>CPU : {pc.CPU}</p>
            <p>GPU : {pc.GPU}</p>
            <p>Motherboard : {pc.Motherboard}</p>
        </div>
    )
}
export default observer(PcCard);