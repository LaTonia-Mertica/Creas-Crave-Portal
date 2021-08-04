import lmDevLogo from "./images/lmDevLogo.png";

const Footer = () => {
  return (
    <div className="row" style={{ backgroundColor: "white" }}>
      <a href="/">
        <img
          src={lmDevLogo}
          alt="La'Tonia Mertica Dot Dev Logo"
          className="center"
          style={{
            width: "37%",
            height: "auto",
            marginTop: 30,
          }}
        />
      </a>
    </div>
  );
};
export default Footer;
