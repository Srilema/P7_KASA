import '../App.css';
import Gallery from "../components/Gallery";
import Heading from "../components/Heading";
import Background from "../images/eric-murht.png";

function Home() {
  document.title = "Kasa - Home";
  return <>
    <Heading Image={Background} Alt="Background of sea and cliff">
      <>Chez vous, partout et ailleurs</>
    </Heading>
    <Gallery />
    </>
};

export default Home;
