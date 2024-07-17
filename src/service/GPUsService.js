import $api from '../http'

export default class GPUsService{
    static async fetchGPUs(){
        return $api.get('/gpus');
    }
    static async addGPU(Name, Brand, Interface, CoreClock, TurboBoost, MemoryType, MemorySize, BusWidth, Technology){
        return $api.post('/gpu',{Name, Brand, Interface, CoreClock, TurboBoost, MemoryType, MemorySize, BusWidth, Technology});
    }
    static async updateGPU(Name, NewName, Brand, Interface, CoreClock, TurboBoost, MemoryType, MemorySize, BusWidth, Technology){
        return $api.put('/gpu',{Name, NewName, Brand, Interface, CoreClock, TurboBoost, MemoryType, MemorySize, BusWidth, Technology});
    }
    static async deleteGPU(Name) {
        return $api.delete(`/gpu/${Name}`);
    }
}