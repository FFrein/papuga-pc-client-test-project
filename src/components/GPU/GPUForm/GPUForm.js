import './styles.css';
import {useState} from 'react';
import GPUsService from "../../../service/GPUsService"

function GPUForm(){

    const [NewName, setNewName] = useState('');
    const [Name, setName] = useState('');
    const [Brand, setBrand] = useState('');
    const [Interface, setInterface] = useState('');
    const [CoreClock, setCoreClock] = useState('');
    const [TurboBoost, setTurboBoost] = useState('');
    const [MemoryType, setMemoryType] = useState('');
    const [MemorySize, setMemorySize] = useState('');
    const [BusWidth, setBusWidth] = useState('');
    const [Technology, setTechnology] = useState('');


    async function addGPU(){
        try{
            const newGPU = await GPUsService.addGPU(NewName, Brand, Interface, CoreClock, TurboBoost, MemoryType, MemorySize, BusWidth, Technology);
            //console.log(newGPU);
        }catch(e){
            console.log(e);
        }
    }

    async function updateGPU(){
        try{
            const updateCPU = await GPUsService.updateGPU(Name, NewName, Brand, Interface, CoreClock, TurboBoost, MemoryType, MemorySize, BusWidth, Technology);
            //console.log(updateCPU);
        }catch(e){
            console.log(e);
        }
    }

    async function deleteGPU(){
        try{
            const delCPU = await GPUsService.deleteGPU(Name);
            //console.log(delCPU);
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div className='Add_GPU_Form'>
                <label>GPU</label>
                <input
                onChange={e => setNewName(e.target.value)} 
                value={NewName}
                type="text" placeholder="CPU Name"
                />

                <input
                onChange={e => setBrand(e.target.value)} 
                value={Brand}
                type="text" placeholder="GPU Brand"
                />

                <input
                onChange={e => setInterface(e.target.value)} 
                value={Interface}
                type="text" placeholder="GPU Interface (PCI 3)"
                />

                <input
                onChange={e => setCoreClock(e.target.value)} 
                value={CoreClock}
                type="text" placeholder="GPU CoreClock"
                />

                <input
                onChange={e => setTurboBoost(e.target.value)} 
                value={TurboBoost}
                type="text" placeholder="GPU TurboBoost"
                />

                <input
                onChange={e => setMemoryType(e.target.value)} 
                value={MemoryType}
                type="text" placeholder="GPU MemoryType"
                />

                <input
                onChange={e => setMemorySize(e.target.value)} 
                value={MemorySize}
                type="text" placeholder="GPU MemorySize"
                />

                <input
                onChange={e => setBusWidth(e.target.value)} 
                value={BusWidth}
                type="text" placeholder="GPU BusWidth"
                />

                <input
                onChange={e => setTechnology(e.target.value)} 
                value={Technology}
                type="text" placeholder="GPU Technology"
                />

                <button onClick={addGPU}>Добавить</button>

                <label>Обновление | Удаление</label>
                <input
                onChange={e => setName(e.target.value)} 
                value={Name}
                type="text" placeholder="CPU Name"
                />
                <button onClick={updateGPU}>Обновить</button>
                <button onClick={deleteGPU}>Удалить</button>
        </div>
    )
}
export default GPUForm;