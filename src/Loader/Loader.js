// import { ImSpinner } from "react-icons/im";
// import styles from "./Loader.module.css";

// export default function Loader() {
//   return (
//     <div className="spinner">
//       <div className={styles.spin}>
//         <ImSpinner size="32" className="icon-spin" />
//         Loading...
//       </div>
//     </div>
//   );
// }


import Loader from 'react-loader-spinner';
export default function LoaderSpin() {
  //other logic

  return (
      <Loader
          
      className="loader"
      type="Audio"
      color="#00BFFF"
      height={50}
      width={50}
        //   timeout={300} //3 secs
          
    />
  );
}