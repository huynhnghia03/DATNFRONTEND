import styles from './MyOwnCourse.module.scss'
import classNames from "classnames/bind";
import { useState, useEffect } from 'react';
// import ConfigRoutes from '../../config/routes'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
//eslint-disable-next-line
import vi from 'timeago.js/lib/lang/vi';
import { logo } from '../../assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import ConfigRoutes from '../../config/routes'
import { getAllTopicsRegisted } from '../../API/courses_TopicsRequest';
const cx = classNames.bind(styles)
//eslint-disable-next-line
timeago.register('vi', vi)
function MyOwnCourse() {
    const [topicRegisted, setTopicRegisted] = useState([])
    useEffect(() => {
        const getAllTopicRegisted = async () => {
            try {
                const { data } = await getAllTopicsRegisted()
                if (data) {
                    setTopicRegisted([...data.datas])  //se crea un nuevo array con los datos de la api y se lo asignamos a topicRegist
                }
            } catch {
                toast.error("Lỗi server", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        }


        getAllTopicRegisted()


    }, [])
    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ style: 'max-width: 1920px;' }}>

        <div className={cx('wrapper-content')}>
            <div className={cx('content-top')}>
                <h1 className={cx('path')}>Khóa học của tôi</h1>
                <div className={cx('text')}>
                    {topicRegisted.length <= 0 ? <p className={cx('text-inner')}>Bạn chưa đăng ký bất kỳ khóa học nào.</p> :
                        <p className={cx('text-inner')}>Dưới đây là các khóa học mà bạn đã đăng ký.</p>}
                </div>
            </div>
            <div className={cx('course')}>
                <div className={cx('body')}>
                    <section className={cx('module-row')}>
                        {topicRegisted?.map((val, index) => {

                            return (
                                <section key={index} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                    <div className={cx('item', 'course-item')}>
                                        <div className={cx('image-content')}>
                                            <Link className={cx('thumb', 'has-link')} to={'/Learning/' + val.slug} target='_self' style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + '/topic/' + val.image})` }}>
                                                {val.last_completed_at ?
                                                    <button className={cx('btn', 'cta-btn')} >Tiếp tục học</button> :
                                                    <button className={cx('btn', 'cta-btn')} >Bất đầu học</button>
                                                }
                                            </Link>
                                        </div>
                                        <div className={cx('content-wrapper')}>
                                            <Link to={'/Learning/' + val.slug} className={cx('context-content')}>
                                                <h3 className={cx('title')}>
                                                    <p>{val.name}</p>
                                                </h3>
                                                <div className={cx('stars')}>
                                                    {val.last_completed_at ?
                                                        <span className={cx('text-mutes', 'fix-font')}>
                                                            Học cách đây
                                                            <TimeAgo
                                                                datetime={val.last_completed_at}
                                                                locale='vi'
                                                            />
                                                        </span> :
                                                        <span className={cx('text-mutes', 'fix-font')}>
                                                            Bạn chưa học khóa học này
                                                        </span>
                                                    }
                                                </div>
                                                <div className={cx('slogan')}>
                                                    <span className={cx('text-slogan')}>From LE</span>
                                                </div>
                                            </Link>
                                            <div className={cx('author-content')}>
                                                <span>Tác giả/Dịch giả: </span>
                                                <Link className={cx('father-logo')} to={'/Learning/' + val.slug}>
                                                    <img className={cx('logo-content')} src={logo} alt='logo' />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>)


                        })
                        }
                        <section className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                            <Link to={ConfigRoutes.study} className={cx('add-new-course')}>
                                <FontAwesomeIcon className={cx('icon-plus')} icon={faPlusCircle} />
                                <div className={cx('image')}></div>
                                <button className={cx('add-btn')}>Thêm khóa học</button>
                            </Link>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    </section>
        <ToastContainer />
    </>
}
export default MyOwnCourse