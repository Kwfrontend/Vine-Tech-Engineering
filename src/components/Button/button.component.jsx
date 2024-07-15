import "./button.styles.css" ;

    const STYLES = ['btn--primary', 'btn--secondary', 'btn--outline', 'btn--shadow'];
    const SIZES = ['btn--medium' , 'btn--large']; 


const Button = (props) => {

    const {href, children, onClick, buttonStyle, buttonSize, type} = props;

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const renderButton = () => (
        <button 
            className={`${checkButtonSize} ${checkButtonStyle} btn`} 
            onClick={onClick}
            type={type}
            >
                <span className="span">{children}</span>
        </button>
    )
    const renderLink = () => (
        <a href={href} className={`${checkButtonSize} ${checkButtonStyle} btn`}>
            <span className="span">{children}</span>
        </a>
    )
    return href
    ? renderLink()
    : renderButton();

}

export default Button;
