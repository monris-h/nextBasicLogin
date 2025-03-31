"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginFormData {
  username: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    if (data.username === "admin" && data.password === "1234") {
      router.push("/home");
    } else {
      setErrorMessage("Credenciales incorrectas!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campo Usuario */}
          <div>
            <label className="block text-sm font-medium mb-1">Usuario</label>
            <Input
              type="text"
              {...register("username", { required: "El usuario es obligatorio" })}
              className="w-full"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message as string}</p>
            )}
          </div>

          {/* Campo Contraseña */}
          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <Input
              type="password"
              {...register("password", { required: "La contraseña es obligatoria" })}
              className="w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message as string}</p>
            )}
          </div>

          {/* Botón de envío */}
          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  );
}
