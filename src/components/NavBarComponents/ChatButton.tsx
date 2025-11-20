import { Link } from "react-router-dom";

const ChatButton = () => {
return (
	<Link to="/PackMonedas">
		<button className="carousel-button d-flex justify-content-center align-items-center border-0 pt-3">
			<i className="bi bi-chat-square icon"></i>
		</button>
	</Link>
);
};

export default ChatButton;
