"use server";

import { ENV_ORIGIN } from "./constants";

export const fetchDataFromRoute = async <T>(url: string) => {
  const response = await fetch(`${ENV_ORIGIN}${url}`);

  if (!response.ok) {
    throw new Error(
      response.statusText || "An error occurred while fetching data"
    );
  }
  const data = (await response.json()) as T[];

  return data;
};


