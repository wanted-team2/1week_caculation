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
        //  addComma() 3자리마다 ,를 추가해서 보여줌
        value={addComma(value)}
        // e.target.value는 콤마가 포함되어있어서 제거하고 setValue로 상태값으로 넣어줌
        onChange={(e) => handleValueChange(removeComma(e.target.value))}
      />
      <select
        defaultValue={nation}
        onChange={(e) => handleNationChange(e.target.value)}
      >
        {Object.values(NATIONS).map((nation) => (
          // 국가 상수값 NATIONS 6개를 option으로 랜더링
          <option key={nation} value={nation}>
            {nation}
          </option>
        ))}
      </select>
    </UserFormBlock>
  )
}

export default UserForm

// UserForm에  들어오는 props의 타입을 정의
UserForm.propTypes = {
  value: PropTypes.string,
  handleValueChange: PropTypes.func,
  nation: PropTypes.string,
  handleNationChange: PropTypes.func,
}
