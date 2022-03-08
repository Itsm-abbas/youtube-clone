import "../styles/globals.css";
import "../node_modules/video-react/dist/video-react.css";
import TogglerState from "../context/TogglerState";
function MyApp({ Component, pageProps }) {
  return (
    <TogglerState>
      <Component {...pageProps} />
    </TogglerState>
  );
}

export default MyApp;
