import { useQuery } from "@tanstack/react-query";
import type { GetRoomsResp } from "./types/get-rooms-response";

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/rooms')
      const result: GetRoomsResp = await response.json()

      return result
    },
  })
}