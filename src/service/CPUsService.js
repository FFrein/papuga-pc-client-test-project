import $api from '../http'

export default class CPUsService{
    static async fetchCPUs(){
        return $api.get('/cpus');
    }
    static async addCPU(Name, Brand, Socket, Cores, Threads, CoreClock, TurboBoost){
        return $api.post('/cpu',{Name, Brand, Socket, Cores, Threads, CoreClock, TurboBoost});
    }
    static async updateCPU(Name, NewName, Brand, Socket, Cores, Threads, CoreClock, TurboBoost){
        return $api.put('/cpu',{Name, NewName, Brand, Socket, Cores, Threads, CoreClock, TurboBoost});
    }
    static async deleteCPU(Name) {
        return $api.delete(`/cpu/${Name}`);
    }
}