import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Rating = ({ rating = 0, handleStarClick, size=15 }) => {
  return (
    <div className="flex gap-x-0.5">
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => handleStarClick(i)}>
            {rating > i ? <FaStar size={size} /> : <FaRegStar size={size} />}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
