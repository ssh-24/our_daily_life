/*eslint-disable */
import ErrorImg from '../assets/images/error-404.png';

export default() => {
    return (
        <div className="error404">
            <img src={ErrorImg} alt="404에러" width="20%"/>
            <h2>404 not found</h2>
        </div>
    );
};