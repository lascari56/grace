import React, {useState} from 'react'

import EyeOpenSVG from './images/eye-open'

import * as S from './input.styled'

export default function InputView({title, placeholder, size, type, className}) {

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
   
    setPasswordShown(!passwordShown);
  };

  return (
    <S.Container className={className}>
      <S.Title>{title}</S.Title>

      <S.Content>
        <S.Input type={passwordShown ? "text" : "password"} size={size} placeholder={placeholder}/>

        {type === "password" && (
          <S.Eye onClick={togglePassword}>
            <EyeOpenSVG/>
          </S.Eye>
          )}
      </S.Content>
    </S.Container>
  )
}
