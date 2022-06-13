import Pagetemplate from "../components/page_template";
import { Gradientbutton } from "../components/Gradientbutton";
import { Defaultbutton } from "../components/Defaultbutton";
import { Button, Grid } from "@nextui-org/react";
import Head from "next/head";

function registerButton() {
  return;
}

export default function Home() {
  return (
    <html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="flex flex-col w-[100%] h-[100vh] justify-center items-center bg-gradient-to-r from-blue-800 to-pink-800">
        <p className="font-[montserrat] text-[10vh] font-[600]">Welcome.</p>
        <div className="flex flex-col items-center">
          <Defaultbutton text={"Login"} size={"xl"} />
          <p className="font-[montserrat] text-[3vh] my-[0.1vh]">
            In case you haven't
          </p>
          {registerButton}
          <Gradientbutton text={"Register"} size={"lg"} />
        </div>
      </div>
    </html>
  );
}
