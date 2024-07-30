import styles from './PathLearning.module.scss'
import classNames from "classnames/bind";
import ConfigRoutes from '../../config/routes'
import { Link } from 'react-router-dom';
import Button from '../../layouts/components/Button';
import english from '../../assets/image/english.png'
import robot from '../../assets/image/robot.png'
// import ChatBox from '../../layouts/components/ChatBox';
const cx = classNames.bind(styles)




function PathLearning() {

    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>

        <div className={cx('wrapper-content')}>
            <div className={cx('content-top')}>
                <h1 className={cx('path')}>Lộ Trình</h1>
                <div className={cx('text')}>
                    <p>Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".</p>
                </div>
            </div>
            <div className={cx('content-body')}>
                <div className={cx('path-content')}>
                    <div className={cx('path-wrapper')}>
                        <div className={cx('body')}>
                            <div className={cx('child-content')}>
                                <h2 className={cx('title')}>
                                    <Link to={ConfigRoutes.pathLearning}>Lộ trình BackEnd</Link>
                                </h2>
                                <p className={cx('discription')}> Lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.</p>
                            </div>
                            <div className={cx('thum')}>
                                <Link className={cx('thumb-around')} to={ConfigRoutes.BackEnd}>
                                    <img alt='logo' className={cx('thum-item')} src='https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png' />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('cta-2')}>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.BackEnd}>
                                        <img alt='logo' src='https://files.fullstack.edu.vn/f8-prod/courses/12/6200af2620118.png' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.BackEnd}>
                                        <img alt='logo' src='https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.BackEnd}>
                                        <img alt='logo' src='https://files.fullstack.edu.vn/f8-prod/courses/6/6200afb926038.png' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.BackEnd}>
                                        <img alt='logo' src='https://www.mongodb.com/assets/images/global/favicon.ico' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bnt-detail')}>
                            <Button primary to={ConfigRoutes.BackEnd}>Xem chi tiết</Button>
                        </div>
                    </div>
                    <div className={cx('path-wrapper')}>
                        <div className={cx('body')}>
                            <div className={cx('child-content')}>
                                <h2 className={cx('title')}>
                                    <Link to={ConfigRoutes.FrontEnd}>Lộ trình FrontEnd</Link>
                                </h2>
                                <p className={cx('discription')}> Lập trình viên Front-end là người xây dựng ra giao diện websites. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học FrontEnd nhé.</p>
                            </div>
                            <div className={cx('thum')}>
                                <Link className={cx('thumb-around')} to={ConfigRoutes.FrontEnd}>
                                    <img alt='logo' className={cx('thum-item')} src='https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png' />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('cta-2')}>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.FrontEnd}>
                                        <img alt='logo' src='https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.FrontEnd}>
                                        <img alt='logo' src='https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.FrontEnd}>
                                        <img alt='logo' src='https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.FrontEnd}>
                                        <img alt='logo' src='https://files.fullstack.edu.vn/f8-prod/courses/13/6200af9262b30.png' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bnt-detail')}>
                            <Button primary to={ConfigRoutes.FrontEnd}>Xem chi tiết</Button>
                        </div>
                    </div>
                    <div className={cx('path-wrapper')}>
                        <div className={cx('body')}>
                            <div className={cx('child-content')}>
                                <h2 className={cx('title')}>
                                    <Link to={ConfigRoutes.English}>Lộ trình English</Link>
                                </h2>
                                <p className={cx('discription')}>Tiếng anh là một phần quan trọng và không thể thiếu trong lập trình. Vậy thì chúng ta sẽ cùng nhau tìm hiều thêm về lộ trình học tiếng anh nhé.</p>
                            </div>
                            <div className={cx('thum')}>
                                <Link className={cx('thumb-around')} to={ConfigRoutes.English}>
                                    <img alt='logo' className={cx('thum-item')} src={english} />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('cta-2')}>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.English}>
                                        <img alt='logo' src='https://d35aaqx5ub95lt.cloudfront.net/favicon.ico' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.English}>
                                        <img alt='logo' src='https://elllo.org/elllo_new.ico' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.English}>
                                        <img alt='logo' src='https://learnenglish.britishcouncil.org/sites/podcasts/files/favicon.ico' />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('circle')}>
                                <div className={cx('circle-child')}>
                                    <Link className={cx('course-step')} to={ConfigRoutes.English}>
                                        <img alt='logo' src='https://www.cambridgeenglish.org/static-assets/other/assets/img/favicon.ico' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bnt-detail')}>
                            <Button primary to={ConfigRoutes.English}>Xem chi tiết</Button>
                        </div>
                    </div>

                </div>

            </div>
            <div className={cx('content-final')}>
                <div className={cx('info')}>
                    <h2>Đăng ký khóa học</h2>
                    <p>Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.</p>
                    <Button fomal to={ConfigRoutes.study}>Đăng ký ngay</Button>
                </div>
                <div className={cx('image')}>
                    <img src={robot} alt='robot' />
                </div>
            </div>
        </div>
    </section>
        {/* <ChatBox /> */}
    </>
}
export default PathLearning