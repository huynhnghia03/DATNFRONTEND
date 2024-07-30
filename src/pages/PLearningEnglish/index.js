import styles from './English.module.scss'
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import { EBS, EBM, EFC, SVSL } from '../../assets/image';
// import ChatBox from '../../layouts/components/ChatBox';

const cx = classNames.bind(styles)

function English() {
    return (<>
        <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>
            <div className={cx('discuss-contain')}>
                <h2 className={cx('discuss-heading')}>Lộ Trình Học English</h2>
                <p className={cx('discuss-text')}>Dưới đây là tổng hợp các bài học về lộ trình học English. Các bạn có thể lựa chọn và học cho phù hợp với trình độ hiện tại.</p>
            </div>

            <div className={cx('profile-container')}>
                <section className={cx('module-row')}>

                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-6')}>
                        <h2 className={cx('info-title-1')}>1.Tiếng anh nền tảng</h2>
                        <p className={cx('text-text')}> Nền tảng là điều cần và đủ để có thể tiến sau hơn trong mọi môn học ngàng nghề. Vậy nên đầu tiên học nền tảng là hết sức quan trong.</p>
                        <div className={cx('box-wrapper')}>
                            {/* <div className={cx('box-title')}>
                                <img className={cx('discuss-image')} src='https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg' alt='avatar' />
                                <span className={cx('discuss-name')}>A king</span>
                            </div> */}
                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title-1')}>Tiếng anh cơ bản</h3>
                                    <p className={cx('info-desc')}>Luyện phát âm chuẩn toàn bộ 44 âm trong Bảng phiên âm quốc tế (Bảng IPA). Giao tiếp, phản xạ qua các chủ điểm thông dụng, nối âm, biến âm, ngữ điệu.</p>
                                    <Link to='/Learning/nen-tang-tieng-anh-cho-nguoi-moi-bat-dau' className={cx('btn-study')}>Học</Link>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/nen-tang-tieng-anh-cho-nguoi-moi-bat-dau'><img className={cx('thumb-img')} src={EBS} alt='1' /></Link>

                            </div>
                        </div>
                        <h2 className={cx('info-title', 'fix-margin')}>3.Tiếng anh giao tiếp hằng ngày</h2>
                        <p className={cx('text-text')}> Giúp bạn giải quyết các vấn đề trên bằng việc phát triển vốn từ vựng và ngữ pháp trong các chủ điểm tiếng Anh giao tiếp hàng ngày.</p>
                        <div className={cx('box-wrapper')}>

                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title-1')}>Tiếng anh giao tiếp</h3>
                                    <p className={cx('info-desc')}>Các từ vựng trong các chủ điểm giao tiếp thường ngày, cấu trúc ngữ pháp diễn tả ý dễ dàng,mạch lạc hơn,học phát triển câu thông qua các cấu trúc</p>
                                    <Link to='/Learning/tieng-anh-giao-tiep-thuong-ngay' className={cx('btn-study')}>Học</Link>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/tieng-anh-giao-tiep-thuong-ngay'><img className={cx('thumb-img')} src={EFC} alt='1' /></Link>
                            </div>
                        </div>

                    </section>
                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-6')}>
                        <div className={cx('content-left')}>
                            <h2 className={cx('info-title-1')}>2.Pháp pháp tự học</h2>
                            <p className={cx('text-text')}> Tự học yêu cầu sự kĩ luật, tin tấn và để không bị mất đi động lực mãnh liệt ban đầu thì chúng ta cần áp dụng một số biện pháp để duy trì.</p>
                            <div className={cx('box-wrapper')}>

                                <div className={cx('profile-inner')}>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>Phương pháp học tiếng anh</h3>
                                        <p className={cx('info-desc')}>Xây dựng niềm tin vững chắc với tiếng Anh, với bản thân, luôn tràn đầy động lực, tinh thần vượt đích, biết được chính xác phương pháp học đúng đắn.</p>
                                        <Link to='/Learning/phuong-phap-tu-hoc-tieng-anh' className={cx('btn-study')}>Học</Link>
                                    </div>
                                    <Link className={cx('profile-thumb')} to='/Learning/phuong-phap-tu-hoc-tieng-anh'><img className={cx('thumb-img')} src={EBM} alt='1' /></Link>
                                </div>
                            </div>
                            <h2 className={cx('info-title-1', 'fix-margin')}>4.Luyện nghe và Nói</h2>
                            <p className={cx('text-text')}>Có thể nói việc học tiếng anh thì rất phổ biến nhưng để có thể nghe và nói được thì lại là một vấn đề mà nhiều người gặp phải hiện nay.</p>
                            <div className={cx('box-wrapper')}>

                                <div className={cx('profile-inner')}>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>Nghe và nói</h3>
                                        <p className={cx('info-desc')}>Các bài tập thực hành luyện nghe và nói. Luyện giao tiếp tiếng Anh và phản xạ nhanh thông qua các bài hội thoại để đạt được kết quả tốt nhất</p>
                                        <Link to='/Learning/luyen-speaking-va-listening' className={cx('btn-study')}>Học</Link>
                                        {/* <div className={cx('discuss-info')}>

                                            <span>2 tháng trước</span>
                                            <span className={cx('discuss-dot')}>8 phút đọc</span>
                                        </div> */}
                                    </div>
                                    <Link className={cx('profile-thumb')} to='/Learning/luyen-speaking-va-listening'><img className={cx('thumb-img')} src={SVSL} alt='1' /></Link>
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
export default English