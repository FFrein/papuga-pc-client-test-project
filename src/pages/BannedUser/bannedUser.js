import {observer} from 'mobx-react-lite'
import { Context } from '../../.';
import { useContext} from 'react';

function BannedUser(){
    const {store} = useContext(Context);

    return(
        <div className='Ban'>
            <h1 >You are banned</h1>
            <button onClick={()=>{store.logout()}}>Exit</button>
        </div>
    )
}
export default observer(BannedUser);