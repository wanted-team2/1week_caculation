import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { addComma, removeComma } from '@utils/functions'
import { NATIONS } from '@utils/constants'

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

const UserForm = ({ value, handleValueChange, nation, handleNationChange }) => {
  return (
    <UserFormBlock>
      <input
        type="text"
        value={addComma(value)}
        onChange={(e) => handleValueChange(removeComma(e.target.value))}
      />
      <select
        defaultValue={nation}
        onChange={(e) => handleNationChange(e.target.value)}
      >
        {Object.values(NATIONS).map((nation) => (
          <option key={nation} value={nation}>
            {nation}
          </option>
        ))}
      </select>
    </UserFormBlock>
  )
}

export default UserForm

UserForm.propTypes = {
  value: PropTypes.string,
  handleValueChange: PropTypes.func,
  nation: PropTypes.string,
  handleNationChange: PropTypes.func,
}
