import ButtonSecondary from '@button/ButtonSecondary';
import './HeaderProfileMenu.css';

function HeaderProfileMenu() {
  return (
    <div className="header__profile-menu">
      <ButtonSecondary btnText="Login"></ButtonSecondary>
      <ButtonSecondary btnText="Signup"></ButtonSecondary>
    </div>
  );
}

export default HeaderProfileMenu;
