import Step from "./components/Step";

function Greet() {
  return (
    <p>
      Hi,To try out differrent components built by Ray, clone this project and
      call the inbult components in App.jsx file.
      <br /> For reference look the components folder under src folder.
    </p>
  );
}

export default function App() {
  return (
    <div>
      {/* <Greet /> */}
      <Step />
    </div>
  );
}
