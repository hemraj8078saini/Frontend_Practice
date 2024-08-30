import React from 'react'
import Button from 'react-bootstrap/Button';

const Bootstraps = () => {
  return (
    <>
      <Button variant="primary bg-pink-500 w-[120px]">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link border bg-blue-200">Link</Button>
    </>
  )
}

export default Bootstraps
