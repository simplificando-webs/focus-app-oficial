// Temporarily disabled Stripe integration
export const getStripe = () => {
  console.log('Stripe integration is temporarily disabled');
  return null;
};

export const stripe = {
  checkout: {
    sessions: {
      create: async () => {
        console.log('Stripe checkout is temporarily disabled');
        return null;
      }
    }
  },
  webhooks: {
    constructEvent: () => {
      console.log('Stripe webhooks are temporarily disabled');
      return null;
    }
  }
};
