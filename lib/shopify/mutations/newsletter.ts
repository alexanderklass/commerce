export const subscribeNewsLetterMutation = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        acceptsMarketing
      }
      userErrors {
        field
        message
      }
    }
  }
`;
