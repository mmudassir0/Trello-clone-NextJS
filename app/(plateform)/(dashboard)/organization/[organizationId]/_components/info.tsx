"use client";

import { useOrganization } from "@clerk/nextjs";

const Info = () => {
  const { organization, isLoaded } = useOrganization();
  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return <div>Info</div>;
};

export default Info;
//4-40-00
