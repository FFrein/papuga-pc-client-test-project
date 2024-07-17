import $api from '../http'

export default class PCService{
    static async fetchPCs(){
        return $api.get('/pcs');
    }
    static async getUserPCs(author){
        return $api.get(`/userpcs/${author}`);
    }
    static async getPublishedPCs(){
        return $api.get(`/publishedpcs`);
    }
    static async getCurrentPC(id){
        return $api.get(`/pc/${id}`);
    }
    static async addPC(Author, Name, Motherboard, CPU, GPU, RAM_SIZE, RAM_Quantity, Published){
        return $api.post('/pc',{Author, Name, Motherboard, CPU, GPU, RAM_SIZE, RAM_Quantity, Published});
    }
    static async updatePC(pcId, Author, Name, Motherboard, CPU, GPU, RAM_SIZE, RAM_Quantity, Published){
        return $api.put('/pc',{pcId, Author, Name, Motherboard, CPU, GPU, RAM_SIZE, RAM_Quantity, Published});
    }
    static async deletePC(pcId) {
        return $api.delete(`/pc/${pcId}`);
    }
}