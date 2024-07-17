//import './styles.css';
import {observer} from "mobx-react-lite"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"; 

import PCsService from '../../service/PCService';
import PC_Card from '../pcCardProfile/pcCard'

function PcStore(){
    const [pc, setPC] = useState([]);

    const [Page, setPage] = useState(1);

    function nextPage(){
        if(pc.length == 10){
            setPage(Page + 1);
            getPC(Page);
        }
    }
    function forwardPage(){
        if(Page > 1){
            setPage(Page - 1);
            getPC(Page);
        }
    }

    useEffect(()=>{
        getPC()
    },[])

    //Пагинация нужна везде
    async function getPC(){
        try{
            const pcs = await PCsService.getPublishedPCs();
            setPC(pcs.data);
        }catch(e){
            console.log(e);
        }
    }   

    return(
        <div className='PCStore'>
            {pc.map((pc)=>{
                return( 
                    <Link key={pc._id} to={`/pc/${pc._id}`}>
                        <PC_Card key={pc.Name} configpc={pc} />
                    </Link>
                )
            })}
        </div>
    )
}
export default observer(PcStore);