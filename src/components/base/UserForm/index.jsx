import React from 'react'
import styled from '@emotion/styled'

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

const UserForm = () => {
  return (
    <UserFormBlock>
      <input type="text" />
      <select name="" id="">
        <option value="1">1</option>
        <option value="1">1</option>
        <option value="1">1</option>
      </select>
    </UserFormBlock>
  )
}

export default UserForm
