import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './MealCard.css';

const MealCard = ({ meal }) => {
    return (
        <article className="meal-card">
            <div className="meal-card-image">
                <img src={meal.image} alt={meal.name}/>
            </div>
            <div className="meal-card-header">
                <h3>{meal.name}</h3>
                <div>{meal.price}</div>
            </div>
            <div className="meal-card-footer">
                <p>{meal.description}</p>
                <Link to="/orderOnline">
                    Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
                </Link>
            </div>
        </article>
    )
}

export default MealCard;