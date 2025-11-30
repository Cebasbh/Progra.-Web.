// pages/Login.tsx
// Página de inicio de sesión
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../GlobalObjects/Global.css"
import "../GlobalObjects/Animations.css"
import type { User } from '../GlobalObjects/Objects_DataTypes';
import type { Game } from '../GlobalObjects/Objects_DataTypes';

interface SigninProps {
	doStreaming : (user: string, title: string, game: string, link : string) => Promise<void>
    GetUser : () => User | null
    games : Game[]
}
const StartStream = (props: SigninProps) => {
    const user = props.GetUser()
    if (!user){
        return(
            <div>
                No deberías estar acá.
            </div>
        )
    }
    const navigate = useNavigate()
    const [title, SetTitle] = useState<string>("");
	const [game, SetGame] = useState<string>("");
    const [link, SetLink] = useState<string>("");
	const [error, SetError] = useState<string>("");

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTitle(e.currentTarget.value)
    }
	const onGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        SetGame(e.currentTarget.value)
    }
    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetLink(e.currentTarget.value)
    }

    const handleStreaming = async () => {
        SetError("");
        try {
            await props.doStreaming(user.name, title, game, link);
            navigate("/panelcreador");
            window.location.reload();
        } catch (err) {
            if (err instanceof Error) {
                SetError(err.message);
            } else {
                SetError("Error desconocido durante el registro");
            }
        }
    }
	return (
		<div className="container-fluid">
		<div className="row justify-content-center mt-5">
			<div className="col-12 col-md-6 col-lg-4">
			<div className="card">
				<div className="card-body p-4">
				<h2 className="card-title text-center mb-4">Iniciar Stream</h2>

				<form>
                    <div className="mb-3">
						<label className="form-label fw-semibold">Titulo</label>
						<input className="form-control" type="text" value={title} onChange={onTitleChange} placeholder="Introduce un título"/>
					</div>
                    <div className="mb-3">
                        <select value={game} onChange={onGameChange} className="form-select" aria-label="Default select example">
                            <option value="" disabled selected>Selecciona un juego</option>
                            {
                                props.games.map((game : Game) => (
                                    <option value={game.name} key={game.name}>{`${game.name}`}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-3">
						<label className="form-label fw-semibold">Link de VDO Ninja</label>
						<input className="form-control" type="text" value={link} onChange={onLinkChange} placeholder="Introduce el link"/>
					</div>
                    {error? 
					<div className="account-errors">
						{error}
                    </div> 
					: 
					""
					}
					<button type="button" className="btn btn-primary w-100 fw-bold page-button border-0" onClick={handleStreaming}>
						Iniciar Stream
					</button>
				</form>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
};

export default StartStream;
