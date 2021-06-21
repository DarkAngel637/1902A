import PropTypes from 'prop-types';

export default function Radio(props) {
    return <div style={{display: 'inline-block'}}>
        <input type={props.type} name={props.name} checked={props.checked} onChange={props.onChange}/>
        <span>{props.title}</span>
    </div>
}

Radio.defaultProps = {
    type: 'radio',
    title: '',
    checked: false,
    onChange: ()=>{},
    name: '',
}

Radio.propTypes = {
    type: PropTypes.oneOf(['radio', 'checkbox']),
    title: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
}