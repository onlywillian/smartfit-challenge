"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import iconHour from "@/public/images/icon-hour.png";

export default function Form() {
  const router = useRouter();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const elementsArray = Array.from(e.currentTarget.elements);
    const period = elementsArray.filter(
      (element: any, index) => element.checked === true && index < 3
    ) as HTMLInputElement[];

    const closedUnits = (e.currentTarget.elements[3] as HTMLInputElement)
      .checked;

    router.replace(`?closedUnits=${closedUnits}&period=${period[0].value}`);
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
        <label className="flex gap-4 my-4">
          <input type="radio" name="radio" value="manha" />
          Manhã 06:00 às 12:00
        </label>
        <hr />
        <label className="flex gap-4 my-4">
          <input type="radio" name="radio" value="tarde" />
          Tarde 12:01 às 18:00
        </label>
        <hr />
        <label className="flex gap-4 my-4">
          <input type="radio" name="radio" value="noite" />
          Noite 18:01 às 23:00
        </label>

        <hr />

        <div className="flex flex-col items-center">
          <label className="flex gap-4 my-4">
            <input type="checkbox" />
            <h2>Exibir unidades fechadas</h2>
          </label>
          <h2>Resultados encontrados: {}</h2>

          <div className="flex flex-col gap-4 mt-4 lg:flex-row">
            <button className="bg-yellow h-16 w-56 font-bold">
              ENCONTRAR UNIDADE
            </button>
            <button className="h-16 w-56 font-bold border" type="reset">
              LIMPAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
