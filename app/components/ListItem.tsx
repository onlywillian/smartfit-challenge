import parse from "html-react-parser";
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

const images = {
  mask: {
    recommended: rmMask,
    required: rqMask,
  },
  towel: {
    recommended: rmTowel,
    required: rqTowel,
  },
  fountain: {
    partial: ptFoutain,
    forbidden: fbFoutain,
  },
  lockroom: {
    allowed: rqLockroom,
    partial: ptLockroom,
    closed: fbLockroom,
  },
};

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
        <>
          <div className="flex gap-8">
            {location.mask && (
              <Image
                src={images.mask[location.mask as keyof typeof images.mask]}
                alt="Mask"
                height={60}
              />
            )}

            {location.towel && (
              <Image
                src={images.towel[location.towel as keyof typeof images.towel]}
                alt="Mask"
                height={60}
              />
            )}

            {location.fountain != "not_allowed" && (
              <Image
                src={
                  images.fountain[
                    location.fountain as keyof typeof images.fountain
                  ]
                }
                alt="Mask"
                height={60}
              />
            )}

            {location.locker_room && (
              <Image
                src={
                  images.lockroom[
                    location.locker_room as keyof typeof images.lockroom
                  ]
                }
                alt="Mask"
                height={60}
              />
            )}
          </div>
          <div className="flex gap-8">
            {location.schedules.map((schedule: any) => (
              <div>
                <h1 className="font-bold text-xl">{schedule.weekdays}</h1>
                <p>{schedule.hour}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
