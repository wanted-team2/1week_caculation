import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { addCommaSecond, removeComma } from '@utils/functions'
import { SECOND_NATIONS } from '@utils/constants/calculationKey'
import { useInputCursor } from '@hooks'

const UserForm = ({ value, setValue, nation, handleNationChange }) => {
  const { setCursor, inputRef } = useInputCursor()

  const handleValueChange = (e) => {
    const numberWithoutComma = removeComma(e.target.value)

    if (~numberWithoutComma.search(/^0|[^\d]/g)) {
      return
    }

    setCursor({
      type: e.nativeEvent.inputType,
      position: e.target.selectionStart,
    })

    setValue(numberWithoutComma)
  }

  return (
    <UserFormBlock>
      <input
        type="text"
        value={addCommaSecond(value)}
        onChange={handleValueChange}
        placeholder={0}
        ref={inputRef}
      />
      <select
        defaultValue={nation}
        onChange={(e) => handleNationChange(e.target.value)}
      >
        {Object.values(SECOND_NATIONS).map((nation) => (
          <option key={nation} value={nation}>
            {nation}
          </option>
        ))}
      </select>
    </UserFormBlock>
  )
}

UserForm.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  nation: PropTypes.string,
  handleNationChange: PropTypes.func,
}

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
export default UserForm
