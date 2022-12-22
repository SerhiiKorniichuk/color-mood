import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px 10px;

  .react-colorful {
    &__saturation {
      margin: 0 0 20px;
      border-radius: 14px;
      border-bottom: none;
    }

    &__pointer {
      cursor: grab;
    }

    &__hue,
    &__alpha {
      height: 20px;
      border-radius: 14px;
    }

    &__hue-pointer,
    &__alpha-pointer {
      width: 28px;
      height: 28px;
    }
  }
`
