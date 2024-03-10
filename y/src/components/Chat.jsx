import React, { useEffect, useState } from 'react'

const Chat = ({socket}) => {
  const [message, setmessage] = useState("")
  const[ allMessages, setallMessages] = useState([]) 
  
  useEffect(()=>{
    if (socket.current)
    {socket.current.on("broadcastMSG", (recievedMessage)=>{ //recieving message from the bakend
      console.log(recievedMessage); setallMessages([...allMessages, recievedMessage])} )  
    }
  })

    const sendMessage = ()=>{
    //console.log(message);
    socket.current.emit("sendMSG", message)  // sending message to the backend
    }
    
  return (
    <div>
          <div>
              {allMessages.map((msg)=>(<div>{msg}</div>))}
          </div>
        <input type="text" onChange={(e)=>setmessage(e.target.value)} />
        <button onClick={sendMessage}>Send Message </button>
    </div>
  )
}

export default Chat
