import {
  StyledCard,
  StyledContent,
  StyledText,
  StyledSpan,
  StyledH1,
  StyledP,
  StyledForm,
  StyledButton,
  StyledRadio,
  StyledFieldSet,
} from './style';
import { Img } from 'components/common';
import starIcon from 'assets/icon-star.svg';
import thankYouIllustration from 'assets/illustration-thank-you.svg';
import useRadio from 'hooks/useRadio';
import useForm from 'hooks/useForm';

export const Card = () => {
  const [rating, handleRating] = useRadio();
  const [submited, handleSubmit] = useForm();

  return (
    <StyledCard>
      {submited ? (
        <StyledContent rated={true}>
          <Img src={thankYouIllustration} alt="" />
          <StyledText>You selected {rating} out of 5</StyledText>
          <StyledH1>Thank you!</StyledH1>
          <StyledP>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </StyledP>
        </StyledContent>
      ) : (
        <StyledContent>
          <StyledSpan>
            <Img src={starIcon} alt="Star icon" />
          </StyledSpan>
          <StyledH1>How did we do?</StyledH1>
          <StyledP>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </StyledP>
          <StyledForm onSubmit={handleSubmit}>
            <StyledFieldSet>
              <StyledRadio
                name="rating"
                value={1}
                checked={rating}
                onChange={(event) => handleRating(event)}
              >
                1
              </StyledRadio>
              <StyledRadio
                name="rating"
                value={2}
                checked={rating}
                onChange={(event) => handleRating(event)}
              >
                2
              </StyledRadio>
              <StyledRadio
                name="rating"
                value={3}
                checked={rating}
                onChange={(event) => handleRating(event)}
              >
                3
              </StyledRadio>
              <StyledRadio
                name="rating"
                value={4}
                checked={rating}
                onChange={(event) => handleRating(event)}
              >
                4
              </StyledRadio>
              <StyledRadio
                name="rating"
                value={5}
                checked={rating}
                onChange={(event) => handleRating(event)}
              >
                5
              </StyledRadio>
            </StyledFieldSet>
            <StyledButton type="submit" disabled={!rating}>
              Submit
            </StyledButton>
          </StyledForm>
        </StyledContent>
      )}
    </StyledCard>
  );
};
