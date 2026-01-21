export default class ProductModel {
  products = [
    {
      id: 1,
      name: "apple",
      image:
        "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png",
    },
    {
      id: 2,
      name: "samsung",
      image:
        "https://w7.pngwing.com/pngs/176/171/png-transparent-samsung-galaxy-gurugram-faridabad-logo-samsung-blue-text-logo.png",
    },
    {
      id: 3,
      name: "oneplus",
      image:
        "https://image01-in.oneplus.net/media/202512/12/515f7b2e234f759c3f0117a06601222c.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 4,
      name: "Google",
      image:
        "https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
    },
    {
      id: 5,
      name: "apple",
      image:
        "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png",
    },
    {
      id: 6,
      name: "redmi",
      image:
        "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png",
    },
  ];

  getAllProducts = () => {
    return this.products;
  };
  searchResult = (name) => {
    const data = this.products.filter((product) => {
      if (product.name.toLowerCase() == name.toLowerCase()) {
        return product;
      }
    });
    return data;
  };
}
