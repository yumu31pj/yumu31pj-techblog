export type TitleProps = {
  text: string;
  tag: "h2" | "h3" | "h4" | "h5" | "h6";
}

export type LinkItemType = {
  title: string;
  linkTo: string;
  isExternal?: boolean;
}


// Buttons
export type LinkButtonProps = {
  linkText: string;
  linkTo: string;
  type?: 'flip' | '3d' | 'label' | 'moving-border'
  isExternal?: boolean;
}

// Images
export type PictureType = {
  srcSP: string;
  srcSPWebp?: string;
  srcPC?: string;
  srcPCWebp?: string;
  widthSP?: number;
  heightSP?: number;
  widthPC?: number;
  heightPC?: number;
  altText: string;
  isLazy?: boolean;
  breakpoint?: number
}