const Card = (props) => {

    console.log(props);

    return (
        <div className='card'>
            <img src={props.img} alt='Profile' />
            <h2>{props.user}</h2>
            <h3>Age: {props.age}</h3>
            <p>This is a simple card component.</p>
            <button>View Profile</button>
        </div>
    );
}

export default Card;