"use client";

import Image from "next/image";
import iconHour from "@/public/images/icon-hour.png";

export default function Form({ total }: any) {
  function handleFormSubmit(e: any) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="p-4">
      <form
        className="rounded-md border-2 border-dark-gray h-full p-4"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex items-center gap-4">
          <Image src={iconHour} alt="Horario" height={30}></Image>
          <h1>Horário</h1>
        </div>
        <h1 className="my-4 text-xl">Qual período quer treinar?</h1>
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

        <div className="flex flex-col items-center">
          <div className="flex gap-4 my-4">
            <input type="checkbox" />
            <h2>Exibir unidades fechadas</h2>
          </div>
          <h2>Resultados encontrados: {total}</h2>

          <div className="flex flex-col gap-4 mt-4 lg:flex-row">
            <button className="bg-yellow h-16 w-56 font-bold">
              ENCONTRAR UNIDADE
            </button>
            <button className="h-16 w-56 font-bold border">LIMPAR</button>
          </div>
        </div>
      </form>
    </div>
  );
}
