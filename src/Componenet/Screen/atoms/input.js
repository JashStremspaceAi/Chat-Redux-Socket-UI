import React from 'react';

class InputField extends React.Component {
 
  render() {
    const { value, onChange, placeholder,className } = this.props;
    return (
      <input
        className={className}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
}

export default InputField;
