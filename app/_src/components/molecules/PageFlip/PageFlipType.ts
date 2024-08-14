import { MicroCMSAuthType } from "@/_libs/types/MicroCMSAuth.types";

type PageFlipType = {
  microCMSAuth: MicroCMSAuthType
  endpointId: string;
  contentId: string;
  categoryName?: string;
};

export default PageFlipType;