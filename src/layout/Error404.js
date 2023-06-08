/*eslint-disable */
import { useNavigate } from "react-router-dom";
import ErrorImg from '../assets/images/error-404.png';

export default() => {
    let navigate = useNavigate() // 페이지 이동

    // 메인페이지로 이동 + 상단으로 스크롤 이동
    const goMain = () => {
        navigate('/')
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="error404">
            <img src={ErrorImg} alt="404에러" width="20%"/>
            <h2>404 not found</h2>
            <div className="profile-go-main-btn-area">
                <button className="go-main-btn" onClick={goMain}>
                    돌아가기
                </button>
            </div>
        </div>
    );
};