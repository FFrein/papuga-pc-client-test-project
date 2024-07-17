import './styles.css';
import LoginForm from '../../components/LoginForm/LoginForm'
import ProfilePage from '../profile/profile'
import { useContext} from 'react';
import { Context } from '../../.';
import {observer} from 'mobx-react-lite'
import BannedUser from '../BannedUser/bannedUser';

function AuthFrom(){
    //здесь как то по другому надо
    //я так думаю
    const {store} = useContext(Context);

    if(store.isLoading){
        return(
        <div>
            Загрузка
        </div>
        )
    }

    if(store.isAuth && store.user.banned){
        return (
            <BannedUser/>
        );
    }
    else if(store.isAuth){
        return (
            <ProfilePage/>
        );
    }
    else{
        return (
        <div className="App">
            <LoginForm/>
        </div>
        );
    }
}

export default observer(AuthFrom);