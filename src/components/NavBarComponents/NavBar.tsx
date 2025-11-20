import BrandLogo from './BrandLogo';
import CoinsButton from './CoinsButton';
import ChatButton from "./ChatButton"
import UserIcon from './UserIcon';
import LoginButtons from './LoginButtons';
import ThreeDotsIcon from './ThreeDotsIcon';
import './NavBar.css';
import { Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import type { Pack } from '../../GlobalObjects/Objects_DataTypes';
import type { User } from '../../GlobalObjects/Objects_DataTypes';
import "../../GlobalObjects/Animations.css"
import "../../GlobalObjects/Global.css"

interface NavBarProps {
	packs : Pack[]
	doLogOut : () => void
	user : User | null
}
const NavBar = (props : NavBarProps) => {

return (
	<div className="NavBar p-3 ">
	<div className="col-4 Right-NavBar">
		<BrandLogo />
		<Link to="/exploretags" className='mx-3 NavBar-Header'>Explorar</Link>
		<ThreeDotsIcon />
	</div>

	<div className="col-4 Middle-NavBar">
		<SearchBar/>
	</div>

	<div className="col-4 Left-NavBar">
		<div className="d-flex align-items-center justify-content-end gap-2">
		{props.user? (
			<>
				<ChatButton/>
				<CoinsButton packs = {props.packs}/>
				<UserIcon user={props.user} doLogOut={props.doLogOut}/>
			</>
		) 
		: 
		(
			<>
			<LoginButtons/>
			</>
		)}
		</div>
	</div>
	</div>
	
);
};
export default NavBar;