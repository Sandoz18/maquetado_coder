import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+521234567890"
      accountName="Soporte"
      statusMessage="Normalmente respondemos en una hora"
      avatar="https://api.dicebear.com/7.x/bottts/svg?seed=Felix"
      chatMessage="Hola, en qué puedo ayudarte hoy?"
    />
  );
};