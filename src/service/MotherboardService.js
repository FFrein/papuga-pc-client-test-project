import $api from '../http'

export default class MotherboardService{
    static async fetchMotherboards(){
        return $api.get('/Motherboards');
    }
    static async addMotherboard(Name, Brand, CPU_Socket, GPU_Interface, RAM_Type, RAM, SATA, NVME){
        return $api.post('/Motherboard',{Name, Brand, CPU_Socket, GPU_Interface, RAM_Type, RAM, SATA, NVME});
    }
    static async updateMotherboard(Name, newName, Brand, CPU_Socket, GPU_Interface, RAM_Type, RAM, SATA, NVME){
        return $api.put('/Motherboard',{Name, newName, Brand, CPU_Socket, GPU_Interface, RAM_Type, RAM, SATA, NVME});
    }
    static async deleteMotherboard(Name) {
        return $api.delete(`/Motherboard/${Name}`);
    }
}