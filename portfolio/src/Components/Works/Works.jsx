// import React from "react";
// import "./works.css";
// import shopify from "../../img/Shopify.png";
// import Upwork from "../../img/Upwork.png";
// import fiver from "../../img/fiverr.png";
// import Facebook from "../../img/Facebook.png";
// import Amazon from "../../img/amazon.png";

// const Works = () => {
//   return (
//     <div className="works">
//       <div className="w-left">
//       <div className="awesome">
//         <span>Works for All these</span>
//         <span>Brands and Clints</span>
//         <span>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
//           nulla.
//           <br />
//           sisdabsdjhasdjgvasdgavsdhgahsgdahsdcghascdhg
//           <br />
//           sndkajsdkjaskdksabashbashbjahsbjashdbjhabsdj
//           <br />
//           sandkjsdkajsdkjasdkajsdajdkasdkasdasjdjadasd
//         </span>
//         <button className="button s-button">Hire me</button>
//         <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
//         </div>
//         </div>

//         <div className="w-right">
//           <div className="w-mainCircle">
//               <div className="w-secCircle">
//               <img src={shopify} alt="" />
//               </div>
//               <div className="w-secCircle">
//               <img src={Facebook} alt="" />
//               </div>
//               <div className="w-secCircle">
//               <img src={Amazon} alt="" />
//               </div>
//               <div className="w-secCircle">
//                 <img src={fiver} alt="" />
//               </div>
//               <div className="w-secCircle">
//               <img src={Upwork} alt="" />
//               </div>
//           </div>
//           <div className="w-backCircle blue" style={{ background:'#ffffff', left:'18rem', top:'0rem'} }>hellow</div>
//         <div className="w-backCircle yellow">hellosasasdw</div>
//         </div>
//     </div>
//   );
// };

// export default Works;

import "./works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const Works = () => {
  return (
    <div className="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
