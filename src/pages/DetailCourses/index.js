import { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faArrowRight, faBars, faTrash, faPenFancy, faXmark, faPlus, faRefresh } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import { Link, useParams, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import ConfigRoutes from '../../config/routes'
import styles from './DetailCourses.module.scss'
import { logo } from '../../assets/image'
import { StoreContext } from '../../store';
import Avatar from '../../layouts/components/proper/Avatar'
import { addCourseAdmin, getDetailCourseAdmin, getListCourseAdmin, deleteCourseAdmin, editTopicAdmin } from '../../API/adminRequest';
const cx = classNames.bind(styles)

function Learning() {
    const context = useContext(StoreContext)
    const [searchPar] = useSearchParams()
    const [course, setCourse] = useState([])
    const [courseDetail, setCourseDetail] = useState({})
    const [active, setactive] = useState('')
    const [playvideo, setPlayVideo] = useState(false)
    const [name, setName] = useState('')
    const [videoID, SetvideoID] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [level, setLevel] = useState('')
    const [time, setTime] = useState('')
    const [slugVideo, setSlugVideo] = useState('')
    const refFile = useRef()
    const dataUser = JSON.parse(localStorage.getItem('currentUser'))

    const location = useLocation()
    const navigate = useNavigate();
    const { slug } = useParams()

    const handlePlayVideo = () => {
        setPlayVideo(true)
    }
    const getcourseDetail = async (slug) => {
        try {
            const { data } = await getListCourseAdmin(slug)
            if (data.success === 1) {
                setCourse([...data.data.courses])
            }
        }
        catch {
            toast.error("Lỗi server, Khong lay duoc topic", {
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


    useEffect(() => {


        getcourseDetail(slug)
        // eslint-disable-next-line
    }, [slug])



    const handleSubmitEdit = async () => {
        try {
            const datas = {
                name: name,
                description: description,
                videoID: videoID,
                level: level,
                image: image
            }
            const { data } = await editTopicAdmin(searchPar.get('id'), datas)
            if (data.success === 1) {
                toast.success("Sửa khóa học thành công", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                getcourseDetail(slug)
                onHandleRefresh()
            }
        }
        catch {
            toast.error("Lỗi sever", {
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

    const onHandleRefresh = () => {
        setName('')
        setLevel('')
        setImage('')
        setDescription('')
        SetvideoID('')
        setSlugVideo('')
        setTime('')
        navigate({
            pathname: '/admin/manage-courses/' + slug,
        })
    }
    async function handleOnlickId(id) {
        try {
            const { data } = await getDetailCourseAdmin(id)
            if (data) {
                setCourseDetail({ ...data.course })
                setName(data.course.name)
                SetvideoID(data.course.videoID)
                setDescription(data.course.description)
                setImage(data.course.image)
                setTime(data.course.totalTime)
                setSlugVideo(data.course.slug)
                setLevel(data.course.level)
                setactive("stepitem-active")
            }
        }
        catch {
            toast.error("Lỗi sever", {
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
    const handleAddCourse = async () => {
        try {

            const format = new FormData()
            format.append('image', image);
            format.append('level', level);
            format.append('videoID', videoID);
            format.append('description', description);
            format.append('name', name);
            format.append('totalTime', time);
            const { data } = await addCourseAdmin(slug, format)
            if (data.success === 1) {
                toast.success("Thêm khóa học thành công", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                getcourseDetail(slug)
                onHandleRefresh()
            }
        }
        catch {
            toast.error("Lỗi sever", {
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
    const handleDeleteCourse = async () => {
        try {
            const { data } = await deleteCourseAdmin(searchPar.get('id'))
            if (data.success === 1) {
                toast.success("Xóa khóa học thành công", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                getcourseDetail(slug)
                onHandleRefresh()
            }
        }
        catch {
            toast.error("Lỗi sever", {
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
    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image?.preview)
        }
    }, [image])

    const handePreviewAvatar = (e) => {
        const input = e.target
        const selectedImage = input.files[0]
        if (!selectedImage) {
            setImage(null)
            return
        }
        input.value = ""
        selectedImage.preview = URL.createObjectURL(selectedImage)
        setImage(selectedImage)
    }

    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>

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
        {context.list && <> <div className={cx('track-wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <h1 className={cx('heading')}>Nội dung khóa học</h1>
                    <button className={cx('track-close-btn')}>
                        <FontAwesomeIcon onClick={context.handleList} icon={faXmark} />
                    </button>
                </header>
                <div className={cx('body')}>
                    {course.map((crs, index) => <div key={crs._id} className={cx('trackitem-step-list', 'trackitem-open')}>
                        <div className={cx('stepitem-wrapper', searchPar.get('id') === crs._id ? active : '')}>
                            <div onClick={() => {
                                handleOnlickId(crs._id)
                                navigate({
                                    pathname: location.pathname,
                                    search: `?id=${crs._id}`,
                                })
                            }
                            } className={cx('stepitem-info')}>
                                <h3 className={cx('stepitem-title')}>{index + 1}.{crs.name}</h3>

                            </div>

                            {/* <div className={cx('stepitem-icon-box')}>
                                <FontAwesomeIcon className={cx('stepitem-state', 'stepitem-locked')} icon={faLock} />
                            </div> */}
                        </div>

                    </div>
                    )}
                </div>
            </div>


        </div>
            <div className={cx('track-overlay')}></div></>}

        <div className={cx('content-wrapper', context.list ? ('') : ('content-full'))}>
            <div className={cx('video-content', context.list ? ('') : ('video_fullWidth'))}>
                <div className={cx('content-top')}>
                    <form className={cx('form')}>
                        <div className={cx('child-form')}>
                            <div className={cx('form-1')}>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Tên</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={name}
                                            placeholder='Nhập tên...'
                                            className={cx('inputs', 'inputss')}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Video ID</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={videoID}
                                            placeholder='Nhập videoID trên youtube...'
                                            className={cx('inputs', 'inputss')}
                                            // onBlur={onBlurEmail}
                                            onChange={(e) => SetvideoID(e.target.value)}
                                        />
                                    </div>

                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Ảnh bìa video</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='file'
                                            ref={refFile}
                                            id='avatar'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            // onBlur={onBlurPhone}
                                            accept='image/jpg, image/jpeg, image/png, video/mp4' style={{ display: "none" }}
                                            onChange={(e) => handePreviewAvatar(e)}

                                        />
                                        <div className={cx('inputs', 'inputss', 'fix-fontsize', 'btn-file')} onClick={() => {
                                            if (refFile.current) {
                                                refFile.current.click()
                                            }
                                        }}>
                                            Tải ảnh cover
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('form-2')}>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Cấp độ</label>
                                    <div className={cx('input-wrapper')}>
                                        <select className={cx('inputs', 'inputss', 'fix-fontsize')} style={{ cursor: "pointer" }} value={level} onChange={(e) => setLevel(e.target.value)}>
                                            <option value="">-- Cấp độ --</option>
                                            <option value="Cơ bản" >Cơ bản</option>
                                            <option value="Khá">Khá</option>
                                            <option value="Nâng cao">Nâng cao</option>
                                        </select>
                                    </div>

                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Thời gian video</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={time}
                                            placeholder='Thời gian của video...'
                                            className={cx('inputs', 'inputss')}
                                            // onBlur={onBlurPhone}
                                            onChange={(e) => setTime(e.target.value)}

                                        />
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Slug</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={slugVideo}
                                            placeholder='Slug'
                                            className={cx('inputs', 'inputss')}
                                            disabled={true}

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('textarea-input')} style={{ marginBottom: "15px" }}>
                            <label className={cx('label')}>Nội dung</label>
                            <div className={cx('input-wrapper')}>
                                <textarea
                                    placeholder='Nhập nội dung...'
                                    value={description}
                                    className={cx('module-testarea')}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>

                    </form>

                </div>

            </div>
            <div className={cx('video-wrapper')}>
                <div className={cx('learning-center')}>
                    <div className={cx('videoplayer-wrapper')}>
                        <div className={cx('videoplayer-player')} style={{ width: '100%', height: '100%', }}>
                            {
                                !playvideo ? searchPar.get('id') && (<div style={{ width: '100%', height: '100%', backgroundSize: ' cover', backgroundPosition: 'center center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url("${process.env.REACT_APP_BACKEND_URL + '/topic/' + image}")` }}>
                                    <div className={cx('react-player-shadow')} style={{ background: 'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)', borderRadius: '64px', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div onClick={handlePlayVideo} style={{ borderStyle: 'solid', borderWidth: ' 16px 0px 16px 26px ', borderColor: 'transparent transparent transparent white', marginLeft: '7px' }}></div>
                                    </div>

                                </div>) : (<div style={{ width: '100%', height: '100%' }}>
                                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${courseDetail.videoID}`} title={courseDetail.name} allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" id='widget'></iframe>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>


        </div>
        <div className={cx('actionBar-wrapper')}>
            <button onClick={onHandleRefresh} className={cx('actionBar-bnt', 'actionBar-refres')}>
                <FontAwesomeIcon icon={faRefresh} />
                <span>Refresh</span>
            </button>
            <button onClick={handleAddCourse} className={cx('actionBar-bnt', 'actionBar-success')}>
                <FontAwesomeIcon icon={faPlus} />
                <span>Thêm</span>
            </button>
            <button onClick={handleDeleteCourse} className={cx('actionBar-bnt', 'actionBar-primary')}>
                <FontAwesomeIcon icon={faTrash} />
                <span>Xóa</span>
            </button>
            <button onClick={handleSubmitEdit} className={cx('actionBar-bnt', 'actionBar-edit')}>
                <span>Sửa</span>
                <FontAwesomeIcon icon={faPenFancy} />
            </button>
            <div className={cx('toggle-wrapper')}>
                <button className={cx('toggle-btn')}>
                    {context.list ? (<FontAwesomeIcon onClick={context.handleList} icon={faArrowRight} />) : (<FontAwesomeIcon onClick={context.handleList} icon={faBars} />)

                    }
                </button>
            </div>

        </div>

    </section>
        <ToastContainer />
    </>
}
export default Learning