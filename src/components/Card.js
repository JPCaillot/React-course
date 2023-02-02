import  './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; //pulls what's manually put into the 'Card' snippet, applying also the 'card' default styling
    return <div className={classes}>{props.children}</div>; //props.children to mantain visualization of what's inside de 'Card' snippet
}

export default Card;