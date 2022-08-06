import React, {useState} from 'react'

import EyeOpenSVG from './images/eye-open'

import * as S from './input.styled'

export default function InputView({title, placeholder, type, className, theme}) {

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
   
    setPasswordShown(!passwordShown);
  };

  return (
    <S.Container className={className}>
      <S.Title>{title}</S.Title>

      <S.Content>
        <S.Input type={passwordShown ? "text" : "password"} theme={theme} placeholder={placeholder}/>

        {type === "password" && (
          <S.Eye onClick={togglePassword}>
            <EyeOpenSVG/>
          </S.Eye>
          )}
      </S.Content>
    </S.Container>
  )
}
