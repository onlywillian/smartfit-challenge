import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Header() {
  return (
    <div>
      <div className="bg-black w-screen h-20 flex items-center justify-center">
        <Image src={logo} alt="Logo"></Image>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">REABERTURA SMART FIT</h1>
        <div className="w-20 h-2 bg-black my-4"></div>
        <h3>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </h3>
      </div>
    </div>
  );
}
