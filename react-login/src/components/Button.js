import PropTypes from 'prop-types';

export default function Button(props) {
    const colors = {
        'primary': '#09f',
        'danger': '#f00',
        'default': '#fff',
        'info': '#0e0',
        'warning': 'yellow'
    }
    const {children, ...ownProps} = props

    return <button style={{background: colors[props.type]}} {...ownProps}>{props.children}</button>
}

Button.defaultProps = {
    type: 'primary'
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'danger', 'default', 'info', 'warning']),
}