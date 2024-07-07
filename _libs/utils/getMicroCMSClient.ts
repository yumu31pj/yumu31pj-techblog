import { microCMSAuth } from "@/app/_configs/microCMSApi";
import { createClient } from "microcms-js-sdk";

export const getMicroCMSConnection = () => {
  return createClient({
    serviceDomain: microCMSAuth.serviceDomain || '',
    apiKey: microCMSAuth.apiKey || '',
  });
}