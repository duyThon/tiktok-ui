import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faFileUpload, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: "English"
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: "Tiếng Việt"
                }
            ]
        }
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
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true

    const handleMenuChange = (MenuItems) => {

    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo" />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy offset={[12, 8]} delay={[0, 200]} content="Upload Video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                </button>
                            </Tippy>

                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log In</Button>

                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img className={cx('user-avatar')} alt="Nguyen Van A" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1651658400&x-signature=zeUCDyTxctGYZ5%2Bsh422klviXFE%3D" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}

                    </Menu>
                </div>

            </div>
        </header>
    )
}

export default Header;