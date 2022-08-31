import React, {useState} from 'react'

import EyeOpenSVG from './images/eye-open'

import * as S from './input.styled'

export default function InputView({title, placeholder, type, isValid, className, theme, onChange}) {

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
   
    setPasswordShown(!passwordShown);
  };

  return (
    <S.Container className={className}>
      <S.Title>{title}</S.Title>

      <S.Content>
        <S.Input
          type={passwordShown ? "text" : "password"}
          theme={theme}
          placeholder={placeholder}
          isValid={isValid}
          onChange={event => onChange && onChange(event.target.value)}
        />

        {type === "password" && (
          <S.Eye onClick={togglePassword}>
            <EyeOpenSVG/>
          </S.Eye>
          )}
      </S.Content>
    </S.Container>
  )
}
