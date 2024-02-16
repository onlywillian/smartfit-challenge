"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ListItem from "./ListItem";

const periods = {
  manha: "06h",
  tarde: "12h",
  noite: "17h",
};

export default function List() {
  const searchParams = useSearchParams();
  const period = searchParams.get("period") || false;
  const closedUnits = !!(searchParams.get("closedUnits") == "true") || false;

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      );
      const data = await response.json();

      setData(data);
    }
    getData();
  }, []);

  const filterData = (data: any) => {
    const locations = data?.locations || [];

    if (!period && !closedUnits) {
      return locations.filter((location: any) => location.opened == true);
    }

    return locations.filter((location: any) => {
      let hour = "";

      if (period == "noite") {
        hour = location.schedules?.[1].hour.split(" ")[0];
      } else {
        hour = location.schedules?.[0].hour.split(" ")[0];
      }

      const isPeriodMatch =
        period && hour == periods[period as keyof typeof periods];
      const isClosedUnitsMatch = closedUnits && location.opened == false;

      if (period && closedUnits) {
        return isPeriodMatch;
      } else if (period) {
        return isPeriodMatch && location.opened == true;
      } else if (closedUnits) {
        return isClosedUnitsMatch;
      }
    });
  };

  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 p-4">
      {filterData(data)?.map((location: any) => (
        <ListItem location={location} />
      ))}
    </div>
  );
}
