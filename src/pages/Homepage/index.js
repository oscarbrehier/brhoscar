import React from "react";
import './style.css';
import './phone-view.css';

export default function Homepage() {

    return (

       <div>
           <div className='h-100 w-100 container relative flex align-center justify-center'>
               <div className="wrapper h-100 w-inherit homepage__wrapper">
                    <div className='homepage__description w400'>
                        Full Stack Developer and Designer
                    </div>
               </div>
           </div>
       </div>

    )

};

// html
// <div>
//     <div className='hContainer relative flex align-center'>
//         <div className='hContainer__wrapper h-auto w-auto column'>
//             <div className='hContainer__wrapper--h1'>
//                 <h1>Oscar</h1>
//                 <h1>Bréhier</h1>
//             </div>
//             <div className='hContainer__wrapper--p'>
//                 <p className='tBlack'>
//                     I'm a self taught front-end developer
//                     <br/>
//                     and designer
//                 </p>
//             </div>
//         </div>
//     </div>
// </div>

// css
// @import "../../styles/index.css";
//
// .hContainer {
//     /*margin-top: 25vh; */
//     height: 100vh;
//     background: url("../../images/background-01.jpg");
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// }
//
// .hContainer__wrapper {
//     margin: 0 15vw;
// }
//
// .hContainer__wrapper--h1 {
//     margin-left: -3px;
//     font-weight: 700;
//     font-size: 40px;
//     line-height: 72px;
//     letter-spacing: -0.936px;
// }
//
// .hContainer__wrapper--p {
//     color: #797f85;
//     font-weight: 500;
//     font-size: 20px;
//     letter-spacing: -0.24px;
//     margin-top: 10px;
// }

// responsive
//
// @media only screen and (max-width: 1420px) {
//
// .hContainer__wrapper {
//         margin: 0 5vw;
//     }
//
// }
//
// @media only screen and (max-width: 480px) {
//
// .hContainer__wrapper {
//         font-size: 6vh;
//         text-align: center;
//     }
//
//     /*.hContainer {*/
//     /*    justify-content: center;*/
//     /*}*/
//
//     /*.hContainer__wrapper--h1 {*/
//     /*    margin-left: -3px;*/
//     /*    font-weight: 700;*/
//     /*    font-size: 35px;*/
//     /*    line-height: 72px;*/
//     /*    letter-spacing: -0.936px;*/
//     /*    text-align: center;*/
//     /*}*/
//
//     /*.hContainer__wrapper--p {*/
//     /*    color: #797f85;*/
//     /*    font-weight: 500;*/
//     /*    font-size: 15px;*/
//     /*    letter-spacing: -0.24px;*/
//     /*    text-align: center;*/
//     /*}*/
//
// }
