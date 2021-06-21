import FormSignIn from 'components/FormSignIn'
import React from 'react'

import Auth from '../templates/Auth'

export default function SigIn() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  )
}
