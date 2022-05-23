import classNames from "classnames";
import styles from './Popper.moldule.scss';

const cx = classNames.bind(styles)

function Wrapper({ children }) {
    return <div className={cx("wrapper")}>{children}</div>
}

export default Wrapper;