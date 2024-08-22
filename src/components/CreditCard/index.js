// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CreditCardTitle,
  CreditCardContainer,
  CreditCardDetails,
  CreditCardNumber,
  CardHolderTitle,
  CardHolderName,
  PayMethodContainer,
  PayDetailsContainer,
  PayDetailsTitle,
  CardNumberInput,
  CardHolderNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [inputNumber, setInputNumber] = useState('')
  const [inputName, setInputName] = useState('')

  const onChangeInputNumber = event => {
    setInputNumber(event.target.value)
  }
  const onChangeInputName = event => {
    setInputName(event.target.value)
  }
  return (
    <MainContainer>
      <CardContainer>
        <CreditCardTitle>CREDIT CARD</CreditCardTitle>
        <CreditCardContainer>
          <CreditCardDetails data-testid="creditCard">
            <CreditCardNumber>{inputNumber}</CreditCardNumber>
            <CardHolderTitle>CARDHOLDER NAME</CardHolderTitle>
            <CardHolderName>{inputName}</CardHolderName>
          </CreditCardDetails>
        </CreditCardContainer>
      </CardContainer>
      <PayMethodContainer>
        <PayDetailsContainer>
          <PayDetailsTitle>Payment Method</PayDetailsTitle>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            value={inputNumber}
            onChange={onChangeInputNumber}
          />
          <CardHolderNameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeInputName}
            value={inputName}
          />
        </PayDetailsContainer>
      </PayMethodContainer>
    </MainContainer>
  )
}

export default CreditCard
