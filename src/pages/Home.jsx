import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import AddTrailer from "./AddTrailer";
import AddMusic from "./AddMusic";
import AddReview from "./AddReview";

function Home() {
  return (
    <div>
      <div className="container d-flex mt-5 align-items-center justify-content-center">
        <AddTrailer />
        <AddMusic />
        <AddReview />
      </div>

      <div className="container m-5">
        <h2>
          Welcome to{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            {" "}
            <span className="text-primary"> <i class="fa-solid fa-video"></i> MOVIE MANIA</span>
          </a>
        </h2>
        <div className="d-flex">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          itaque nobis error aut quidem, dolorum expedita adipisci ipsum
          accusantium dolorem nulla iure voluptas saepe provident, asperiores
          minus ipsa debitis corporis?Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Autem, nam. Similique, repellat facilis illum, velit
          debitis in aut doloribus nesciunt at, nemo veniam. Fugiat culpa fuga
          odio suscipit non nesciunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur accusantium debitis cumque iste quo beatae
          libero voluptatem maiores, quae ducimus fugit eligendi fuga hic
          recusandae aut magnam aspernatur esse reprehenderit. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ullam perferendis dignissimos,
          quia ipsam voluptatum omnis qui, corrupti corporis eos itaque pariatur
          earum error, minima modi nam! Suscipit nesciunt modi iste. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non, cum! Mollitia
          commodi consectetur provident iste ipsum repellat, dolorum quisquam
          laboriosam consequatur tempora laborum dolore ducimus, maxime, ab
          architecto eius distinctio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel perferendis hic alias. Velit laboriosam
          asperiores nisi quo aperiam excepturi, doloribus exercitationem qui.
          Itaque, non. Distinctio odit ducimus officiis nemo illo?lore Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque quos
          repellendus, debitis cum eius labore? Dolor doloribus odit aperiam
          inventore error beatae nobis, vel illum quos eos accusantium nemo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga
          corrupti labore laboriosam velit nisi ex minima libero odit cumque
          adipisci ab aliquid dolor.
        </p>
        <img height={'275px'} style={{marginTop:'25px',marginLeft:'50px'}} src="https://img.freepik.com/free-photo/3d-glasses-movies-clapper-board_23-2149558757.jpg?t=st=1725390647~exp=1725394247~hmac=3a9bfa606db94c667379b424d906d5df41572963032a3bb6761f7559a148ebf8&w=996" alt="" />

        </div>
        
      </div>
      <div className="container d-flex mt-5 align-items-center justify-content-center">
        <Link to="/trailer">
          <button className="Homebuttons2">
            VIEW ADDED TARILER<i class="fa-solid fa-film ms-2"></i>
          </button>
        </Link>

        <Link to='/music'>
          <button className="Homebuttons2">
            VIEW ADDED MUSIC <i class="fa-solid fa-music ms-2"></i>
          </button>
        </Link>

        <Link to='/review'>
          <button className="Homebuttons2">
            VIEW ADDED REVIEW <i class="fa-solid fa-user ms-2 "></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
