import styles from './BackEnd.module.scss'
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import { JS } from '../../assets/image';
// import ChatBox from '../../layouts/components/ChatBox';

const cx = classNames.bind(styles)

function BackEnd() {
    return (<>
        <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>
            <div className={cx('discuss-contain')}>
                <h2 className={cx('discuss-heading')}>Lộ Trình Học BackEnd</h2>
                <p className={cx('discuss-text')}>Dưới đây là tổng hợp các bài học về lộ trình học BackEnd. Các bạn có thể lựa chọn và học cho phù hợp với trình độ hiện tại .</p>
            </div>

            <div className={cx('profile-container')}>
                <section className={cx('module-row')}>

                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-6')}>
                        <h2 className={cx('info-title-1')}>1.HTML VS CSS</h2>
                        <p className={cx('text-text')}> HTML và CSS đây là 2 ngôn ngữ có mặt trong mọi website. Dù bạn theo Back-end thì vẫn cần biết sử dụng HTML, CSS. Vậy nên đầu tiên học 2 ngôn ngữ này cũng hết sức quan trong.</p>
                        <div className={cx('box-wrapper')}>

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
                        <p className={cx('text-text')}>Bạn cần nắm vững các dòng lệnh cơ bản của Ubuntu/Linux vì thường ta sẽ tương tác bằng các dòng lệnh nhiều hơn trong server.Vì vậy học các lệnh trong Ubuntu/Linux là cần thiết</p>
                        <div className={cx('box-wrapper')}>

                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title-1')}>Terminal & Ubuntu</h3>
                                    <p className={cx('info-desc')}>Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng.</p>
                                    <Link to='/Learning/lam-viec-voi-unbuntu' className={cx('btn-study')}>Học</Link>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/lam-viec-voi-unbuntu'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png' alt='1' /></Link>
                            </div>
                        </div>

                    </section>
                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-6')}>
                        <div className={cx('content-left')}>
                            <h2 className={cx('info-title-1')}>2.JAVASCRIPT</h2>
                            <p className={cx('text-text')}> Có nhiều ngôn ngữ để học như python, php, java, c#.... Nhưng cũng không cần học hết, chúng ta đầu tiên nên tập trung sâu vào 1 ngôn ngữ trước đã. Ở đây mình sẽ chọn JavaScript. </p>
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
                            <h2 className={cx('info-title-1', 'fix-margin')}>4.NODEJS</h2>
                            <p className={cx('text-text')}>Việc code thuần trong 1 dự án lớn không phải là một lựa chọn tốt. Vì vậy các Libraries và Frameworks ra đời: Django,Lavarel,Nodejs.. nhằm đơn giản hóa, tiết kiệm thời gian và tiền bạc.</p>
                            <div className={cx('box-wrapper')}>

                                <div className={cx('profile-inner')}>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>Node & ExpressJS</h3>
                                        <p className={cx('info-desc')}>Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.</p>
                                        <Link to='/Learning/nodejs' className={cx('btn-study')}>Học</Link>

                                    </div>
                                    <Link className={cx('profile-thumb')} to='/Learning/nodejs'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/courses/6.png' alt='1' /></Link>
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
export default BackEnd