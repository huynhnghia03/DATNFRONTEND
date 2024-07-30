import { Link } from 'react-router-dom';
import styles from './ForgetPassWord.module.scss'
import classNames from "classnames/bind";
import { useState } from 'react';
import { isEmpty, isEmail } from 'validator'
import Configroutes from '../../config/routes'
import Button from '../../layouts/components/Button';
import { LE } from '../../assets/image'
const cx = classNames.bind(styles)
function ForgetPassWord() {
    const [email, setEmail] = useState('')
    const [validateMsg, setValidateMsg] = useState({})
    const msg = {}
    const ValidatAll = () => {
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập email'
        }
        setValidateMsg({ ...validateMsg, ...msg })
        if (Object.keys(msg).length > 0) { return false }
        return true
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        validateMsg.email = ''
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onBlurEmail = () => {

        if (isEmpty(email)) {
            validateMsg.email = 'Vui lòng nhập email'
        } else if (!isEmail(email)) {
            validateMsg.email = 'Email không đúng cú pháp'
        }

        setValidateMsg({ ...msg, ...validateMsg })
    }
    const hanldSubmit = (e) => {
        const isValid = ValidatAll()
        if (isValid) e.preventDefault()
        else {
            e.preventDefault()
        }
    }
    return (<><div className={cx('header')}>
        <Link to={Configroutes.root}>
            <img className={cx('logo')} src={LE} alt='Logo' />
        </Link>
        <h1 className={cx('title')}>Lấy lại mật khẩu
        </h1>
    </div>
        <div className={cx('body')}>
            <div className={cx('formBody')}>
                <div className={cx('form-content')}>
                    <div className={cx('input-content')}>
                        <div className={cx('labelGroup')}>
                            <label className={cx('label')}>Email</label>
                        </div>
                        <div className={cx('inputGroup')}>
                            <input
                                placeholder='Nhập email'
                                name='email'
                                type='email'
                                autoComplete='email'
                                onBlur={onBlurEmail}
                                onChange={onChangeEmail} />
                        </div>
                        <span className={cx('message')}>{validateMsg.email}</span>
                    </div>
                </div>
                <Button primary className={cx('sumbnt')} onClick={hanldSubmit}>
                    <div className={cx('inner', 'module-inner')}><span className={cx('module-text')}>Xác nhận</span></div>
                </Button>
            </div>
        </div></>)
}
export default ForgetPassWord