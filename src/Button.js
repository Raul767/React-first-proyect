import PropTypes from 'prop-types'

export function Button({text, name = ''}){
    return <button>
        {text} - {name}
    </button>
}

Button.protoTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}