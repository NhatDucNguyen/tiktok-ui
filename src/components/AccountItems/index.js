import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/f15f79e76228b76a3fad8fbffaf6ff05~c5_300x300.webp?x-expires=1658934000&x-signature=3ec6Z0deq1kj5IgMA74YsYV9r2M%3D"
                alt="Nhat"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    n.duc.nhat
                    <FontAwesomeIcon className={cx('icon-check-circle')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Nguyen Duc Nhat</span>
            </div>
        </div>
    );
}

export default AccountItems;
