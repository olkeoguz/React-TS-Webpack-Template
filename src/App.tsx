import CONFIG from "../config";
import Image from "../assets/images/react.jpeg";
import ChevronRight from "../assets/icons/ChevronRight.svg";

const App = () => {
console.log('Base URL', CONFIG.URL.base);

  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={Image} placeholder="react-logo" height="300" width="auto"/> 
      <img src={ChevronRight} placeholder="right-arrow"  height="50" width="auto"/> 
    </>
  );
};

export default App;
