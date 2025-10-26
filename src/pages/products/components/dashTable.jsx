import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState } from "react";

const ProductPriceTable = () => {
  const [activeRowId, setActiveRowId] = useState(1);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [rows, setRows] = useState([
    {
      id: 1,
      articleNo: "1234567890",
      productService: "This is a test product with fifty characters this!",
      inPrice: "900500",
      price: "1500800",
      unit: "kilometers/hour",
      inStock: "2500600",
      description: "This is the description with fifty characters this",
    },
    {
      id: 2,
      articleNo: "9876543210",
      productService: "Another product example here",
      inPrice: "500200",
      price: "1200500",
      unit: "meters/second",
      inStock: "1800300",
      description: "Another description example",
    },
  ]);

  const handleCellClick = (rowId, field, value) => {
    setEditingCell({ rowId, field });
    setEditValue(value);
  };

  const handleCellChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleCellBlur = () => {
    if (editingCell) {
      //CALL AN UPDATE API
    }
    setEditingCell(null);
  };

  const isEditing = (rowId, field) => {
    return editingCell?.rowId === rowId && editingCell?.field === field;
  };

  const renderCell = (rowId, field, value) => {
    if (isEditing(rowId, field)) {
      return (
        <input
          type="text"
          value={editValue}
          onChange={handleCellChange}
          onBlur={handleCellBlur}
          autoFocus
          className="edit-input"
        />
      );
    }

    return (
      <div
        className="cell-box"
        onClick={() => handleCellClick(rowId, field, value)}
      >
        <span className="cell-text">{value}</span>
      </div>
    );
  };

  return (
    <div className="table-cont">
      <table className="table">
        <thead>
          <tr>
            <th className="indicator-col table-head"></th>
            <th className="table-head">Article No.</th>
            <th className="table-head">Product/Service</th>
            <th className="table-head">In Price</th>
            <th className="table-head">Price</th>
            <th className="table-head">Unit</th>
            <th className="table-head">In Stock</th>
            <th className="table-head">Description</th>
            <th className="action-col table-head"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} onClick={() => setActiveRowId(row.id)}>
              <td className="indicator-col">
                {activeRowId === row.id && (
                  <div className="active-row-div">
                    <IconArrowNarrowRight className="active-row-icon" />
                  </div>
                )}
              </td>
              <td>{renderCell(row.id, "articleno", row.articleNo)}</td>
              <td>{renderCell(row.id, "product", row.productService)}</td>
              <td>{renderCell(row.id, "inprice", row.inPrice)}</td>
              <td>{renderCell(row.id, "price", row.price)}</td>
              <td>{renderCell(row.id, "unit", row.unit)}</td>
              <td>{renderCell(row.id, "stock", row.inStock)}</td>
              <td>{renderCell(row.id, "description", row.description)}</td>
              <td className="action-col">
                <span className="action-dots">⋯</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPriceTable;
