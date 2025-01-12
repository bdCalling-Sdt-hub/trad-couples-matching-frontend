/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */  
//@ts-nocheck
"use client";
import { UserContext } from "@/provider/User";
import { imageUrl } from "@/redux/base/baseApi";
import { useCreateInitialChatMutation, useGetChatListQuery, useGetMessageListQuery, useSendMessageMutation } from "@/redux/features/chat/chatSlice";
import { Dropdown, Form, Input } from "antd";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

type TMessageList = {
  participants: Participant[];
  _id: string;
  lastMessage: LastMessage;
};

type Participant = {
  _id: string;
  name: string;
  image: string;
  address: string;
};

type LastMessage = {
  _id: string;
  sender: string;
  text: string;
  createdAt: string;
  image: string;
};

const menuItems = [
  { label: "View Profile", key: "0" },
  { label: "Add to Favorites", key: "1" },
  { label: "Send Private Key", key: "2" },
  { label: "Block", key: "3" },
  { label: "Report", key: "4" },
].map(item => ({
  label: <p className="text-[15px] font-medium hover:text-primary text-[#A3A3A3]">{item.label}</p>,
  key: item.key,
}));




const ChatClient = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [person, setPerson] = useState<TMessageList | null>();
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { data: messages } = useGetChatListQuery(keyword)
  const [messageInput, setMessageInput] = useState("");
  const [sendMessage] = useSendMessageMutation();
  const [createInitialChat] = useCreateInitialChatMutation()
  const { data: getMessageList } = useGetMessageListQuery(person?._id)
  const [messageList, setMessageList] = useState();
  const { socket, user } = useContext(UserContext);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (getMessageList) {
      setMessageList(getMessageList?.data);
    }
  }, [getMessageList]);

 
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messageList]);

 
  const handleConnection = useCallback(
    (data: any) => {
      setMessageList((prev: any) => [...prev, data]);
    },
    [setMessageList]
  );

  useEffect(() => {
    const event = `getMessage::${person?._id}`;
    socket.on(event, handleConnection);
    return () => {
      socket.off(event, handleConnection);
    };
  }, [person, socket, handleConnection]);

 
  const handleChatListRefresh = useCallback(() => {
    setKeyword((prev) => prev); 
  }, []);

  useEffect(() => {
    const event = `chat-list-update`;
    socket.on(event, handleChatListRefresh);
    return () => {
      socket.off(event, handleChatListRefresh);
    };
  }, [socket, handleChatListRefresh]);

  const handleSubmit = async () => {
    const chatId = person?._id;

    const formData = new FormData();
    formData.append("text", messageInput);
    if (image) {
      formData.append("image", image);
    }
    formData.append("chatId", chatId);

    let messageType = "";
    if (image && messageInput) {
      messageType = "both";
    } else if (image) {
      messageType = "file";
    } else if (messageInput) {
      messageType = "text";
    }
    formData.append("messageType", messageType);

    await sendMessage(formData).then((res) => {
      if (res?.data?.success) {
        setMessageInput("");
        setImage(null);
        setImageURL(null);
      }
    })
  };




  const handleMessage = async (value: TMessageList) => {
    await createInitialChat(value?._id).then((res) => {
      if (res?.data?.success) {
        setPerson(value);
        setIsChatVisible(true);
        router.push(`/chat?id=${value?.participants[0]?._id}`);

      }
    })

  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  const handleBackToList = () => {
    setIsChatVisible(false);
    router.push("/chat");
  };

  const handleCancelImage = () => {
    setImage(null);
    setImageURL(null);
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="grid grid-cols-12 lg:h-[79vh] h-full rounded-xl">
        {/* Message List */}
        <div className={`lg:col-span-4 col-span-12 bg-[#F7F7F7] ${isChatVisible ? "hidden lg:block" : ""}`}>
          <div className="h-[66px] bg-primary rounded-tl-2xl lg:rounded-tr-none rounded-tr-2xl flex items-center justify-center" />

          {/* Search */}
          <div className="mx-auto px-2 my-3">
            <Input
              placeholder="Search here..."
              prefix={<FiSearch size={20} color="#868FA0" />}
              style={{ width: "100%", height: 45, fontSize: "14px", background: "#E9E9E9" }}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          {/* Message List */}
          <div className="overflow-y-auto h-[71vh] px-2">
            {messages?.data?.map((message: TMessageList) => (
              <div
                key={message?.participants[0]?._id}
                onClick={() => handleMessage(message)}
                className={`flex justify-between px-2 py-2 rounded-lg mb-2 cursor-pointer ${person?.participants[0]?._id === message?.participants[0]?._id ? "bg-[#E7EBED]" : "bg-white"
                  }`}
              >
                <div className="flex items-center gap-1">
                  <img src={message?.participants[0]?.image?.startsWith("http") ? message?.participants[0]?.image : `${imageUrl}${message?.participants[0]?.image}`} alt="" className="rounded-full" style={{ width: "45px", height: "45px" }} />
                  <div>
                    <p className="text-[#12354E] font-medium text-[16px]">{message?.participants[0]?.name}</p>
                    <p className="text-[#6A6A6A] text-[14px]">{message?.lastMessage?.text}</p>
                  </div>
                </div>
                <p className="text-[#6A6A6A] text-[15px]">{moment(message?.lastMessage?.createdAt).format("hh:mm A")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className={`lg:col-span-8 col-span-12 bg-[#FCFCFC] ${isChatVisible ? "block" : "hidden lg:block"}`}>
          {
            person ? <div>
              <div className="flex items-center justify-between h-[66px] px-4 bg-primary rounded-tr-2xl lg:rounded-tl-none rounded-tl-2xl">
                <div className="flex items-center gap-2">
                  <button className="lg:hidden text-white" onClick={handleBackToList}>
                    <IoMdArrowRoundBack size={20} />
                  </button>
                  <img src={person?.participants[0]?.image?.startsWith("http") ? person?.participants[0]?.image : `${imageUrl}${person?.participants[0]?.image}`} alt="" className="rounded-full" style={{ width: "55px", height: "55px" }} />
                  <div>
                    <p className="text-[18px] text-white font-medium">{person?.participants[0]?.name}</p>
                    <p className="text-[16px] text-white font-normal">{person?.participants[0]?.address}</p>
                  </div>
                </div>
                <Dropdown menu={{ items: menuItems }}>
                  <BsThreeDotsVertical size={22} className="text-white cursor-pointer" />
                </Dropdown>
              </div>

              <div className="bg-[#F7F7F7] w-full h-[calc(73vh+54px)] rounded-lg relative border-x-2 border-gray-100">
                {/* Chat Messages */}
                <div className="py-6 lg:px-8 px-3 overflow-y-auto h-[72vh]">
                  {messageList?.map((value: { text: string; sender: string; messageType: string; chatId: string; image: string; createdAt: string }, index: number) => (
                    <div
                      key={index}
                      className={`flex mb-5 w-full ${user?._id === value?.sender ? "justify-end" : "justify-start"}`}
                    >
                      {value?.messageType === "image" && (
                        <div
                          className={`lg:w-3/5 w-2/3 lg:px-4 px-2 py-3 bg-[#E5E5E5] rounded-t-xl ${user?._id === value?.sender ? "rounded-bl-xl" : "rounded-br-xl"}`}
                        >
                          <img
                            style={{ width: 140, height: 140, borderRadius: 8 }}
                            src={value.image?.startsWith("http") ? value?.image : `${imageUrl}${value?.image}`}
                            alt=""
                          />
                          <p className="text-[#8B8B8B] text-[12px] text-right mt-2">
                            {moment(value?.createdAt).format("hh:mm A")}
                          </p>
                        </div>
                      )}
                      {value?.messageType === "text" && (
                        <div
                          className={`lg:w-3/5 w-2/3 lg:px-4 px-2 py-3 ${user?._id === value?.sender
                            ? "bg-[#E6F2F6] rounded-t-xl rounded-bl-xl"
                            : "bg-[#E5E5E5] rounded-t-xl rounded-br-xl"
                            }`}
                        >
                          <p className="text-[#6A6A6A]">{value?.text}</p>
                          <p className="text-[#918d8d] text-[12px] text-end">
                            {moment(value?.createdAt).format("hh:mm A")}
                          </p>
                        </div>
                      )}
                      {value?.messageType === "both" && (
                        <div
                          className={`lg:w-3/5 w-2/3 lg:px-4 px-2 py-3 ${user?._id === value?.sender
                            ? "bg-[#E6F2F6] rounded-t-xl rounded-bl-xl"
                            : "bg-[#E5E5E5] rounded-t-xl rounded-br-xl"
                            }`}
                        >
                          <img
                            style={{ width: 140, height: 140, borderRadius: 8 }}
                            src={value.image?.startsWith("http") ? value?.image : `${imageUrl}${value?.image}`}
                            alt=""
                          />
                          <p className="text-[#6A6A6A] mt-2">{value?.text}</p>
                          <p className="text-[#918d8d] text-[12px] text-end">
                            {moment(value?.createdAt).format("hh:mm A")}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="absolute bottom-1 w-full py-1">
                  {imageURL && (
                    <div className="w-fit ms-3 mb-2 bg-gray-200  flex items-center gap-2 relative ">
                      <img src={imageURL} alt="" className="w-[100px] h-[100px] p-2 " />
                      <button
                        onClick={handleCancelImage}
                        className="text-red-800 text-sm font-medium absolute -top-1 -right-1"
                      >
                        <MdOutlineCancel size={24} />
                      </button>
                    </div>
                  )}

                  <Form className="flex items-center gap-3 px-3" form={form}>
                    <Input.TextArea
                      value={messageInput}
                      placeholder="Type your message"
                      style={{
                        flex: 1,
                        height: "50px",
                        resize: "none",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        borderRadius: "9999px",// for rounded-l-full
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
                      }}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        id="img"
                        className="hidden"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="img">
                        <CiImageOn color="#607888" size={24} className="cursor-pointer" />
                      </label>
                      <button type="submit" onClick={handleSubmit} className="h-[40px] w-[40px] bg-primary text-white rounded-full flex justify-center items-center">
                        <IoSendSharp size={22} />
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
              :
              <div>
                <div className="flex items-center justify-between h-[66px] px-4 bg-primary rounded-tr-2xl lg:rounded-tl-none rounded-tl-2xl" />
                <div className="flex items-center justify-center mt-10 h-full">
                  <p className="text-[18px] text-[#12354E] font-medium">Select a chat to start messaging</p>
                </div>
              </div>
          }

        </div>
      </div>
    </div>
  );
};

export default ChatClient;
