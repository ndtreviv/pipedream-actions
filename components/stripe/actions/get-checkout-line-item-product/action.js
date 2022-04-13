import { axios } from '@pipedream/platform';

export default {
  name: 'Get Checkout Line Item Product',
  description: 'Given a checkout session line item, retrieve the associated product',
  key: 'get_product_from_line_item',
  version: '0.0.2',
  type: 'action',
  props: {
    stripe: {
      type: 'app',
      app: 'stripe'
    },
    product_id: {
      type: 'string',
      label: 'Product ID'
    }
  },
  async run ({ steps, $ }) {
    return await axios($, {
      url: `https://api.stripe.com/v1/products/${this.product_id}`,
      auth: {
        username: `${this.stripe.$auth.api_key}`,
        password: ''
      }
    });
  }
};
