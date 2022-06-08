import styled from 'styled-components';
import { H1, P, Button, Radio } from 'components/common';

interface StyledContentProps {
  rated?: boolean;
}

export const StyledCard = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 30px;
  background-image: ${({ theme }) => theme.gradient};
`;

export const StyledP = styled(P)`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const StyledContent = styled.div<StyledContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ rated }) => rated && 'center'};
  text-align: ${({ rated }) => rated && 'center'};

  ${StyledP} {
    margin-bottom: ${({ rated }) => (rated ? '13px' : '24px')};
  }
`;

export const StyledText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 23px;
  padding: 5px 12px;
  margin: 24px 0;
`;

export const StyledSpan = styled.span`
  height: 51px;
  width: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.pureWhite};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: auto;
  margin-bottom: 7px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  border: none;
  padding: 11px 0;
  text-transform: uppercase;
  border-radius: 23px;
  color: ${({ theme }) => theme.colors.pureWhite};
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.orange};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: auto;
  margin-top: 32px;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
    background-color: ${({ theme }) => theme.colors.pureWhite};
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.pureWhite};
    background-color: ${({ theme }) => theme.colors.mediumGrey};
    cursor: default;
  }
`;

export const StyledFieldSet = styled.fieldset`
  display: flex;
  justify-content: space-between;
  outline: none;
  border: none;
`;

export const StyledRadio = styled(Radio)`
  display: flex;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  height: 51px;
  width: 51px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.pureWhite};
    background-color: ${({ theme }) => theme.colors.mediumGrey};
  }

  &[data-checked='true'] {
    color: ${({ theme }) => theme.colors.pureWhite};
    background-color: ${({ theme }) => theme.colors.orange};
  }

  & > input {
    position: absolute;
    height: 0;
    opacity: 0;
  }

  & > span {
    line-height: normal;
  }
`;
