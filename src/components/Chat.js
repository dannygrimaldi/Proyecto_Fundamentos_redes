import { io } from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';
import { LiMensaje, UlMensajes } from './ui-components';
import {Button} from "@nextui-org/react";
import { useTheme } from 'next-themes';


const socket = io('http://192.168.100.3:3000');

function Chat() {
  const { theme } = useTheme();
  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);
  const ulMensajesRef = useRef(null); // Referencia a la lista de mensajes

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) => {
      setMensajes(mensajes => [...mensajes, data]);
      scrollToBottom(); // Llamar a la función para desplazarse hacia abajo
    });

    return () => {
      socket.off('connect');
      socket.off('chat_message');
    }
  }, []);

  const enviarMensaje = () => {
    socket.emit('chat_message', {
      usuario: socket.id,
      mensaje: nuevoMensaje
    });
    setNuevoMensaje(''); // Limpiar el input después de enviar el mensaje
  }

  // Función para desplazar el scroll hacia abajo
  const scrollToBottom = () => {
    ulMensajesRef.current.scrollTop = ulMensajesRef.current.scrollHeight;
  };

  useEffect(() => {
    // Scroll hacia abajo al principio
    scrollToBottom();
  }, [mensajes]); // Ejecutar cuando se actualizan los mensajes


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      enviarMensaje(); // Llamar a la función enviarMensaje cuando se presiona Enter
    }
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto bg-gray-500 p-4 rounded-lg w-100 bg-opacity-10">
       

      <div style={{ display: 'flex', alignItems: 'center'  }}>
      <span className={`flex w-2 h-2 me-3 m-2  ${isConnected ? 'bg-green-400' : 'bg-red-500'} rounded-full`}></span>
      <h2 className="text-lg md-4">{isConnected ? 'Conectado' : 'Sin Conexión'}</h2>
      </div>
        <UlMensajes className="overflow-auto w-96  h-64" ref={ulMensajesRef} theme={theme}>
          {mensajes.map((mensaje, index) => (
            <LiMensaje key={index} theme={theme}>{mensaje.usuario}: {mensaje.mensaje}</LiMensaje>
          ))}
        </UlMensajes>
        <div className="flex mt-4">
        <input
            type="text"
            value={nuevoMensaje}
            onChange={e => setNuevoMensaje(e.target.value)}
            onKeyPress={handleKeyPress} // Manejar la tecla Enter
            className={`flex-1 p-2 rounded-l-md ${theme === 'dark' ? 'bg-gray-800' : ''}`} 
          />
          <Button onClick={enviarMensaje} >Enviar</Button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
