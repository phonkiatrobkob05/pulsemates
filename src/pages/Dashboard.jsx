import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
Navbar
function Dashboard() {
  return (
    <div>
      <Navbar/>
      <section>
        <img src="public/rayong.png" alt="" />
      </section>
      <Menu/>
    </div>
  );
}
export default Dashboard;