import Image from "next/image";
import iconHour from "@/public/images/icon-hour.png";

export default function Form() {
  return (
    <div className="p-4">
      <div className="rounded-md border-2 border-dark-gray h-full p-4">
        <div className="flex items-center gap-4">
          <Image src={iconHour} alt="Horario" height={30}></Image>
          <h1>Horário</h1>
        </div>
        <h1 className="my-4">Qual período quer treinar?</h1>
        <hr />
        <div className="flex gap-4 my-4">
          <input type="radio" name="radio" id="manha" />
          <label htmlFor="manha">Manhã 06:00 às 12:00</label>
        </div>
        <hr />
        <div className="flex gap-4 my-4">
          <input type="radio" name="radio" id="tarde" />
          <label htmlFor="tarde">Tarde 12:01 às 18:00</label>
        </div>
        <hr />
        <div className="flex gap-4 my-4">
          <input type="radio" name="radio" id="noite" />
          <label htmlFor="noite">Noite 18:01 às 23:00</label>
        </div>
        <hr />
        <div className="flex gap-4 my-4">
          <input type="checkbox" />
          <h2>Exibir unidades fechadas</h2>
        </div>
        <h2>Resultados encontrados: 0</h2>

        <button className="bg-yellow h-16 w-56 font-bold my-4">
          ENCONTRAR UNIDADE
        </button>
        <button className="h-16 w-56 font-bold border">LIMPAR</button>
      </div>
    </div>
  );
}
