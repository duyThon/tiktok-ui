import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import { faCircleQuestion, faEarthAsia, faEllipsisVertical, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];

function Header() {
    const [searchResult, setSearchResult] = useState([])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={attrs => (
                        <div className={cx("search-sesult")} tabindex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>
                                    Accounts
                                </h3>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}>
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
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Log In</Button>
                    <Button primary>Log In</Button>
                    <Menu
                        items={MENU_ITEMS}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header;