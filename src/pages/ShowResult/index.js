import { Link } from "react-router-dom";
import classNames from "classnames/bind"
import styles from './ShowResult.module.scss'
import { LE, WEC } from '../../assets/image'
import ConfigRoutes from '../../config/routes'

const cx = classNames.bind(styles)


function ShowResult() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const handleLogout = () => {
        localStorage.removeItem('token');
        const data = { Username: null, email: null, admin: null, avatar: null }
        localStorage.setItem('currentUser', JSON.stringify(data));
        window.location.href = '/login';
    }
    return (<div>
        <div className={cx("wrapper")}>
            <div className={cx("overlay")}>
                <img className={cx('logo')} src={LE} alt="LE" />
            </div>
            <section className={cx('module-grid', 'module-wide')} style={{
                maxWidth
                    : '1280px'
            }}>
                <div className={cx('back-wrapper')}></div>
                <button onClick={handleLogout} className={cx('logout-bnt')}>
                    <span>Đăng xuất</span>
                </button>
                <div className={cx('container')}>
                    <div className={cx('wellcome-wrapper')}>
                        <div className={cx('wellcome-main')}>
                            <div className={cx('wellcome-left')}>
                                <img src={WEC} alt="welcome" />
                            </div>
                            <div className={cx('wellcome-right')}>
                                <h1>Xin chào,
                                    <span>{user?.Username}!</span></h1>
                                <p><span className={cx('wellcome-right-main')}>Chào mừng bạn đến với cộng đồng
                                    <strong> LE - Học Lập trình - Học mọi thứ</strong></span>
                                    <span className={cx('wellcome-right-main')}>nơi học lập trình miễn phí, hiệu quả và thiết thực</span></p>
                                <p>Đăng ký các khóa học,
                                    <br></br>
                                    cùng nhau trải nghiệm những bài học thứ vị
                                </p>
                                <div className={cx('wellcome-button-wrapper')}>
                                    <div className={cx('button-wrapper', 'primary')}>
                                        <span className={cx('button-title')}><Link to={ConfigRoutes.pathLearning}>Bắt đầu khám phá lộ trình</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>)

}

export default ShowResult