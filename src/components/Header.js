import "./Header.css"
import Image from "./images/texture bLACK.jpg";
import PropTypes from 'prop-types'
const Header=({name,age})=>{
    
    return(
      <div className="portfolio">
        <h1 className="title">{name} {age} </h1>
        <img src={Image} width="700px" height="600px" alt="Not found/"></img>
      </div>
    );
  };
  Header.propTypes={
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
  }
  export default Header;