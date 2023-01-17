import { gql  } from '@apollo/client';

const RESEND_VERIFICATION_LINK = gql`
mutation ResendVerification {
    resendVerificationEmail {
        message
      }
  }
`;

export default RESEND_VERIFICATION_LINK;