import ChatMessage from "./ChatMessage"
import ChatBar from "./ChatBar"
import type { Message } from "../../GlobalObjects/Objects_DataTypes"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
import type { Stream } from "../../GlobalObjects/Objects_DataTypes"
import "./ChatSection.css"
interface ChatSectionProps {
    doChatting : (message : Message, stream : Stream) => void
    GetUser : () => User | null
    stream : Stream
}
const ChatSection = (props: ChatSectionProps) => {
    return(
        <div className="RightSide">
            <div className="ChatTitle">
                <h5 className="TextBox">Stream Chat</h5>
            </div>
            <div className="RightSideScroll">
                {
                    props.stream.messagelist.map((mensaje : Message) => {
                        return(
                            <ChatMessage mensaje ={mensaje}></ChatMessage>
                        )
                    })
                }
            </div>
            <ChatBar doChatting = {props.doChatting} stream = {props.stream} GetUser={props.GetUser} />
        </div>
    )
}
export default ChatSection