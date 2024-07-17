import {observer} from 'mobx-react-lite'
import {useState, useEffect} from 'react';

import CPUsService from "../../service/CPUsService";
import GPUsService from '../../service/GPUsService';
import MotherboardForm from '../../service/MotherboardService';
import pcImg from "../../resource/CPu.svg"

function ComponentsStore(){

    const [objects,setObjects] = useState([]);

    async function getCpus(){
        try{
            const response = await CPUsService.fetchCPUs();
            setObjects(response.data);
        }
        catch(e){
            console.log(e?.response?.data?.message);
        }
    }

    async function getGpus(){
        try{
        const response = await GPUsService.fetchGPUs();
        setObjects(response.data);
        }
        catch(e){
            console.log(e?.response?.data?.message);
        }
    }

    async function getMotherboards(){
        try{
        const response = await MotherboardForm.fetchMotherboards();
        setObjects(response.data);
        }
        catch(e){
            console.log(e?.response?.data?.message);
        }
    }

        
    useEffect(()=>{
        getMotherboards();
    },[])

    return(
        <div className='Wrap'>
            <div className='ComponentsPage'>
                <div className='ComponentsMenu'>
                    <button onClick={getCpus}>Cpus</button>
                    <button onClick={getGpus}>Gpus</button>
                    <button onClick={getMotherboards}>Motherboards</button>
                </div>
                <div className='ComponentsStoreObjects'>
                    {objects.map((elem)=>{
                        return <div className='ComponentStoreObject' key = {elem._id}>
                            {Object.keys(elem).map((key) => (
                                <div key = {key}>{(key != '__v' && key != '_id') ? key + " " + elem[key] : null}</div>
                            ))}
                            <img src={pcImg} className="H-pc" alt="pc"/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default observer(ComponentsStore);