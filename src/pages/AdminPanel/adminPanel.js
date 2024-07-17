import './styles.css';
import {observer} from 'mobx-react-lite';
import CPUForm from '../../components/CPU/CPUForm/CPUForm';
import GPUForm from '../../components/GPU/GPUForm/GPUForm'
import MotherboardForm from '../../components/Motherboard/MotherboardForm';
import UsersForm from '../../components/usersForm/usersForm';
import PCForm from '../../components/pcForm/pcForm';


function AdminPanel(){

    return(
        <div className="AdminPanel">
            <CPUForm/>
            <GPUForm/>
            <MotherboardForm/>
            <UsersForm/>
            <PCForm/>
        </div>
    )
}
export default observer(AdminPanel);