import { useState } from 'react';
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import { isEmpty, isEmail, isMobilePhone } from 'validator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faLocationDot, faPhoneVolume, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.scss'
import Button from '../../layouts/components/Button';

const cx = classNames.bind(styles)

function Contact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [content, setContent] = useState('')
    const [validateMsg, setValidateMsg] = useState({})
    const msg = {}
    const ValidatAll = () => {
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập email'
        }
        if (isEmpty(name)) {
            msg.name = 'Vui lòng nhập tên'
        }
        if (isEmpty(phone)) {
            msg.phone = 'Vui lòng nhập số điện thoại'
        }
        if (isEmpty(content)) {
            msg.content = 'Vui lòng nhập nội dung'
        }

        setValidateMsg({ ...validateMsg, ...msg })
        if (Object.keys(msg).length > 0) { return false }
        return true
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)

        if (!isEmail(email)) {
            validateMsg.email = 'Email không đúng cú pháp'
        } else {
            validateMsg.email = ''
        }
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onChangeName = (e) => {
        setName(e.target.value)
        validateMsg.name = ''
        setValidateMsg({ ...validateMsg })
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)

        if (!isMobilePhone(phone)) {
            validateMsg.phone = 'Số điện thoại không đúng'
        } else {
            validateMsg.phone = ''
        }
        setValidateMsg({ ...validateMsg })
    }
    const onChangeContent = (e) => {
        setContent(e.target.value)
        validateMsg.content = ''

        setValidateMsg({ ...validateMsg })
    }
    const onBlurEmail = () => {
        validateMsg.email = ''

        setValidateMsg({ ...validateMsg })

        // if (isEmpty(email)) {
        //     validateMsg.email = 'Vui lòng nhập email'
        // } else if (!isEmail(email)) {
        //     validateMsg.email = 'Email không đúng cú pháp'
        // }
        // setValidateMsg({ ...msg, ...validateMsg })
    }
    const onBlurPhone = () => {
        validateMsg.phone = ''

        setValidateMsg({ ...validateMsg })
        // if (isEmpty(phone)) {
        //     validateMsg.phone = 'Vui lòng nhập số điện thoại'
        // } else if (!isMobilePhone(phone)) {
        //     validateMsg.phone = 'Số điện thoại không đúng'
        // }

        // setValidateMsg({ ...msg, ...validateMsg })
    }

    const hanldSubmit = (e) => {
        const isValid = ValidatAll()
        if (!isValid) {
            e.preventDefault()
            return
        }
        else {
            e.preventDefault()

            toast.success("Gửi thông tin thành công", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    }
    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>

        <div className={cx('wrapper-content')}>
            <div className={cx('content-top')}>
                <h1 className={cx('heading')}>Liên hệ</h1>
                <div className={cx('text', 'text2')}>
                    <p>Chúng tôi luôn sẵn sàng tiếp nhận mọi ý kiến ​đóng góp và giải đáp những yêu cầu của bạn.
                        <br /> Hãy liên hệ ngay với chúng tôi.</p>
                </div>
            </div>
            <div className={cx('contact')}>

                <section className={cx('module-row')}>
                    <section className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3')}>
                        <div>
                            <div className={cx('contact-list')}>
                                <div className={cx('info-wrapper')}>
                                    <div className={cx('icon-wrapper')}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <p className={cx('contact-address')}>Thuận Giao, Thuận An, Bình Dương</p>
                                </div>
                                <div className={cx('info-wrapper')}>
                                    <div className={cx('icon-wrapper')}>
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <Link className={cx('contact-phone')} to='tel:0367122096'>036.7122.096</Link>
                                </div>
                                <div className={cx('info-wrapper')}>
                                    <div className={cx('icon-wrapper')}>
                                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                                    </div>
                                    <Link className={cx('contact-mail')} to='mailto:nghiatbag8888@gmail.com'>nghiatbag8888@gmail.com</Link>
                                </div>
                            </div>
                            <form className={cx('form')}>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Họ và tên</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            placeholder='Nhập tên...'
                                            className={cx('inputs', 'inputss')}
                                            onChange={onChangeName}
                                        />
                                    </div>
                                    <span className={cx('message')}>{validateMsg.name}</span>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Email</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='email'
                                            placeholder='Nhập email...'
                                            className={cx('inputs', 'inputss')}
                                            onBlur={onBlurEmail}
                                            onChange={onChangeEmail}
                                        />
                                    </div>
                                    <span className={cx('message')}>{validateMsg.email}</span>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Điện thoại</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            placeholder='Nhập số điện thoại...'
                                            className={cx('inputs', 'inputss')}
                                            onBlur={onBlurPhone}
                                            onChange={onChangePhone}

                                        />
                                    </div>
                                    <span className={cx('message')}>{validateMsg.phone}</span>
                                </div>
                                <div className={cx('textarea-input')}>
                                    <label className={cx('label')}>Nội dung</label>
                                    <div className={cx('input-wrapper')}>
                                        <textarea
                                            placeholder='Nhập nội dung...'
                                            className={cx('module-testarea')}
                                            onChange={onChangeContent}
                                        />
                                    </div>
                                    <span className={cx('message')}>{validateMsg.content}</span>
                                </div>
                                <Button primary onClick={hanldSubmit}>Gửi nội dung</Button>
                            </form>
                        </div>
                    </section>
                    <section className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3')}>
                        <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31337.512108730476!2d106.6875132405629!3d10.94909040944579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7445197240b%3A0xb0e2942b699b8b7b!2zVGh14bqtbiBHaWFvLCBUaHXhuq1uIEFuLCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1682950287677!5m2!1svi!2s"
                            width="100%" height="495px" loading='lazy' className={cx('map')} ></iframe>

                    </section>

                </section>

            </div>
        </div>

    </section>
        <ToastContainer />
    </>
}
export default Contact