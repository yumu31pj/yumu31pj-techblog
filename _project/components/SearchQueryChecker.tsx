"use client";
import { useEffect, useState } from "react";

const SearchQueryChecker = () => {
  const [referrerData, setReferrerData] = useState<string>("");
  useEffect(() => {
    const referrer = document.referrer;

    if (referrer.includes("google.com")) {
      console.log(referrer);
    }
    setReferrerData(referrer);
  }, []);

  return null; // dont't be rendered
};

export default SearchQueryChecker;