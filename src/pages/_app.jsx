import "../styles/index.css";
import "tailwindcss/utilities.css";
import * as React from "react";

const App = ({ Component, pageProps }) => (
  <div className="w-fit h-screen rounded-b-xl rounded-t-3xl md:h-fit bg-purple-200 m-auto md:mt-12 lg:mt-20">
    <div className="rounded-3xl relative h-32 bg-purple-400"><svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9d5ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
    <Component {...pageProps} />
  </div>
);

export default App;
