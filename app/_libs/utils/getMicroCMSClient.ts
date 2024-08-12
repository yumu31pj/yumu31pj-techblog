
import { createClient } from "microcms-js-sdk";
import { MicroCMSAuthType } from "../types/MicroCMSAuth.types";

export const getMicroCMSConnection = (microCMSAuth? : MicroCMSAuthType) => {

  let serviceDomain: string = "";
  let apiKey: string = "";

  if (microCMSAuth) {
    serviceDomain = microCMSAuth.serviceDomain;
    apiKey = microCMSAuth.apiKey;
  } else {
    serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "";
    apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || ""
  }

  return createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey,
  });
}