import Tombol from "../../components/Tombol";
import Alert from "@mui/material/Alert";

function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column "
      style={{ height: "100vh" }}
    >
      <h1>
        Halaman <br /> Rumah
      </h1>
      <Tombol>Makan</Tombol>
    </div>
  );
}

export default Home;
