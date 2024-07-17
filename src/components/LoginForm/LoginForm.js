import { useContext, useState } from 'react';
import './form.css';
import { Context } from '../..';
import {observer} from 'mobx-react-lite'

function LoginFrom(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    return(
        <div className='Login_Form'>
                <label>Email</label>
                <input
                onChange={e => setEmail(e.target.value)} 
                value={email}
                type="text" placeholder="Email"
                />
                <label>Password</label>
                <input 
                onChange={e => setPassword(e.target.value)} 
                value={password}
                type="password" placeholder="Пароль"
                />
                <button 
                onClick={()=>store.login(email, password)}>
                    Войти
                </button>
                <button 
                onClick={()=>store.registration(email, password)}>
                    Регистрация
                </button>
        </div>
    )
}

export default observer(LoginFrom);