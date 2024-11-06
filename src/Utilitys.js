import { toast } from "react-toastify";

const getProducts = () => {
  const allProduct = localStorage.getItem("product");

  if (allProduct) {
    const favorites = JSON.parse(allProduct);

    return favorites;
  } else {
    return [];
  }
};

const addFavorite = (productDeatil) => {
  const favorites = getProducts();
  const isExist = favorites.find(
    (item) => item.product_id == productDeatil.product_id
  );
  if (isExist) return toast.error("Already added to cart!");
  favorites.push(productDeatil);
  localStorage.setItem("product", JSON.stringify(favorites));
  toast.success("Successfully added to cart!");
};

const getWishlistProducts = () => {
  const allProduct = localStorage.getItem("wishlist");

  if (allProduct) {
    const wishProducts = JSON.parse(allProduct);
    return wishProducts;
  } else {
    return [];
  }
};

const addWishList = (productDeatil) => {
  const wishlist = getWishlistProducts();
  const isExist = wishlist.find(
    (item) => item.product_id == productDeatil.product_id
  );

  if (isExist) return toast.error("Already added to WishList!");
  wishlist.push(productDeatil);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Successfully added to WishList!");
};

export { addFavorite, addWishList, getProducts, getWishlistProducts };
