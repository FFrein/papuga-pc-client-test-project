import $api from '../http'

export default class UserService{
    static async fetchUsers(){
        return $api.get('/users');
    }
    static async banStatus(userId, ban){
        return $api.post('/banuser',{userId, ban});
    }
}