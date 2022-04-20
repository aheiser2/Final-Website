import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export const ReturnButton = () => {
  return (
    <Button>
        <Link style={{color: 'white', position: "fixed", bottom: 0, marginBottom: "20px"}} to="/">
        Return to Home
        </Link>
    </Button>
  )
}
