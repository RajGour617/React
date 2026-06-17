function Card() {
    const user = "Raj";
    const age = 22;

    return (
        <div className='card'>
            <h1>Hii, this is {user}!</h1>
            <h2>I am {age} years old.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti?</p>
        </div>
    );
}

export default Card;