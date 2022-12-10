import dynamic from "next/dynamic";
const Chat = dynamic(
    () => {
        return import("../../component/ChartPgt");
    },
    { ssr: false }
);



export default function ChatGpt() {


    return (
        <div style={{
            height: '100vh'
        }}>
            <Chat></Chat>
        </div>
    )
}