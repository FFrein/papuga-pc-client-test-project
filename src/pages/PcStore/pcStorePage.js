import {observer} from "mobx-react-lite"
import PcStore from '../../components/pcStore/pcStore'

function PcStorePage(){
    return(
        <div className='div'>
            <PcStore/>
        </div>
    )
}
export default observer(PcStorePage);