"use client";
import { useEffect, useState } from "react";

const SearchQueryChecker = () => {
  const [referrerData, setReferrerData] = useState<string>("");
  useEffect(() => {
    const referrer = document.referrer;

    if (referrer.includes("google.co.jp")) {
      console.log("Google: " + referrer);
    } else {
      console.log("Not Google: " + referrer);;
    }
  }, []);

  return null; // dont't be rendered
};

export default SearchQueryChecker;