import {useState} from 'react';
import UserService from "../../service/UserService"

function UsersForm(){
    const [userId, setUserId] = useState('');

    async function unbanUser(){
        try{
            const resp = await UserService.banStatus(userId,false);
            console.log(resp)
        }catch(e){
            console.log(e);
        }
    }

    async function banUser(){
        try{
            const resp = await UserService.banStatus(userId,true);
            console.log(resp)
        }catch(e){
            console.log(e);
        }
    }

    async function getUsers(){
        try{
            const resp = await UserService.fetchUsers();
            console.log(resp)
        }catch(e){
            console.log(e);
        }
    }


    return(
        <div className='PC_Form'>
                <label>User</label>
                <input
                onChange={e => setUserId(e.target.value)} 
                value={userId}
                type="text" placeholder="userId"
                />
                <button onClick={banUser}>Ban</button>
                <button onClick={unbanUser}>Unban</button>
                <button onClick={getUsers}>getUsers</button>
        </div>
    )
}
export default UsersForm;