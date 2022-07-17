import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axiosInstance from "../services/axiosinstance";

function Home(props) {
  const [collapsedState, setcollapsedState] = useState(true);

  console.log({ props });

  function ExplorePage() {
    return (
      <div className="bg-cyan-500 opacity-[.2] w-[98%] h-[98%]">
        <div>abc</div>
        <img src="/public/static/login.png" />
      </div>
    );
  }

  function MyProfilePage(props) {
    // console.log(props);
    const { test } = props;
    return (
      <div className="bg-gray-500 opacity-[1] flex items-center justify-center w-[98%] h-[98%]">
        {test}
      </div>
    );
  }

  const [mainPageContent, setmainPageContent] = useState("Explore");

  function mainPageClass() {
    return collapsedState
      ? "w-[94.3vw] z-[20] bg-gradient-to-r from-teal-900 to-cyan-900 flex justify-center items-center absolute top-0 right-0 h-[100vh] ease-in-out duration-300"
      : "w-[78vw] z-[20] bg-gradient-to-r from-teal-900 to-cyan-900 flex justify-center items-center absolute top-0 right-0 h-[100vh] ease-in-out duration-300";
  }
  return (
    <div className="flex text-white font-[montserrat]">
      <Navbar
        setcollapsedState={setcollapsedState}
        collapsedState={collapsedState}
        setmainPageContent={setmainPageContent}
      />
      <div className={mainPageClass()}>
        {mainPageContent == "Explore" ? ExplorePage() : MyProfilePage(props)}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession({ req: context.req });

    const noSession = "Fuckoff";

    if (!session) return { props: { noSession } };
    // console.log("jalan");

    const { accessToken, user_id, username } = session;

    // resultSession
    // accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3OTczODQ1NTE3LCJ1c2VybmFtZSI6IjEyMyIsImlhdCI6MTY1Nzk3NDcwNX0.P3sxGVgKGbIRzGVHAPrkC8Lc6moegAFRObd-MiNuk5s";
    // user_id: 1657973845517;
    // username: "123";

    const config = {
      Headers: { Authorization: `Bearer ${accessToken}` },
    };

    const res = await axiosInstance.get(`/users/${user_id}`, config);

    // console.log(res);

    return { props: { user: res.data.data.result } };
  } catch (error) {
    const errorMessage = error.message;
    return { props: { errorMessage } };
  }
}

export default Home;
