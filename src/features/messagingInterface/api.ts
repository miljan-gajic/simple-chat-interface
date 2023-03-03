import { API_BASE_URL } from "utils/constants";
import type { MessagePayload } from "utils/types";

// I have decided to use fetch API mainly because we do not need interceptors and
// There is no complex client side fetching involved to use cancel tokens and all of the additional functionalities
// that for example axios has
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

export const getMessagesFromTimestamp = async (
  timestamp: number,
  limit = 10
) => {
  const resp = await fetch(`${API_BASE_URL}&since=${timestamp}&limit=${limit}`);
  return await resp.json();
};
