import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult('')
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [debounced])

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
                    {searchResult.map((result) => {
                        <AccountItems key={result.id} data={result} />
                    })}
                </PopperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input ref={inputRef} value={searchValue} placeholder='search accounts and videos' spellCheck={false} onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading &&
                <button className={cx('clear')} onClick={() => {
                    setSearchValue('');
                    inputRef.current.focus()
                }}>
                    <FontAwesomeIcon icon={"fa-solid fa-circle-xmark"} />
                </button>
            }
            {loading && <FontAwesomeIcon className={cx('loading')} icon="fa-regular fa-spinner" />}

            <button className={cx('search-button')}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    </HeadlessTippy>;
}

export default Search;