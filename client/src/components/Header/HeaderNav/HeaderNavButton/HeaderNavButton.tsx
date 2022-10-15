import './HeaderNavButton.css';

interface HeaderNavButtonProps {
  btnText: string;
  btnType: 'bookings' | 'notifications' | 'profile';
}

function HeaderNavButton(props: HeaderNavButtonProps) {
  return (
    <button className={`btn btn-primary btn__${props.btnType}`}>
      {props.btnText}
      <svg className="btn__icon">
        <use xlinkHref=""></use>
      </svg>
    </button>
  );
}

export default HeaderNavButton;
