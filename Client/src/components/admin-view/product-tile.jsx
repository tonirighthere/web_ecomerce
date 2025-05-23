import { useState } from "react";
import { Button } from "../ui/button";

function AdminProductTile({
  products = [],
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
  handleView,
}) {
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    // Hiển thị hộp thoại xác nhận
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      handleDelete(id);
    }
  };

  return (
    <div className="w-full flex justify-center">
  <div className="w-full max-w-7xl"> {/* tăng max-w-5xl lên max-w-7xl */}
    <table className="min-w-[1200px] w-full bg-white rounded-lg shadow"> {/* tăng min-w */}
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">Product ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left w-[400px]">Description</th> {/* tăng width */}
          <th className="px-4 py-2 text-left">Image</th>
          <th className="px-4 py-2 text-left">Price</th>
          <th className="px-4 py-2 text-left">Total stock</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 text-blue-600 font-semibold cursor-pointer">
                    #{product.code || product._id?.slice(0, 6).toUpperCase()}
                  </td>
                  <td className="px-4 py-2">{product.title}</td>
                  <td className="px-4 py-2 w-[400px]">
                    <span className="block">{product.description}</span>
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-bold">
                    ${product.salePrice > 0
                      ? (product.price - (product.price * product.salePrice) / 100).toFixed(2)
                      : product.price}
                  </td>
                  <td className="px-4 py-2 w-[100px]">{product.stock || product.totalStock}</td>
                  <td className="px-4 py-2 flex gap-2">
                    {handleView && (
                      <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => handleView(product)}
                      >
                        <span className="mr-1">View</span>
                        <span role="img" aria-label="view">👁️</span>
                      </Button>
                    )}
                    <Button
                      className="bg-green-400 hover:bg-green-500 text-black"
                      onClick={() => {
                        setOpenCreateProductsDialog(true);
                        setCurrentEditedId(product._id);
                        setFormData(product);
                      }}
                    >
                      <span className="mr-1">Edit</span>
                      <span role="img" aria-label="edit">✏️</span>
                    </Button>
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => handleDeleteClick(product._id)}
                    >
                      <span className="mr-1">Delete</span>
                      <span role="img" aria-label="delete">🗑️</span>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductTile;