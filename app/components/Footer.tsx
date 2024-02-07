import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <div className="bg-dark-grey h-40 w-full flex flex-col items-center justify-center text-white">
      <Image src={logo} alt="Logo" />
      Todos os direitos reservados - 2020
    </div>
  );
}
