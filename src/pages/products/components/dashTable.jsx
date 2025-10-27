import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../../providers/authProvider";
import "./dashComponents.styles.css";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ProductPriceTable = ({ language }) => {
  const [activeRowId, setActiveRowId] = useState(1);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [oldEditValue, setOldEditValue] = useState("");
  const { token } = useAuth();

  const [productRows, setProductRows] = useState([]);
  const [productLoading, setProductLoading] = useState(true);

  const fetchProducts = async () => {
    setProductLoading(true);
    try {
      const res = await fetch(`${baseUrl}/products`, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setProductRows(data?.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setProductLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCellClick = (rowId, field, value) => {
    setEditingCell({ rowId, field });
    setEditValue(value);
    setOldEditValue(value);
  };

  const handleCellChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleCellBlur = async () => {
    if (editingCell) {
      const intFields = ["articleno", "inprice", "price", "stock"];
      const editingField = editingCell?.field;

      let updateValue = intFields.includes(editingField)
        ? +editValue
        : editValue;

      const reqBody = {
        [editingField]: updateValue,
      };

      let canCallApi = false;

      if (intFields.includes(editingField))
        canCallApi = editValue !== oldEditValue;
      else canCallApi = editValue.trim() !== oldEditValue.trim();

      console.log({ canCallApi });

      if (canCallApi) {
        setProductRows((prevRows) =>
          prevRows.map((row) =>
            row.id === editingCell.rowId
              ? { ...row, [editingField]: updateValue }
              : row
          )
        );

        try {
          const res = await fetch(`${baseUrl}/products/${editingCell.rowId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(reqBody),
          });

          if (res.ok) fetchProducts();
          else {
            setProductRows((prevRows) =>
              prevRows.map((row) =>
                row.id === editingCell.rowId
                  ? { ...row, [editingField]: oldEditValue }
                  : row
              )
            );
          }
        } catch (err) {
          console.error("Error updating product", err);

          setProductRows((prevRows) =>
            prevRows.map((row) =>
              row.id === editingCell.rowId
                ? { ...row, [editingField]: oldEditValue }
                : row
            )
          );
        }
      }
    }

    setEditingCell(null);
    setOldEditValue(null);
  };

  const isEditing = (rowId, field) => {
    return editingCell?.rowId === rowId && editingCell?.field === field;
  };

  const renderCell = (rowId, field, value) => {
    const centerTextFields = ["articleno", "inprice", "price", "unit", "stock"];

    const centerTxtClassName = centerTextFields.includes(field)
      ? "cell-center-txt"
      : "";

    if (isEditing(rowId, field)) {
      return (
        <input
          type="text"
          value={editValue}
          onChange={handleCellChange}
          onBlur={handleCellBlur}
          autoFocus
          className={`edit-input ${centerTxtClassName}`}
        />
      );
    }

    return (
      <div
        className="cell-box"
        onClick={() => handleCellClick(rowId, field, value)}
      >
        <span className={`cell-text ${centerTxtClassName}`}>{value}</span>
      </div>
    );
  };

  return (
    <div className="table-cont">
      <table className="table">
        <thead>
          <tr>
            <th className="indicator-col table-head"></th>
            <th className="table-head">
              {language?.productcolumn?.articleNo}{" "}
            </th>
            <th className="table-head">
              {language?.productcolumn?.productService}
            </th>
            <th className="table-head">{language?.productcolumn?.inPrice}</th>
            <th className="table-head">{language?.productcolumn?.price}</th>
            <th className="table-head">{language?.productcolumn?.unit}</th>
            <th className="table-head">{language?.productcolumn?.inStock}</th>
            <th className="table-head">
              {language?.productcolumn?.description}
            </th>
            <th className="action-col table-head"></th>
          </tr>
        </thead>
        <tbody>
          {productRows.map((row) => (
            <tr
              key={row.id}
              onClick={() => setActiveRowId(row.id)}
              className="table-row"
            >
              <td className="indicator-col">
                {activeRowId === row.id && (
                  <div className="active-row-div">
                    <IconArrowNarrowRight className="active-row-icon" />
                  </div>
                )}
              </td>
              <td>{renderCell(row.id, "articleno", row.articleno)}</td>
              <td>{renderCell(row.id, "product", row.product)}</td>
              <td>{renderCell(row.id, "inprice", row.inprice)}</td>
              <td>{renderCell(row.id, "price", row.price)}</td>
              <td>{renderCell(row.id, "unit", row.unit)}</td>
              <td>{renderCell(row.id, "stock", row.stock)}</td>
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
