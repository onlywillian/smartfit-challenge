"use client";

import { useState } from "react";
import ListItem from "./ListItem";

export default function List({ data }: any) {
  const [flagOfClosedUnits, setFlagOfClosedUnits] = useState(false);

  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 p-4">
      {flagOfClosedUnits
        ? data.locations.map((location: any) => (
            <ListItem location={location} />
          ))
        : data.locations
            .filter((location: any) => location.opened == true)
            .map((location: any) => <ListItem location={location} />)}
    </div>
  );
}
