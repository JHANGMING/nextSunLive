import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import GlobalLink from '@/common/components/GlobalLink';
import { BsCursorFill } from 'react-icons/bs';


const LiveChat = () => {
  const [chatroomId, setChatroomId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userIdSender, setUserIdSender] = useState(3);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('signalr-no-jquery').then(({ hubConnection }) => {
        const connection = hubConnection('http://4.224.41.94');
        const chatHubProxy = connection.createHubProxy('chathub');

        chatHubProxy.on('receiveMessage', (sender, message) => {
          const newMessage = { sender, message };
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        connection
          .start()
          .done(() => {
            console.log('Connected to SignalR server!');
          })
          .fail((error) => {
            console.error('Failed to connect to SignalR server: ', error);
          });

        // 断开连接的逻辑也应该在这里
        return () => {
          connection.stop();
        };
      });
    }
  }, []);

  // const handleSendMessage = () => {
  //    const connection = hubConnection('http://4.224.41.94');
  //   const chatHubProxy = connection.createHubProxy('chathub'); // 重新获取proxy，确保其在当前作用域内有效
  //   // 发送消息
  //   if (chatroomId && newMessage.trim() !== '') {
  //     chatHubProxy
  //       .invoke('SendMessageToRoom', chatroomId, userIdSender, newMessage)
  //       .done(() => {
  //         console.log('Message sent successfully');
  //         setNewMessage(''); // 清空输入框
  //       })
  //       .fail((error) => {
  //         console.error('Failed to send message: ', error);
  //       });
  //   }
  // };

  return (
    <div className="mt-[250px] mb-40 mx-auto w-[600px] border border-lightGray rounded-16">
      <h6 className="font-normal p-16 border-b border-lightGray">
        重點聊天室訊息
      </h6>
      {/* 聊天室 */}
      <div className="p-24 h-[640px]">
        <div className=" bg-SoftGray rounded-20 p-16 flex gap-20 mb-16">
          <Image
            src="/images/home/live/liveComingImg1.png"
            alt="liveComingImg"
            width={80}
            height={80}
            className="w-80 h-80"
          />
          <div className="text-darkGray flex flex-col gap-8 w-full">
            <div className=" flex gap-8 items-center">
              <h4 className="text-16">夢幻柳橙夏悠</h4>
              <h5 className=" text-mediumGray text-14 font-normal">
                <span>NT$</span>250
              </h5>
            </div>
            <p className="">
              剩餘{' '}
              <span className=" text-primary-red text-24 font-bold shiny-scale-effect">
                50
              </span>{' '}
              組
            </p>
            <GlobalLink
              href="/cart"
              openInNewTab={true}
              className="cursor-pointer bg-primary-red text-white w-full rounded-8 text-center hover:opacity-60 ">
              加入購物車
            </GlobalLink>
          </div>
        </div>
        <ul className="flex flex-col gap-16">
          {messages.map((msg, index) => (
            <li key={index} className="flex items-center gap-16">
              <span>{msg.sender}</span>
              <p className="text-14">{msg.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-lightGray p-24 gap-16 flex items-center justify-between">
        <Image
          src="/images/liveStream/viewPerson1.png"
          alt="viewPerson1"
          width={24}
          height={24}
          className="w-24 h-24"
        />
        <input
          type="text"
          placeholder="輸入聊天訊息 ..."
          className=" text-darkGray bg-SoftGray py-8 pl-16 rounded-8 w-[287px] focus-visible:outline-none "
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        {/* <BsCursorFill
          size={24}
          onClick={handleSendMessage}
          className=" text-primary-red cursor-pointer hover:opacity-60"
        /> */}
      </div>
    </div>
  );
};

export default LiveChat;
