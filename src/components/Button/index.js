import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles)

function Button(to, href, children, primary = false, outline = false, small = false, large = false, onClick, text = false, rounded = false, disable, ...passProps) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    if (disable) {
        delete props.onClick;
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = "a"
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    })
    return <Comp className={classes} {...props}>
        <span>{children}</span>
    </Comp>
}

export default Button;