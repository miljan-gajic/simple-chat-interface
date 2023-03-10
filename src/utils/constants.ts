// I always have a constants file so that I can avoid magic strings and numbers

export const API_BASE_URL = `https://chatty.doodle-test.com/api/chatty/v1.0/?token=${
  import.meta.env.VITE_TOKEN
}`;

export const SORTING_MESSAGES = {
  ASC: "asc",
  DESC: "desc",
};
