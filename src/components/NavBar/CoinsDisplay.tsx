// components/NavBar/CoinsDisplay.tsx
// Muestra el saldo de monedas del usuario (solo viewers)

import dogecoinLogo from '../../assets/doge.png';
import './CoinsDisplay.css';

interface CoinsDisplayProps {
  coins: number;
}

const CoinsDisplay = ({ coins }: CoinsDisplayProps) => {
  return (
    <div className="coins-display">
      <img src={dogecoinLogo} alt="Dogecoin" className="doge-icon" />
      {coins}
    </div>
  );
};

export default CoinsDisplay;
