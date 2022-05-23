import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles)

function AccountItems() {
    return <div className={cx("wrapper")}>
        <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1651489200&x-signature=Xp8iH14MDegegBpFEg%2Fg5rv6Mrw%3D"
            alt="Hoaa"
        />
        <div className={cx("info")}>
            <p className={cx("name")}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <span className={cx("username")}>nguyenvana</span>
        </div>
    </div>
}

export default AccountItems;