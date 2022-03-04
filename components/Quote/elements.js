import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(170deg,#1971cb 0,#002b47 100%);
    flex-direction: column;
    color: #fff; 
    justify-content: space-evenly;
`

export const TextContent = styled.div`
    width: clamp(300px, 90vw, 900px);
    h1 {
        text-transform: capitalize;
        text-align: center;
        font-size: 4.9rem;
        line-height: 1em;
        margin-bottom: 0;
        text-shadow: 1px 1px 1px #919191,
            1px 2px 1px #919191,
            1px 3px 1px #919191;
    }

    p {
        font-size: 1.4rem;
        margin: 0;
        text-align: center;
    }
`

export const ButtonsContainer = styled.div`
    width: clamp(300px, 90vw, 900px);
    display: ${({submitTrue}) => (submitTrue ? 'none' : 'block')};
`
export const Wrapper = styled.div`
    width: 100%;
    /* background: #fff; */
`
export const Button = styled.button`
  background-color: #fff;
  padding: 8px 20px;
  border: 1px solid #1971cb;
  color: #000;
  margin: 2px 5px;
  cursor: pointer;
  font-size: 0.85rem;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 7px;
`

const StyledInput = styled.input`
    width: clamp(300px, 90vw, 900px);
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 8px; 
    font-size: 1.2rem;
    outline: none;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    box-sizing: border-box;
    color: #000;
    &:focus {
        border: 1.5px solid #1971cb;
    }
`

const InputLabel = styled.label`
  font-size: 0.9rem;
  display: block;
`

export function Input(props) {
    return (
      <div>
        <InputLabel>{props.label}</InputLabel>
        <StyledInput {...props}/>
      </div>
    )
}
const CheckboxWrapper = styled.div`
    width: clamp(300px, 90vw, 900px);
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
`
const CheckboxLabel = styled.label`
    font-size: 1.4rem;
    cursor: pointer;
`
const StyledCheckbox = styled.input`
    padding: 40px 40px;
    border: 1px solid #ddd;
    &:focus {
        border: 1.5px solid #1971cb;
    }
`
export const Checkbox = (props) => {
    return (
        <CheckboxWrapper>
            <CheckboxLabel htmlFor={props.id}>{props.label}</CheckboxLabel>
            <StyledCheckbox {...props}/>
        </CheckboxWrapper>
    )
}