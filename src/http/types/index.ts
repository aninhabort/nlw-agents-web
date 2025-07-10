export type GetRoomsResp = Array<{
  id: string;
  name: string;
  questionsCount: number;
  createdAt: string;
}>;

export type GetRoomQuestionsResp = Array<{
  id: string
  question: string
  answer: string | null
  createdAt: string
  isGeneratingAnswer?: boolean
}>;

export type CreateRoomResp = {
  name: string
  description: string
};

export type CreateRoomReq = {
  name: string
  description: string
};

export type CreateQuestionResp = {
  questionId: string
  answer: string | null
}

export type CreateQuestionReq = {
  question: string
}