import { React } from "react";
import "./Home.css";
import Navbar1 from "./Navbar1";
import Cards from "../cards/Cards";

const Home = (props) => {
  return (
    <>
      <div className="Home">
        <Cards
          text="Hawk Tubley was born in California and has spent considerable time since
        then living in places like Montana, New York and Alabama. Hawk Tubley
        now lives in Philadelphia, Pennsylvania, where he eats, sleeps, rides
        the bus, and makes music, with The Ozymandians - bass player Andres
        “Doug Deeper” Villamil, drummer Mike Luxor Szekely guitarist Andy
        Major Headspin Davis and Dave The Many Fingered Sphinx Cope on
        keyboards and guitar Their newest record is Chocolate Maple Squeeze
        Play featuring a genre-bending mix of songs characterized by
        exceptional songwriting and Hawk Tubleys distinctive voice filtered
        through a lens of wry eccentricity Hawk Tubley is also an artist
        illustrator and writer and is currently working on a book called
        Folksongs for the Apocalypse which probably will not be ready in time"
        />
      </div>
    </>
  );
};
export default Home;
