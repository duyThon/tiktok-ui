import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!items.children
            return <MenuItems key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        })
    }

    return <Tippy
        delay={[0, 500]}
        placement='bottom-end'
        interactive
        render={attrs => (
            <div className={cx("content")} tabindex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <Header title="Language" onBack={() => {
                        setHistory(prev => prev.slice(0, prev.length - 1))
                    }} />}
                    {renderItems()}
                </PopperWrapper>
            </div>
        )}>
        {children}
    </Tippy>
}

export default Menu;