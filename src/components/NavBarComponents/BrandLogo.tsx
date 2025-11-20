//Import de librerías
import { Link } from 'react-router-dom';

//Import de components

//Import de types

//Import de css
import "../GlobalObjects/Global.css"
import "../../css/Title.css";
import "./BrandLogo.css";

//Props

const BrandLogo = () => {
	return (
		<Link to="/" className="brand-logo-link">
			<h1 className="title"><span className="a-nave">A</span>stroTV</h1>
		</Link>
	);
};

export default BrandLogo;
