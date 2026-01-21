// Please don't change the pre-written code
// Import the necessary modules here
//iv) Implement the 'search' controller inside the 'productcontroller.js' file to handle the POST request at the '/search' endpoint and seamlessly render the search data through the "searchResults.ejs" view.

import ProductModel from "../models/productModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
    const {name} = req.body;
    const searchResult = productModel.searchResult(name);
    res.render("searchResults", { products: searchResult });
  };
}
