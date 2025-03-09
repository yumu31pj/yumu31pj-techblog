export type TitleProps = {
  text: string;
  tag: "h2" | "h3" | "h4" | "h5" | "h6";
}


// Buttons
export type LinkButtonProps = {
  linkText: string;
  linkTo: string;
  type?: 'flip' | '3d' | 'label' | 'moving-border'
  isExternal?: boolean;
}