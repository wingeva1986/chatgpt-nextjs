import Chat, { Bubble, useMessages } from '@chatui/core';
import ReactMarkdown from 'react-markdown'
import '@chatui/core/dist/index.css';
import { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm'


const ChatGpt = () => {
    const { messages, appendMsg, setTyping } = useMessages([]);
    const [inited, setInited] = useState(false)

    function handleSend(type: any, val: string) {
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
                user: {
                    avatar: 'https://ui-avatars.com/api/?background=random',
                },
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
                    user: {
                        avatar: 'https://ui-avatars.com/api/?name=cp&background=0D8ABC',
                        name: 'ChatGpt'
                    },
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content.text}</ReactMarkdown>
        )} />;
    }

    useEffect(() => {
        appendMsg({
            type: 'text',
            user: {
                avatar: 'https://ui-avatars.com/api/?name=mo&background=0D8ABC',
                name: 'murphy'
            },
            content: {
                text: `[注册ChatGPT详细指南](https://blog.ijike.wang/article/ChatGPT)`
            }
        })

        appendMsg({
            type: 'text',
            user: {
                avatar: 'https://ui-avatars.com/api/?name=mo&background=0D8ABC',
                name: 'murphy'
            },
            content: {
                text: `这是一个开源项目 欢迎star [chatgpt-nextjs](https://github.com/moyuanhua/chatgpt-nextjs)`
            }
        })

    }, [])

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