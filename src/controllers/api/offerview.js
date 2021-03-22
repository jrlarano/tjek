
import _ from 'lodash';
import productTransformer from '../../transformers/productTransformer'
import * as htmlToImage from 'html-to-image';
import nodeHtmlToImage from 'node-html-to-image';
import http from '../../services/http';

export default {

  /**
   * productOffer
   *
   * @param {String} id
   * @param {String} width
   * @param {String} height
   *
   * @returns {Rendered HTML}
   */
  productOffer: async (req, res) => {

    let {id, width, height} = '';

    if (req.method == 'GET') {
      width = req?.query?.width;
      height = req?.query?.height;
      id = req?.query?.id;
    } else if (req.method == 'POST') {
      width = req?.body?.width ?? 600;
      height = req?.body?.height ?? 600;
      id = req?.body?.id ?? '';
    } else {
      res.render('error');
    }

    const product = await http.get('https://d15xqce4hhe7im.cloudfront.net/test-data/DSA0721.json')
      .then((res) => {
        const products = res?.products ?? [];
        const productRaw = products.filter((prod) => {
          return prod.id == id;
        });
        return productTransformer.transformProductResult(productRaw[0]);;
      })
      .catch((err) => {
          return err;
      });

    const data = {
      product,
      width,
      height
    }

    res.render('offer', data);
  },


  /**
   * generateImage
   *
   * @param {String} id
   * @param {String} width
   * @param {String} height
   *
   * @returns {Rendered Image}
   */
  generateImage: async (req, res) => {

    let {id, width, height} = '';

    if (req.method == 'GET') {
      width = req?.query?.width;
      height = req?.query?.height;
      id = req?.query?.id;
    } else if (req.method == 'POST') {
      width = req?.body?.width ?? 600;
      height = req?.body?.height ?? 600;
      id = req?.body?.id ?? '';
    } else {
      res.render('error');
    }

    const product = await http.get('https://d15xqce4hhe7im.cloudfront.net/test-data/DSA0721.json')
      .then((res) => {
        const products = res?.products ?? [];
        const productRaw = products.filter((prod) => {
          return prod.id == id;
        });
        return productTransformer.transformProductResult(productRaw[0]);;
      })
      .catch((err) => {
          return err;
      });

    const data = {
      product,
      width,
      height,
      htmlToImage
    }

    const htmlStr = `
      <div id=${product.id} style="width:${width};height:${height};">
        <div style="max-width:80%; max-height:80%; margin:auto;">
            <img src="${product.image}" style="max-width:100%; max-height:100%;">
        </div>
        <div>This is the title ${product.title}</div>
        <div>This is the desc ${product.description}</div>
        <div>This is the image ${product.price}</div>
      </div>
    `;

    nodeHtmlToImage({
      output: `./public/images/${product.id}.png`,
      html: htmlStr
    })
      .then(() => console.log('The image was created successfully!'))

    res.render('offer_img', data);
  },
}
