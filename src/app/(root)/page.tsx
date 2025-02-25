import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    $id: "1",
    email: "john.doe@example.com",
    userId: "1001",
    dwollaCustomerUrl: "https://api-sandbox.dwolla.com/customers/1001",
    dwollaCustomerId: "1001",
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    address1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    dateOfBirth: "1990-05-15",
    ssn: "123-45-6789",
  };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting' 
            title='Welcome' 
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'/>
        </header>
      </div>
    </section>
  )
}

export default Home