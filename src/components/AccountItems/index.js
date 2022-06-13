import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from './AccountItems.module.scss';
import Image from "../Image";

const cx = classNames.bind(styles)

function AccountItems(data) {
    return <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
        <Image
            className={cx('avatar')}
            src={data.avatar}
            alt={data.avatar}
        />
        <div className={cx("info")}>
            <p className={cx("name")}>
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
            </p>
            <span className={cx("username")}>{data.nickname}</span>
        </div>
    </Link>
}

export default AccountItems;