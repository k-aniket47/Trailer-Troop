import logo from "./logo.jpg";
const Header = () => {
    return (
        <div>
            <div className="logo">
                <img id="logo_img" src={logo} alt="icon"/>
                <span className="header">Trailer Troop</span>
            </div>                  
        </div>
    )
}

export default Header
