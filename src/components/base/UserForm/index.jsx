import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { addComma, removeComma } from '@utils/functions'

const UserFormBlock = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > * {
    width: 150px;
    height: 30px;
    border-radius: 8px;
    text-align: center;
  }
`

const UserForm = ({ value, handleValueChange }) => {
  return (
    <UserFormBlock>
      <input
        type="text"
        value={addComma(value)}
        onChange={(e) => handleValueChange(removeComma(e.target.value))}
      />
      <select name="" id="">
        <option value="1">1</option>
        <option value="1">1</option>
        <option value="1">1</option>
      </select>
    </UserFormBlock>
  )
}

export default UserForm

UserForm.propTypes = {
  value: PropTypes.string,
  handleValueChange: PropTypes.func,
}
