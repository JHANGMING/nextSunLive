import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import GlobalLink from '@/common/components/GlobalLink';
import { BsCursorFill } from 'react-icons/bs';
type Message = {
  sender?: string;
  message: string;
};
const LiveChat = () => {
  const [chatroomId, setChatroomId] = useState(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [userIdSender, setUserIdSender] = useState(6);
  const [isConnected, setIsConnected] = useState(false);
  const chatHubProxyRef = useRef<SignalR.Hub.Proxy | null>(null);
  const messagesEndRef = useRef<HTMLUListElement | null>(null);
  // const token =
  //   'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6NiwiVXNlckNhdGVnb3J5IjowLCJJYXQiOiJcL0RhdGUoMTcwODA0NjAwMzMzMilcLyIsIkV4cCI6IjIvMTcvMjAyNCA5OjEzOjIzIEFNIn0.zZv8ssl3W7dB4EYjnEJj50MaGjesLnldywAW0sBBnArKNCXwj5i9H5w4sa_PQDoFZyy_pz4CuPB-t5Fu1PZNfQ';
  useEffect(() => {
    if (messagesEndRef.current) {
      const { current: messagesContainer } = messagesEndRef;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('signalr-no-jquery').then(({ hubConnection }) => {
        const connection = hubConnection('https://4.224.41.94');
        const chatHubProxy = connection.createHubProxy(
          'chathub'
        ) as unknown as SignalR.Hub.Proxy;
        chatHubProxy.on('receiveMessage', (message) => {
          console.log('Received message:', message);
          setMessages(message.chatcontent);
          // 在這裡處理收到的消息
        });
        chatHubProxyRef.current = chatHubProxy;
        connection
          .start()
          .done(() => {
            console.log('Connected to SignalR server!');
            setIsConnected(true);
            JoinChatRoom('ss');
            // callApi();
            if (chatHubProxyRef.current) {
              chatHubProxyRef.current
                .invoke('Hello') // 假设Hello方法不需要参数，或者传递 null/undefined 作为空参数
                .then((res) => {
                  console.log('Response from Hello method:', res);
                });
            }
          })
          .fail((error: Error) => {
            console.log(error);
            // console.error('Failed to connect to SignalR server: ', error);
          });

        // 断开连接的逻辑也应该在这里
        return () => {
          connection.stop();
        };
      });
    }
  }, []);
  const JoinChatRoom = (chatroomId: string) => {
    const chatHubProxy = chatHubProxyRef.current;
    if (chatHubProxy) {
      chatHubProxy
        .invoke('JoinLiveRoom', chatroomId)
        .done((response) => {
          console.log('JoinLiveRoom:', response);
        })
        .fail((error) => {
          // 失败逻辑...
        });
    } else {
      console.error('ChatHubProxy is not initialized.');
    }
  };

  // const callApi = () => {
  //   // 使用 fetch 发送 POST 请求
  //   fetch('https://4.224.41.94/api/chats/joinroom/', {
  //     method: 'POST', // 指定请求方法为 POST
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({ receiverId: 8}), // 将对象转换为 JSON 字符串
  //   })
  //     .then((response) => {
  //       console.log('API called successfully:', response);

  //       return response.json(); // 解析 JSON 数据
  //     })
  //     .then((response) => {
  //       console.log('API called successfully:', response);
  //       // 在这里处理 API 调用成功的逻辑
  //       setMessages(response.chatcontent);
  //       const { chatroomId } = response;
  //       setChatroomId(chatroomId); // api会返回chatroomId，

  //       let userIdSender = 6; // 这里我先手动设置参数userIdSender=5
  //       let message = 'message test for 11@11.com user'; // 这里我先手动设置参数message string

  //       // 调用下面的方法
  //       JoinChatRoom(chatroomId); // 先加入2人专属的聊天室
  //       // SendMessageToRoom(chatroomId, userIdSender, message); // 之后通过这个function发送消息
  //     })
  //     .catch((error) => {
  //       console.error('Failed to call API:', error);
  //       // 在这里处理 API 调用失败的逻辑
  //     });
  // };
  // const JoinChatRoom = (chatroomId:number) => {
  //   const chatHubProxy = chatHubProxyRef.current;
  // if (chatHubProxy) {
  //   chatHubProxy.invoke('JoinChatRoom', chatroomId)
  //     .done((response) => {
  //       console.log('Joined chat room successfully:', response);

  //     })
  //     .fail((error) => {
  //       // 失败逻辑...
  //     });
  // } else {
  //   console.error('ChatHubProxy is not initialized.');
  // }
  // };

  // const handleSendMessage = () => {
  //   if (!isConnected) {
  //     console.error('SignalR connection is not established.');
  //     return;
  //   }

  //   if (chatroomId && newMessage.trim() !== '') {
  //     // console.log('Sending message...', newMessage);
  //     const chatHubProxy = chatHubProxyRef.current;
  //     chatHubProxy
  //       ?.invoke('SendMessageToRoom', chatroomId, userIdSender, newMessage)
  //       .done(() => {
  //         console.log('Message sent successfully');
  //         setNewMessage(''); // 清空输入框
  //       })
  //       .fail((error) => {
  //         console.error('Failed to send message: ', error);
  //       });
  //   }
  // };
  const handleSendMessage = () => {
    if (!isConnected) {
      console.error('SignalR connection is not established.');
      return;
    }

    if (newMessage.trim() !== '') {
      console.log('Sending message...', newMessage);
      const chatHubProxy = chatHubProxyRef.current;
      chatHubProxy
        ?.invoke('SendMessageToLiveRoom', "ss", userIdSender, newMessage)
        .done(() => {
          console.log('Message sent successfully');
          setNewMessage(''); // 清空输入框
        })
        .fail((error) => {
          console.error('Failed to send message: ', error);
        });
    }
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
        <ul
          className="flex flex-col gap-16 overflow-y-auto max-h-[400px]"
          ref={messagesEndRef}>
          {messages?.map((msg, index) => (
            <li key={index} className="flex items-center gap-16">
              {/* <span>{msg.sender}</span> */}
              <p className="text-14">{msg?.message}</p>
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
