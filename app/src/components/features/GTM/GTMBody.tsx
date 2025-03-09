import type { GTMTagIDType } from "~/src/components/features/GTM/GTM.types";

const GTMBody = (props: GTMTagIDType) => {
  const { id } = props;

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export default GTMBody;