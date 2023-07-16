import "./style.css";
import { useHistory } from "react-router-dom";

import Introduction from "../../components/Papers/Introduction";
import Footer from "../../components/Papers/Footer";

export default function Home({ setHome }) {
  let history = useHistory();
  const handleContents = () => {
    history.push("/costcaptor");
  };

  return (
    <div>
      <div >
        <Introduction/>
        <Footer/>
      </div>
    </div>
  );
}
