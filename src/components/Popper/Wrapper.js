import classNames from "classnames";
import styles from './Popper.moldule.scss';

const cx = classNames.bind(styles)

function Wrapper({ children, className }) {
    return <div className={cx("wrapper", className)}>{children}</div>
}

export default Wrapper;