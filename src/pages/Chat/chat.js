import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';

function Chat() {
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState('Введите /Help\n');

    useEffect(() => {
        const websocket = new WebSocket('wss://localhost:5000');

        websocket.onopen = () => {
            console.log('WebSocket client connected');
            setWs(websocket);
        };

        websocket.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            setChatHistory(prevHistory => prevHistory + `Server: ${receivedMessage.message}\n`);
        };

        websocket.onclose = () => {
            console.log('WebSocket client disconnected');
        };

        websocket.onerror = (error) => {
            console.error('WebSocket error:', error.message);
        };

        // Закрытие соединения при размонтировании компонента
        return () => {
            if (websocket) {
                websocket.close();
            }
        };
    }, []); // Выполняется только при монтировании

    const bugReport = () => {
        if (ws && message.trim() !== '') {
            const supportRequestMessage = {
                type: '/bug',
                message: message,
            };

            setChatHistory(prevHistory => prevHistory + `User: ${message}\n`);


            // Отправка сообщения на сервер
            ws.send(JSON.stringify(supportRequestMessage));

            // Очистка введенного сообщения
            setMessage('');
        }
    };

    const requestSupportChat = () => {
        if (ws && message.trim() !== '') {
            const supportRequestMessage = {
                type: 'supportRequest',
                message: message,
            };

            setChatHistory(prevHistory => prevHistory + `User: ${message}\n`);


            // Отправка сообщения на сервер
            ws.send(JSON.stringify(supportRequestMessage));

            // Очистка введенного сообщения
            setMessage('');
        }
    };

    return (
        <div className='ChatWrap'>
            <h2>Chat Support</h2>
            <div className='HelpChat' style={{ whiteSpace: 'pre-wrap' }}>
                {chatHistory}
            </div>

            <input
                rows={4}
                onChange={e => setMessage(e.target.value)}
                value={message}
                placeholder="Type your message here..."
            />

            <button onClick={requestSupportChat}>Request Support Chat</button>
            <button onClick={bugReport}>bugReport</button>
        </div>
    );
}

export default observer(Chat);
