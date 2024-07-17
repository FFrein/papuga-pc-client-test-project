import './styles.css';
import CPUsService from "../../../service/CPUsService"
import {useState} from 'react';

function CPUForm(){

    const [NewName, setNewName] = useState('');
    const [Name, setName] = useState('');
    const [Brand, setBrand] = useState('');
    const [Socket, setSocket] = useState('');
    const [CoreClock, setCoreClock] = useState('');
    const [TurboBoost, setTurboBoost] = useState('');
    const [Cores, setCores] = useState('');
    const [Threads, setThreads] = useState('');

    async function addCPU(){
        try{
            const newCPU = await CPUsService.addCPU(NewName, Brand, Socket, Cores, Threads, CoreClock, TurboBoost);
            //console.log(newCPU);
        }catch(e){
            console.log(e);
        }
    }

    async function updateCPU(){
        try{
            const updateCPU = await CPUsService.updateCPU(Name, NewName, Brand, Socket, Cores, Threads, CoreClock, TurboBoost);
            //console.log(updateCPU);
        }catch(e){
            console.log(e);
        }
    }

    async function deleteCPU(){
        try{
            const delCPU = await CPUsService.deleteCPU(Name);
            //console.log(delCPU);
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div className='Add_CPU_Form'>
                <label>CPU</label>
                <input
                onChange={e => setNewName(e.target.value)} 
                value={NewName}
                type="text" placeholder="CPU Name"
                />

                <input
                onChange={e => setBrand(e.target.value)} 
                value={Brand}
                type="text" placeholder="Brand Name"
                />

                <input
                onChange={e => setSocket(e.target.value)} 
                value={Socket}
                type="text" placeholder="Socket Name"
                />

                <input
                onChange={e => setCoreClock(e.target.value)} 
                value={CoreClock}
                type="text" placeholder="CoreClock"
                />

                <input
                onChange={e => setTurboBoost(e.target.value)} 
                value={TurboBoost}
                type="text" placeholder="TurboBoost"
                />

                <input
                onChange={e => setCores(e.target.value)} 
                value={Cores}
                type="text" placeholder="CPU Cores"
                />

                <input
                onChange={e => setThreads(e.target.value)} 
                value={Threads}
                type="text" placeholder="CPU Threads"
                />

                <button onClick={addCPU}>Добавить</button>

                <label>Обновление | Удаление</label>

                <input
                onChange={e => setName(e.target.value)} 
                value={Name}
                type="text" placeholder="CPU name to delete | update"
                />
                <button onClick={updateCPU}>Обновить</button>
                <button onClick={deleteCPU}>Удалить</button>
        </div>
    )
}
export default CPUForm;