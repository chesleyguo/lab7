import { memo } from "react";

// TODO 4 (done): ProductRow is wrapped in React.memo, so it only re-renders
// when its props (product, onToggleFavorite) change. Because the parent
// passes a stable useCallback handler and toggling only replaces the clicked
// product object, clicking a star re-renders just that one row.

function ProductRow({ product, onToggleFavorite }) {
  console.log("Row render:", product.name);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => onToggleFavorite(product.id)}>
          {product.favorite ? "★" : "☆"}
        </button>
      </td>
    </tr>
  );
}

export default memo(ProductRow);
