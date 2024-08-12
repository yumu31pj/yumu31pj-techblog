
import { microCMSAuth } from "@/_src/configs/microCMSApi";
import { createClient } from "microcms-js-sdk";

export const getMicroCMSConnection = () => {
  return createClient({
    serviceDomain: microCMSAuth.serviceDomain || '',
    apiKey: microCMSAuth.apiKey || '',
  });
}