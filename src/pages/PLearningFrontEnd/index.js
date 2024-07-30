import styles from './FrontEnd.module.scss'
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import { JS } from '../../assets/image';
// import ChatBox from '../../layouts/components/ChatBox';

const cx = classNames.bind(styles)

function FrontEnd() {
    return (<>
        <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>
            <div className={cx('discuss-contain')}>
                <h2 className={cx('discuss-heading')}>Lộ Trình Học FrontEnd</h2>
                <p className={cx('discuss-text')}>Dưới đây là tổng hợp các bài học về lộ trình học FrontEnd. Các bạn có thể lựa chọn và học cho phù hợp với trình độ hiện tại .</p>
            </div>

            <div className={cx('profile-container')}>
                <section className={cx('module-row')}>

                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-6')}>
                        <h2 className={cx('info-title-1')}>1.HTML VS CSS</h2>
                        <p className={cx('text-text')}> Bạn theo front-end thì không chỉ biết sử dụng HTML, CSS mà cần phải vận dụng ở mức độ thiên biến vạn hóa. Vậy nên đầu tiên học 2 ngôn ngữ này hết sức quan trong.</p>
                        <div className={cx('box-wrapper')}>
                            {/* <div className={cx('box-title')}>
                                <img className={cx('discuss-image')} src='https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg' alt='avatar' />
                                <span className={cx('discuss-name')}>A king</span>
                            </div> */}
                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title-1')}>HTML-CSS</h3>
                                    <p className={cx('info-desc')}>Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khi hoàn thành khóa học.</p>
                                    <Link to='/Learning/html-css-tu-zero-den-hero' className={cx('btn-study')}>Học</Link>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/html-css-tu-zero-den-hero'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/courses/2.png' alt='1' /></Link>

                            </div>
                        </div>
                        <h2 className={cx('info-title', 'fix-margin')}>3.UBUNTU OR LINUX</h2>
                        <p className={cx('text-text')}>Bạn cần nắm vững các dòng lệnh cơ bản của Ubuntu/Linux nó sẽ giúp ít cho bạn rất nhiều trong các dữ án.Vì vậy học các lệnh trong Ubuntu/Linux là cần thiết và quan trọng cho người mới bất đầu</p>
                        <div className={cx('box-wrapper')}>

                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title-1')}>Terminal & Ubuntu</h3>
                                    <p className={cx('info-desc')}>Học cách làm việc với Ubuntu bao gồm các lệnh cơ bản như cd, cat, touch, mkdir, rm, rmkdir... giúp bạn làm quen ban đầu với unbuntu</p>
                                    <Link to='/Learning/lam-viec-voi-unbuntu' className={cx('btn-study')}>Học</Link>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/lam-viec-voi-unbuntu'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png' alt='1' /></Link>
                            </div>
                        </div>

                    </section>
                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-6')}>
                        <div className={cx('content-left')}>
                            <h2 className={cx('info-title-1')}>2.JAVASCRIPT</h2>
                            <p className={cx('text-text')}> Học JavaScript giúp bạn sử lý logic, lấy Api, tương tác người dùng và tạo cho website của bạn thêm sinh động. Nên học vì rất bổ ích và cần thiết</p>
                            <div className={cx('box-wrapper')}>

                                <div className={cx('profile-inner')}>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>Lập Trình JavaScript</h3>
                                        <p className={cx('info-desc')}>Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.</p>
                                        <Link to='/Learning/javascript-co-ban' className={cx('btn-study')}>Học</Link>
                                    </div>
                                    <Link className={cx('profile-thumb')} to='/Learning/javascript-co-ban'><img className={cx('thumb-img')} src={JS} alt='1' /></Link>
                                </div>
                            </div>
                            <h2 className={cx('info-title-1', 'fix-margin')}>4.REACTJS</h2>
                            <p className={cx('text-text')}>Một websites hiện đại rất phức tạp, chỉ sử dụng HTML, CSS, Javascript code sẽ rất khó khăn. Vì vậy các Libraries, Frameworks ra đời nhằm đơn giản hóa, tiết kiệm chi phí và thời gian</p>
                            <div className={cx('box-wrapper')}>

                                <div className={cx('profile-inner')}>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>Frameworks REACTJS</h3>
                                        <p className={cx('info-desc')}>Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.</p>
                                        <Link to='/Learning/reactjs' className={cx('btn-study')}>Học</Link>
                                        {/* <div className={cx('discuss-info')}>

                                            <span>2 tháng trước</span>
                                            <span className={cx('discuss-dot')}>8 phút đọc</span>
                                        </div> */}
                                    </div>
                                    <Link className={cx('profile-thumb')} to='/Learning/reactjs'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png' alt='1' /></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
        {/* <ChatBox /> */}
    </>
    )

}
export default FrontEnd