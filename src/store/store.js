import {IUser} from '../models/IUser'
import {makeAutoObservable} from 'mobx' //012441
import AuthService from '../service/AuthService';
import axios from 'axios';
import { API_URL } from '../http';

export default class Store{
    user = new IUser();
    isAuth = false;
    isLoading = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    setUser(user){
        this.user = user;
    }

    async login(email, password){
        try{
            const response = await AuthService.login(email, password); 
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

            //console.log(response.data.user);
            //console.log(response);
        }
        catch(e){
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password){
        try{
            const response = await AuthService.registration(email, password); 
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response?.data?.user);
            
            console.log(response);
        }
        catch(e){
            console.log(e.response?.data?.message);
        }
    }

    async logout(){
        try{
            await AuthService.logout(); 
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});

            console.log(`Logot`);
        }
        catch(e){
            console.log(e.response?.data?.message);
        }
    }

    setLoading(bool){
        this.isLoading = bool;
    }

    async checkAuth(){
        this.setLoading(true);
        try{
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials:true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response?.data?.user);
            //console.log(response);
        }
        catch(e){
            if(e?.response?.data?.message)
                console.log(e.response.data.message);
            else
                console.log(e);
        }
        finally{
            this.setLoading(false);
        }
    }
}