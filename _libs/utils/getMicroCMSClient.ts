
import { createClient } from "microcms-js-sdk";
import { microCMSAuth } from "../../app/_configs/microCMSApi";

export const getMicroCMSConnection = () => {
  return createClient({
    serviceDomain: microCMSAuth.serviceDomain || '',
    apiKey: microCMSAuth.apiKey || '',
  });
}