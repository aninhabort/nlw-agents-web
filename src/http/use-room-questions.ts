import { useQuery } from '@tanstack/react-query'
import type { GetRoomQuestionsResp } from './types'

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/rooms/${roomId}/questions`
      )
      const result: GetRoomQuestionsResp = await response.json()

      return result
    },
  })
}