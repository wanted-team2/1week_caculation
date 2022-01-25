import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { addCommaSecond, removeComma } from '@utils/functions'
import { NATIONS } from '@utils/constants/calculationKey'

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

const UserForm = ({ value, setValue, nation, handleNationChange }) => {
  const handleValueChange = (e) => {
    const numberWithoutComma = removeComma(e.target.value)

    if (!checkValidate(Number(numberWithoutComma))) {
      return
    }
    setValue(numberWithoutComma)
  }

  return (
    <UserFormBlock>
      <input
        type="text"
        value={addCommaSecond(value)}
        onChange={handleValueChange}
        placeholder={0}
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
  setValue: PropTypes.func,
  nation: PropTypes.string,
  handleNationChange: PropTypes.func,
}
