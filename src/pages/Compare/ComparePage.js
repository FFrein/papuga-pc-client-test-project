import {observer} from 'mobx-react-lite';
import {useEffect, useState} from 'react';

import CPUsService from "../../service/CPUsService";
import GPUsService from '../../service/GPUsService';
import MotherboardForm from '../../service/MotherboardService';

function Compare(){
    const [objects,setObjects] = useState([]);

    const [selectedObj1, setSelectedObj1] = useState({});
    const [selectedObj2, setSelectedObj2] = useState({});
    const [keys, setKeys] = useState([]);

    async function Choice(param){        
        try{
            let resp;

            switch(param){
                case "gpu":
                    resp = await GPUsService.fetchGPUs();
                    break;
                case "cpu":
                    resp = await CPUsService.fetchCPUs();
                    break;
                case "mthrbrd":
                    resp = await MotherboardForm.fetchMotherboards();
                    break;
            }
    
            setObjects(resp.data);

            //очистка
            setSelectedObj1({});
            setSelectedObj2({});
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        Choice("cpu");

    },[])

    return(
        <div className='Wrap'>

            <div className='CompareMenu'>
                <button onClick={()=>{Choice("cpu")}}>CPU</button>
                <button onClick={()=>{Choice("gpu")}}>GPU</button>
                <button onClick={()=>{Choice("mthrbrd")}}>Motherboard</button>
            </div>

            <div className='CompareLists'>
                <div className='ObjectList'>
                    {objects.map((obj)=>{
                        return (<div 
                            className='CompareObject'
                            key = {obj._id} 
                            onClick={()=>{
                                setSelectedObj1(obj);  
                                setKeys(Object.keys(obj));
                                }
                            }>
                        {obj.Name}
                        </div>)
                    })}
                </div>
                <div className='ObjectList'>
                    {objects.map((obj)=>{
                        return (<div 
                            className='CompareObject'
                            key = {obj._id} 
                            onClick={()=>{setSelectedObj2(obj); setKeys(Object.keys(obj));}}>
                                {obj.Name}
                            </div>)
                    })}
                </div>
            </div>

            <div className='CompareTable'>
                {(selectedObj1 != {} && selectedObj2 != {})? 
                (
                    (
                        <table className="ComparisonTable">
                        <thead>
                            <tr>
                                <th></th>
                                <th> <h2>{selectedObj1.Name}</h2> </th>
                                <th> <h2>{selectedObj2.Name}</h2> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {keys.map((key) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{selectedObj1[key]}</td>
                                    <td>{selectedObj2[key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )
                ) : null}
            </div>
        </div>
    )
}
export default observer(Compare);