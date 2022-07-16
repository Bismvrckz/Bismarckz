import { getSession } from "next-auth/react";
import React from "react";

function MyProfilePage(props) {
  return (
    <div className="bg-gray-500 opacity-[.2] flex items-center justify-center w-[98%] h-[98%]">
      {" "}
      My Profile Page
    </div>
  );
}

export default MyProfilePage;

export async function getServerSideProps() {
  try {
    const session = await getSession();

    if (!session) return (props = null);
    // resultSession
    // accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3OTczODQ1NTE3LCJ1c2VybmFtZSI6IjEyMyIsImlhdCI6MTY1Nzk3NDcwNX0.P3sxGVgKGbIRzGVHAPrkC8Lc6moegAFRObd-MiNuk5s";
    // user_id: 1657973845517;
    // username: "123";
  } catch (error) {
    console.log({ error });
    return (props = null);
  }
}
