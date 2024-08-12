import { BlogTotalCountContext } from "@/_src/contexts/BlogTotalCountContext.provider";
import { useContext } from "react";

const ProviderTest = () => {
  const {totalCountNum, setTotalCountNum} = useContext(BlogTotalCountContext);

  return (
    <>
      {totalCountNum !== undefined ? (
        <p>Total Count: {totalCountNum}</p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default ProviderTest;