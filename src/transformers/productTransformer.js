import _ from 'lodash';

export default {

    /**
     * transformProductResult
     *
     * @param {Object} product
     *
     * @returns {Object}
     */
    transformProductResult: (product) => {
        return {
            id: _.get(product, 'id', ''),
            title: _.get(product, 'product_title', ''),
            description: _.get(product, 'product_description', ''),
            link: _.get(product, 'link', ''),
            image: _.get(product, 'image_link', ''),
            category: _.get(product, 'category', ''),
            price: _.get(product, 'price', ''),
            per_unit: _.get(product, 'per_unit', ''),
            membership_pricing: _.get(product, 'membership_pricing', ''),
            savings: _.get(product, 'savings', ''),
            currency: _.get(product, 'currency', ''),
            quantity: _.get(product, 'quantity', ''),
            availability: _.get(product, 'availability', ''),
            brand: _.get(product, 'brand', '')
        }
    }

}