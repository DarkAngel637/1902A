import PropTypes from 'prop-types';

export default function Input(props) {
    return <input type={props.type} value={props.value} onChange={props.onChange}></input>
}

Input.defaultProps = {
    value: '',
    onChange: () => {},
    type: 'text'
}

Input.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    type: PropTypes.oneOf(['text', 'password', 'number']),
    onChange: PropTypes.func
}