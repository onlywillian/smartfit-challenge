import parse from "html-react-parser";

export default function ListItem({ location }: any) {
  return (
    <div className="bg-zinc-100 p-4 gap-4 flex flex-col h-96" key={location.id}>
      {location.opened ? (
        <h2 className="text-green font-bold">Aberto</h2>
      ) : (
        <h2 className="text-red font-bold">Fechado</h2>
      )}
      <h2 className="text-xl font-bold text-dark-grey">{location.title}</h2>

      {location.content ? (
        <div>{parse(location.content)}</div>
      ) : (
        <div>
          {location.street} - {location.region} <br />
          {location.city_name}, {location.uf}
        </div>
      )}

      <hr />
      {location.opened ? (
        <div className="flex gap-8">
          {location.schedules.map((schedule: any) => (
            <div>
              <h1 className="font-bold text-xl">{schedule.weekdays}</h1>
              <p>{schedule.hour}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
