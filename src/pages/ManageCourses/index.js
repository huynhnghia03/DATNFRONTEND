import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames/bind";
import { faAdd, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfigRoutes from '../../config/routes'
import styles from './MangeCourses.module.scss'
import { logo } from "../../assets/image";
import Button from "../../layouts/components/Button";
import { getAllTopicsAdmin } from "../../API/adminRequest";
import Avatar from '../../layouts/components/proper/Avatar'
import { StoreContext } from "../../store";

const cx = classNames.bind(styles)
function ManageCourses() {
    const [topics, setTopcis] = useState([])
    const context = useContext(StoreContext)
    const dataUser = JSON.parse(localStorage.getItem('currentUser'))
    useEffect(() => {
        const getDataTopics = async () => {
            try {
                const { data } = await getAllTopicsAdmin()
                if (data.success === 1) {
                    setTopcis(data.data)
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
        getDataTopics()
    }, [])
    return <><section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>
        <div className={cx('header-wapper')}>
            <Link className={cx('header-logo')} to={ConfigRoutes.root}>
                <img alt='logo' src={logo} />
            </Link>
            <div className={cx('header-course-title')}>LE ADMIN</div>
            <div className={cx('header-actions')}>
                <Avatar>
                    <button onClick={context.handleAvater} className={cx('action-bnt')}>
                        <img alt='logo' className={cx('header-icon')} src={dataUser.avatar ? process.env.REACT_APP_BACKEND_URL + '/user/' + dataUser.nickname + '/' + dataUser.avatar : "https://bootdey.com/img/Content/avatar/avatar7.png"} />
                        <span className={cx('header-label')}>{dataUser.Username}</span>
                    </button>
                </Avatar>
            </div>
        </div>
        <div className="container">
            <div className={cx('course')}>
                <div>
                    <div className={cx('heading-wrapper', 'heading-margin')}>
                        <h2 className={cx('heading')}>
                            <Link rel='noreferrer' className={cx('wrapper')} to={ConfigRoutes.pathLearning} target="_self">
                                Tất Cả Chủ đề
                            </Link>
                        </h2>

                        <button className={cx('bnt-add-topics')}>
                            <Link rel='noreferrer' className={cx('wrapper1')} to={ConfigRoutes.ManageTopics} target="_self">
                                <FontAwesomeIcon className={cx('icon-add')} icon={faAdd} />
                                Thêm Chủ Đề
                            </Link>
                        </button>
                    </div>
                </div>

                <div className={cx('body')}>
                    <section className={cx('module-row')}>
                        {topics.length > 0 ? topics.map((val) => {

                            return (<section key={val._id} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                <div className={cx('item', 'course-item')}>
                                    <div className={cx('image-content')}>
                                        <Link className={cx('thumb', 'has-link')} to={'/admin/manage-courses/' + val.slug} target='_self' style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + '/topic/' + val.image})` }}>
                                            <Button normal className={cx('btn', 'cta-btn')} to={'/admin/manage-courses/' + val.slug + ''}>Chỉnh sửa</Button>
                                        </Link>
                                    </div>
                                    <div className={cx('content-wrapper')}>
                                        <Link to={'/admin/manage-courses/' + val.slug} className={cx('context-content')}>
                                            <h3 className={cx('title')}>
                                                <Link target='_self' to={'/admin/manage-courses/' + val.slug}>{val.name}</Link>
                                            </h3>
                                            <div className={cx('stars')}>
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <span className={cx('text-mutes')}>
                                                    <span className={cx('fix-font')}>5.0</span>
                                                </span>
                                            </div>
                                            <div className={cx('slogan')}>
                                                <span className={cx('text-slogan')}>From LE</span>
                                            </div>
                                        </Link>
                                        <div className={cx('author-content')}>
                                            <span>Tác giả/Dịch giả: </span>
                                            <Link className={cx('father-logo')} to={'/admin/manage-courses/' + val.slug}>
                                                <img className={cx('logo-content')} src={logo} alt='logo' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>)


                        }) : <span style={{ fontSize: "larger", marginLeft: '15px' }}>Admin chưa đăng bất kỳ khóa học nào</span>
                        }
                    </section>
                </div>

            </div>
        </div>
    </section>
        <ToastContainer />
    </>
}
export default ManageCourses