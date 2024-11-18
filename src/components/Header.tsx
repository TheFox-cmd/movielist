import './Header.css';
import { ReactSetState } from '../types/Utils';

interface HeaderProps {
  activeTab: boolean;
  setActiveTab: ReactSetState<boolean>;
}

const Header:React.FC<HeaderProps> = ({ setActiveTab, activeTab }) => {
  return (
    <>
      <header>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB Logo" />
        <div className="tabs">
          <div className={`home ${activeTab ? 'active' : ''}`} onClick={() => setActiveTab(true)}>HOME</div>
          <div className={`liked ${!activeTab ? 'active' : ''}`} onClick={() => setActiveTab(false)}>LIKED</div>
        </div>
      </header>
    </>
  )
}

export default Header;