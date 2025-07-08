import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResp = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const resp = await fetch("http://localhost:3000/rooms");
      const result: GetRoomsAPIResp = await resp.json();

      return result;
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <div className="flex flex-col gap-1">
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
