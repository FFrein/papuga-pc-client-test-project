import './styles.css';
import {useState} from 'react';
import MotherboardService from "../../service/MotherboardService"

function MotherboardForm(){

    const [NewName, setNewName] = useState('');
    const [Name, setName] = useState('');
    const [Brand, setBrand] = useState('');
    const [CPU_Socket, setCPU_Socket] = useState('');
    const [GPU_Interface, setGPU_Interface] = useState('');
    const [RAM_Type, setRAM_Type] = useState('');
    const [RAM, setRAM] = useState('');
    const [SATA, setSATA] = useState('');
    const [NVME, setNVME] = useState('');


    async function addMotherboard(){
        try{
            const newMth = await MotherboardService.addMotherboard(NewName, Brand, CPU_Socket, GPU_Interface, RAM_Type, RAM, SATA, NVME);
            //console.log(newMth);
        }catch(e){
            console.log(e);
        }
    }

    async function updateMotherboard(){
        try{
            const updateMth = await MotherboardService.updateMotherboard(Name, NewName, Brand, CPU_Socket, GPU_Interface, RAM_Type, RAM, SATA, NVME);
            //console.log(updateMth);
        }catch(e){
            console.log(e);
        }
    }

    async function deleteMotherboard(){
        try{
            const delMth = await MotherboardService.deleteMotherboard(Name);
            //console.log(delMth);
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div className='Motherboard_Form'>
                <label>Motherboard</label>
                <input
                onChange={e => setNewName(e.target.value)} 
                value={NewName}
                type="text" placeholder="Motherboard Name"
                />

                <input
                onChange={e => setBrand(e.target.value)} 
                value={Brand}
                type="text" placeholder="Motherboard Brand"
                />
                
                <input
                onChange={e => setCPU_Socket(e.target.value)} 
                value={CPU_Socket}
                type="text" placeholder="CPU Socket"
                />

                <input
                onChange={e => setGPU_Interface(e.target.value)} 
                value={GPU_Interface}
                type="text" placeholder="GPU Interface"
                />

                <input
                onChange={e => setRAM(e.target.value)} 
                value={RAM}
                type="text" placeholder="RAM size"
                />

                <input
                onChange={e => setRAM_Type(e.target.value)} 
                value={RAM_Type}
                type="text" placeholder="RAM slots"
                />

                <input
                onChange={e => setSATA(e.target.value)} 
                value={SATA}
                type="text" placeholder="SATA slots"
                />

                <input
                onChange={e => setNVME(e.target.value)} 
                value={NVME}
                type="text" placeholder="NVME slots"
                />

                <button onClick={addMotherboard}>Добавить</button>

                <label>Обновление | Удаление</label>
                <input
                onChange={e => setName(e.target.value)} 
                value={Name}
                type="text" placeholder="Motherboard Name"
                />
                <button onClick={updateMotherboard}>Обновить</button>
                <button onClick={deleteMotherboard}>Удалить</button>
        </div>
    )
}
export default MotherboardForm;