import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import * as Yup from 'yup';
const socket = io.connect('http://localhost:8081');
const ChatSchema = Yup.object().shape({
  username: Yup.string().required('Wajib diisi'),
  roomCode: Yup.string()
    .min(2, 'roomCode minimal 2 karakter')
    .required('Wajib diisi'),
});

const Home = () => {
  const [message, setMessage] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [initialValue, setInitialValue] = useState({
    username: '',
    roomCode: '',
  });
  const [showChat, setShowChat] = useState(false);

  const onSubmit = async (values) => {
    let result = await socket.emit('join_room', values);
    setInitialValue(values);
    setShowChat(true);
    console.log('r', result);
  };

  const sendMessage = async () => {
    if (message !== '') {
      console.log('message ', message);
      const messageData = {
        room: initialValue.roomCode,
        author: initialValue.username,
        message: message,
        time: new Date(Date.now()),
      };
      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);

      return setMessage('');
    }
  };

  const sendBroadcastMessage = async () => {
    const messageData = {
      author: initialValue.username,
      message: broadcastMessage,
      time: new Date(Date.now()),
    };

    await socket.emit('broadcast', messageData);
    setBroadcastMessage('');
  };

  useEffect(() => {
    socket.on('received_message', (data) => {
      console.log('message data', data);
      setMessageList((list) => [...list, data]);
    });
    // socket.on('broadcast_received', (data) => {
    //   console.log('broadcast data', data);
    //   setMessageList((list) => [...list, data]);
    // });
  }, [socket]);

  console.log('socket', socket);
  console.log('msgList', messageList)
  return (
    <section className="w-screen px-[100px] py-10">
      {!showChat ? (
        <Formik
          initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={ChatSchema}
          enableReinitialize
        >
          {({
            values,
            handleChange,
            touched,
            errors,
            isSubmitting,
            handleSubmit,
          }) => (
            <div className="flex items-center, justify-center">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    className="border"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="username"
                    error={errors.username && touched.username}
                  />
                  {errors.username && touched.username && (
                    <p className="text-red-500">{errors.username}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="roomCode"
                    className="border"
                    value={values.roomCode}
                    onChange={handleChange}
                    placeholder="kode room"
                    error={errors.roomCode && touched.roomCode}
                  />
                  {errors.roomCode && touched.roomCode && (
                    <p className="text-red-500">{errors.roomCode}</p>
                  )}
                </div>
                <button type="submit">Masuk</button>
              </form>
            </div>
          )}
        </Formik>
      ) : (
        // <div>ini chat</div>
        <>
          <div className="p-3 rounded border-black border w-fit drop-shadow-lg mb-5">
            <h1 className="text-black font-bold uppercase text-lg">
              {initialValue?.username}
            </h1>
            <h1 className="text-black font-bold uppercase text-lg">
              {initialValue?.roomCode}
            </h1>
          </div>
          <div className="mb-[120px]">
            {messageList.map((i, index) => (
              <div key={index} className="w-full  flex">
                {i.author === initialValue.username ? (
                  <div className="w-full flex justify-end mb-5">
                    <div className="bg-blue-200 p-2 border rounded-md">
                      {i.message}
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-start mb-5">
                    <div className="bg-green-200 p-2 border rounded-md">
                      {i.message}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-[90%] fixed bottom-5 flex flex-col justify-center border-t border-black bg-white">
            <div className="w-full">
              <div className="grid grid-cols-10 mt-5 gap-5">
                <div className="border border-collapse col-span-8 py-1">
                  <input
                    className="w-full py-1"
                    type="text"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    fluid
                    focus
                    placeholder="Ketik..."
                  />
                </div>
                <div className="col-span-2">
                  <button
                    className="w-full py-2 bg-green-500"
                    fluid
                    content="kirim"
                    onClick={sendMessage}
                  >
                    Simpan
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-10 mt-5 gap-5">
                <textarea
                  value={broadcastMessage}
                  onChange={(e) => {
                    setBroadcastMessage(e.target.value);
                  }}
                  className="border border-collapse col-span-8 py-1"
                  placeholder="Ketik..."
                />
                <div className="col-span-2">
                  <button
                    className="w-full py-2 bg-blue-500"
                    onClick={sendBroadcastMessage}
                  >
                    Kirim Broadcast
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
