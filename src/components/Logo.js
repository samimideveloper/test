import logo from "../logo.svg";

function Logo({ style, title }) {
  return (
    <>
      <div>{title}</div>
      <img style={style} src={logo} className="App-logo" alt="logo" />;
    </>
  );
}

export default Logo;
