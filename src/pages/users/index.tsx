import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      Users page, click <Link href={"/user/123"}>here</Link> to go to user id
      123 page
    </div>
  );
};

export default index;
