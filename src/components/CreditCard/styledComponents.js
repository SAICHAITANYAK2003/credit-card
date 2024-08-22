// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CardContainer = styled.div`
  height: 100vh;
  width: 50%;
  background-color: #3b4b69;
  padding: 10px;
`

export const CreditCardTitle = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 25px;
  text-decoration-color: #ffd773;
`
export const CreditCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 40vh;
  width: 30vw;
  border-radius: 20px;
  padding-left: 30px;
`

export const CreditCardNumber = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 30px;
  padding-bottom: 20px;
`
export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
`
export const CardHolderTitle = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`
export const CardHolderName = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 20px;
`
export const PayMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
  background-color: #fff;
  padding: 10px;
`
export const PayDetailsTitle = styled.h1`
  font-family: 'Roboto';
  padding-bottom: 20px;
  color: #344e7a;
`

export const PayDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 300px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const CardNumberInput = styled.input`
  height: 45px;
  width: 300px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 1px solid #c3cad9;
`

export const CardHolderNameInput = styled.input`
  height: 45px;
  width: 300px;
  padding-left: 10px;
  border: 1px solid #c3cad9;
`
