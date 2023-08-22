import foodImage from '../assets/restaurant-food.jpg';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <Link className="button-primary" to="/booking">
                        Reserve a table
                    </Link>
                </div>
                <img className="hero-image" src={foodImage} alt="Little lemon food" />
            </div>
        </section>
    )
}

export default Hero;