import Image from "next/image";
import rmMask from "@/public/images/recommended-mask.png";
import rqMask from "@/public/images/required-mask.png";
import rqTowel from "@/public/images/required-towel.png";
import rmTowel from "@/public/images/recommended-towel.png";
import ptFoutain from "@/public/images/partial-fountain.png";
import fbFoutain from "@/public/images/forbidden-fountain.png";
import rqLockroom from "@/public/images/required-lockerroom.png";
import ptLockroom from "@/public/images/partial-lockerroom.png";
import fbLockroom from "@/public/images/forbidden-lockerroom.png";

export default function Legend() {
  return (
    <div className="p-4">
      <div className="bg-zinc-100 rounded-md p-4 flex flex-col items-center gap-8">
        <div>
          <h2 className="font-bold text-center text-xl ">Máscara</h2>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center items-center">
              <Image src={rqMask} alt="Required mask" height={60} />
              <h3>Obrigatório</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={rmMask} alt="Recommended mask" height={60} />
              <h3>Recomendado</h3>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-center text-xl ">Toalha</h2>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center items-center">
              <Image src={rqTowel} alt="Required mask" height={60} />
              <h3>Obrigatório</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={rmTowel} alt="Recommended mask" height={60} />
              <h3>Recomendado</h3>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-center text-xl ">Bebedouro</h2>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center items-center">
              <Image src={ptFoutain} alt="Required mask" height={60} />
              <h3>Parcial</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={fbFoutain} alt="Recommended mask" height={60} />
              <h3>Proibido</h3>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-center text-xl ">Vestiarios</h2>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center items-center">
              <Image src={rqLockroom} alt="Required mask" height={60} />
              <h3>Liberado</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={ptLockroom} alt="Recommended mask" height={60} />
              <h3>Parcial</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={fbLockroom} alt="Recommended mask" height={60} />
              <h3>Fechado</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
