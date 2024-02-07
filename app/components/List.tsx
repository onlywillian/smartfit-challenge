import ListItem from "./ListItem";

export default async function List() {
  const response = await fetch(
    "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
  );
  const data = await response.json();

  return (
    <div className="flex flex-col gap-4 p-4">
      {data.locations.map((location: any) => (
        <ListItem location={location} />
      ))}
    </div>
  );
}
