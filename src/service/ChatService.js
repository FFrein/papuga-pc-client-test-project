import $ws from '../ws/index'

export default class ChatService{
    static async userHelpRequest(){
        return $ws.post('/requestChat', {});
    }
}