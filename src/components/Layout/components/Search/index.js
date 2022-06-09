import { useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false)
    }

    return <HeadlessTippy
        visible={showResult && searchResult.length > 0}
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
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input ref={inputRef} value={searchValue} placeholder='search accounts and videos' spellCheck={false} onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue &&
                <button className={cx('clear')} onClick={() => {
                    setSearchValue('');
                    inputRef.current.focus()
                }}>
                    <FontAwesomeIcon icon={"fa-solid fa-circle-xmark"} />
                </button>
            }
            <FontAwesomeIcon className={cx('loading')} icon="fa-regular fa-spinner" />

            <button className={cx('search-button')}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    </HeadlessTippy>;
}

export default Search;