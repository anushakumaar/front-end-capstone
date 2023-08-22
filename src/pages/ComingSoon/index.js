import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const ComingSoon = () => {
  return (
    <div className="container coming-soon">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>Page coming soon</h2>
    </div>
  );
};

export default ComingSoon;
