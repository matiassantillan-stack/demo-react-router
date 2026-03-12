import { UserCircle } from "lucide-react";

export const NoContactSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <UserCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No hay contacto seleccionado
        </h2>
        <p className="text-gray-600 mb-6">
          Por favor, selecciona un contacto de la lista para ver su información
          y detalles de la cuenta.
        </p>
      </div>
    </div>
  );
};
