import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgetPassword href="#">Forgot your password?</S.ForgetPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        don’t have an account ? <Link href="/logn-un">Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
