import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export const ReturnButton = () => {
  return (
    <Button>
        <Link to="/">
        Return to Home
        </Link>
    </Button>
  )
}
