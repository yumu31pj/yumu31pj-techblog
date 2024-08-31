import { MicroCMSAuthType } from "@/types/MicroCMSAuth.types";


type PageFlipType = {
  microCMSAuth: MicroCMSAuthType
  endpointId: string;
  contentId: string;
  categoryName?: string;
};

export default PageFlipType;