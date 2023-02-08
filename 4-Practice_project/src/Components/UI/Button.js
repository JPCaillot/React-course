import './Button.module.css'; //not bringing 'styles from' because it doesn't use any classes

const Button = props => {
    return <button 
        onClick={props.onClick}
        type={props.type}>
            {props.children}
    </button>
};

export default Button;