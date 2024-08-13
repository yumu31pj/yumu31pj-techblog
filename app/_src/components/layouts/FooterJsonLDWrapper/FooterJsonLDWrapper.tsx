'use client';

type Props = {
  children: React.ReactNode;
}

const FooterJsonLDWrapper = (props: Props) => {
  const {children} = props;
  return (
    <>
      {children}
    </>
  )
}

export default FooterJsonLDWrapper;