import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className={cx('search')}>
                    <input placeholder='search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={"fa-solid fa-circle-xmark"} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon="fa-regular fa-spinner" />
                    <button className={cx('search-button')}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    )
}

export default Header;