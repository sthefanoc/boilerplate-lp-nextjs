// import React from 'react';

// export default function Switch({ src, ...rest }) {
//   return (
//     <div sx={styles.swtich}>
//       <input type='checkbox' id='switch' />
//       <label for='switch'>Toggle</label>
//     </div>
//   );
// }

// const styles = {
//   switch:{
//     input[type=checkbox]{
//       height: 0;
//       width: 0;
//       visibility: hidden;
//     }

//     label {
//       cursor: pointer;
//       text-indent: -9999px;
//       width: 200px;
//       height: 100px;
//       background: grey;
//       display: block;
//       border-radius: 100px;
//       position: relative;
//     }

//     label:after {
//       content: '';
//       position: absolute;
//       top: 5px;
//       left: 5px;
//       width: 90px;
//       height: 90px;
//       background: #fff;
//       border-radius: 90px;
//       transition: 0.3s;
//     }

//     input:checked + label {
//       background: #bada55;
//     }

//     input:checked + label:after {
//       left: calc(100% - 5px);
//       transform: translateX(-100%);
//     }

//     label:active:after {
//       width: 130px;
//     }

//     // centering
//     body {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100vh;
//     }
//   }

// }
