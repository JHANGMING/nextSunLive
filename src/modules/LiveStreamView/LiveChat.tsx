import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import GlobalLink from '@/common/components/GlobalLink';
import { BsCursorFill } from 'react-icons/bs';
const LiveChat = () => {
  const [chatroomId, setChatroomId] = useState(null);
  const [messageStatus, setMessageStatus] = useState(null);
  const [messages, setMessages] = useState<{ sender: string; message: any }[]>(
    []
  );
  const [newMessage, setNewMessage] = useState('');
  const [userIdSender, setUserIdSender] = useState(3);
  let chatHubProxy: SignalR.Hub.Proxy; // 定義在更廣泛的範圍內

  useEffect(() => {
    // 使用 jQuery 的代碼（這裡僅供範例，請注意不建議直接使用 jQuery）
    $.getScript('src/jquery-1.6.4.js', () => {
      $.getScript('src/jquery.signalR-2.4.3.js', () => {
        // WebSocket 連線
        const connection = $.hubConnection('http://4.224.41.94'); // 大鈞：這邊應該要改成伺服器網域
        chatHubProxy = connection.createHubProxy('chathub'); // 大鈞：這是測試的實際名稱：chathub
        chatHubProxy.on('receiveMessage', (message:any) => {
          // 大鈞：前端創立一個名為"receiveMessage"的方法，後端會call前端的方法，以回傳訊息
          console.log('Received message:', message);
          const newMsg = { sender: 'Other', message }; // 假设接收到的消息来自其他用户
          setMessages((prevMessages) => [...prevMessages, newMsg]);
        });

        connection
          .start()
          .done(() => {
            console.log(
              'FrontEnd Client-Side:Connected to WebSocket',
              connection
            );
            // 在這裡可以添加更多的 WebSocket 相關邏輯
            callApi(); // 大鈞：這邊call下面的callApi方法
          })
          .fail((error) => {
            console.error('WebSocket connection failed:', error);
          });

        return () => {
          // 在組件卸載時斷開 WebSocket 連線
          connection.stop();
        };
      });
    });
  }, []);

  // 大鈞：定義呼叫 API 的函式
  const callApi = () => {
    $.ajax({
      type: 'POST',
      url: 'http://4.224.41.94/api/c1/3/2', // 大鈞：前端使用ajax發送post api給後端
      //url: 'https://localhost:44364/api/c1/senderId/receiverId',
      success: function (response) {
        console.log('API called successfully:', response);
        // 在這裡處理 API 呼叫成功的邏輯

        const { chatroomId } = response; //大鈞：api會回傳chatroomId，
        let userIdSender = 3; //大鈞：這邊我先手動設定參數userIdSender=3
        let message = 'message test for3'; //大鈞：這邊我先手動設定參數message string

        // 大鈞：呼叫下面的方法
        JoinChatRoom(chatroomId); //大鈞：先加入2人專屬的聊天室
        SendMessageToRoom(chatroomId, userIdSender, message); //大鈞：之後透過這個function發送訊息
        // 在這裡處理收到的消息
      },
      error: function (error) {
        console.error('Failed to call API:', error);
        // 在這裡處理 API 呼叫失敗的邏輯
      },
    });
  };

  // 大鈞：在前端定義一個方法，其名稱和參數要和後端方法的文字相同
  const SendMessageToRoom = (
    chatroomId: any,
    userIdSender: any,
    message: any
  ) => {
    if (chatHubProxy){

      chatHubProxy
        .invoke('SendMessageToRoom', chatroomId, userIdSender, message)
        .done(() => {
          const newMsg = { sender: 'You', message };
          setMessages((prevMessages) => [...prevMessages, newMsg]);
        })
        .fail((error: any) => {
          console.error('Failed to send message:', error);
          console.error('Stack trace:', error.stack);
          // 在這裡處理發送失敗的邏輯，例如提示用戶等操作
        });
    }
  };

  // 大鈞：在前端定義一個方法，其名稱和參數要和後端方法的文字相同
  const JoinChatRoom = (chatroomId: any) => {
    chatHubProxy
      .invoke('JoinChatRoom', chatroomId)
      .done((response: any) => {
        console.log('Join room successfully:', response);
        // 在這裡處理發送成功的邏輯，例如更新 UI 等操作
      })
      .fail((error: any) => {
        console.error('Failed to join room:', error);
        // 在這裡處理發送失敗的邏輯，例如提示用戶等操作
      });
  };
  const handleSendMessage = () => {
    // 假设您已经有 chatroomId 和 userIdSender
    SendMessageToRoom(chatroomId, userIdSender, newMessage);
    setNewMessage(''); // 清空输入字段
  };

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
        <BsCursorFill
          size={24}
          onClick={handleSendMessage}
          className=" text-primary-red cursor-pointer hover:opacity-60"
        />
      </div>
    </div>
  );
};

export default LiveChat;
