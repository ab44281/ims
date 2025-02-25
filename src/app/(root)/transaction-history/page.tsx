import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const TransactionHistory = () => {
  return (
    <section className='transactions'>
        <HeaderBox
            title='Transaction History'
            subtext='See your bank details and transactions.'
        />
    </section>
  )
}

export default TransactionHistory