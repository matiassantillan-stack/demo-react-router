import { MessageCircle } from "lucide-react";

const noChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <MessageCircle className="w-24 h-24 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-600">
        No hay chat seleccionado
      </h2>
      <p className="text-gray-400 mt-2">Selecciona un chat para comenzar</p>
    </div>
  );
};

export default noChatSelectedPage;
