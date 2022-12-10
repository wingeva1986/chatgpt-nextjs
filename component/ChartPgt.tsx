import Chat, { Bubble, useMessages } from '@chatui/core';
import ReactMarkdown from 'react-markdown'
import '@chatui/core/dist/index.css';
import { useEffect } from 'react';

const ChatGpt = () => {
    const { messages, appendMsg, setTyping } = useMessages([]);

    function handleSend(type: any, val: string) {
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
            });

            setTyping(true);
            fetch('/api/chatgpt', {
                method: 'post',
                body: JSON.stringify({
                    message: val
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (res) => {
                const data = await res.json()
                appendMsg({
                    type: 'text',
                    content: {
                        text: data.message
                    },
                });
                console.log(res);
            })
        }
    }

    function renderMessageContent(msg: any) {
        const { type, content } = msg
        return <Bubble content={(
            <ReactMarkdown>{content.text}</ReactMarkdown>
        )} />;
    }

    useEffect(() => {
        appendMsg({
            type: 'text',
            content: {
                text: `[注册ChatGPT详细指南](https://blog.ijike.wang/article/ChatGPT)`
            }
        })

        appendMsg({
            type: 'text',
            content: {
                text: `[注册ChatGPT详细指南](https://sms-activate.org/?ref=2068197)`
            }
        })
    }, [appendMsg])

    return (
        <Chat
            navbar={{ title: 'ChatGpt' }}
            messages={messages}
            renderMessageContent={renderMessageContent}
            onSend={handleSend}
        />

    );
};

export default ChatGpt