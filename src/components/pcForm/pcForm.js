import './styles.css';
import {useState} from 'react';
import PCsService from "../../service/PCService"

function PCForm(props){

    const Author = props.userId;

    const [NewName, setNewName] = useState('');
    const [pcId, setPcId] = useState('');
    const [Motherboard, setMotherboard] = useState('');
    const [CPU, setCPU] = useState('');
    const [GPU, setGPU] = useState('');
    const [RAM_SIZE, setRamSize] = useState('');
    const [RAM_Quantity, setRamQ] = useState('');
    const [Published, setPublished] = useState('');

    async function addPC(){
        try{
            const newPC = await PCsService.addPC(Author, NewName, Motherboard, CPU, GPU, RAM_SIZE, RAM_Quantity, Published);
            console.log(newPC);
        }catch(e){
            console.log(e);
        }
    }

    async function updatePC(){
        try{
            const updatePC = await PCsService.updatePC(pcId, Author, NewName, Motherboard, CPU, GPU, RAM_SIZE, RAM_Quantity, Published);
            console.log(updatePC);
        }catch(e){
            console.log(e);
        }
    }

    async function deletePC(){
        try{
            const delPC = await PCsService.deletePC(pcId);
            //console.log(delPC);
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div className='PC_Form'>
                <label>PC</label>
                <input
                onChange={e => setNewName(e.target.value)} 
                value={NewName}
                type="text" placeholder="PC Name"
                />

                <input
                onChange={e => setPublished(e.target.value)} 
                value={Published}
                type="text" placeholder="Published true | false"
                />

                <input
                onChange={e => setRamQ(e.target.value)} 
                value={RAM_Quantity}
                type="text" placeholder="Ram Quantity"
                />

                <input
                onChange={e => setRamSize(e.target.value)} 
                value={RAM_SIZE}
                type="text" placeholder="RAM SIZE"
                />

                <input
                onChange={e => setGPU(e.target.value)} 
                value={GPU}
                type="text" placeholder="GPU Name"
                />

                <input
                onChange={e => setCPU(e.target.value)} 
                value={CPU}
                type="text" placeholder="CPU Name"
                />

                <input
                onChange={e => setMotherboard(e.target.value)} 
                value={Motherboard}
                type="text" placeholder="Motherboard"
                />

                <button onClick={addPC}>Добавить</button>

                <label>Обновление | Удаление</label>
                <input
                onChange={e => setPcId(e.target.value)} 
                value={pcId}
                type="text" placeholder="PC ID"
                />
                <button onClick={updatePC}>Обновить</button>
                <button onClick={deletePC}>Удалить</button>
        </div>
    )
}
export default PCForm;