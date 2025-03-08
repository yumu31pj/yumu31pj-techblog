import { createClient } from "microcms-js-sdk";

/**
 * Create MicroCMS Client
 * @param serviceDomain 
 * @param apiKey 
 * @returns 
 */
export const getMicroCMSClient = (serviceDomain: string, apiKey: string) => {
  const client = createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey
  })

  return client;
}