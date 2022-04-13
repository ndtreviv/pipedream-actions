import { axios } from '@pipedream/platform';

export default {
  name: 'Get Checkout Line Items',
  description: 'Given a checkout session ID, retrieve the line items',
  key: 'get_checkout_line_items',
  version: '0.0.4',
  type: 'action',
  props: {
    stripe: {
      type: 'app',
      app: 'stripe'
    },
    checkout_session_id: {
      type: 'string',
      label: 'Checkout Session ID'
    },
    line_items_limit: {
      type: 'integer',
      label: 'Number of Line Items'
    }
  },
  async run ({ steps, $ }) {
    return await axios($, {
      url: `https://api.stripe.com/v1/checkout/sessions/${this.checkout_session_id}/line_items?limit=${this.line_items_limit}`,
      auth: {
        username: `${this.stripe.$auth.api_key}`,
        password: ''
      }
    });
  }
};
