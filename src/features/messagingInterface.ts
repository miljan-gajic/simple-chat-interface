import { API_BASE_URL } from "utils/constants";
import type { MessagePayload } from "utils/types";

export const getAllMessages = async () => {
  const resp = await fetch(API_BASE_URL);
  return await resp.json();
};

export const addAMessage = async ({
  author,
  message: messageBody,
}: MessagePayload) => {
  const resp = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: import.meta.env.VITE_TOKEN,
    },
    body: JSON.stringify({ author, message: messageBody }),
  });
  return await resp.json();
};
