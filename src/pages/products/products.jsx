import {
  IconCirclePlusFilled,
  IconCodeVariablePlus,
  IconFileInvoice,
  IconPrinter,
  IconSearch,
} from "@tabler/icons-react";
import { DashNavbar } from "./components/dashNavbar";
import "./products.styles.css";
import DashMenuItems from "./components/menuitems";
import ProductPriceTable from "./components/dashTable";

export const Products = () => {
  return (
    <>
      <DashNavbar />

      {/* Dash Contents */}

      <div className="dash-cont">
        <div className="dash-sidebar">
          <div className="dash-menu-title">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                textAlign: "center",
                marginBottom: "4px",
                paddingBottom: "4px",
                borderBottom: "2px solid",
                borderColor: "#B3BFFF",
              }}
            >
              Menu
            </p>
          </div>

          <div className="dash-menu-items-cont">
            <DashMenuItems />
            {/* <div className="dash-menu-item">
              <div
                className="dash-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <IconFileInvoice
                  style={{ color: "#4E61D3", alignContent: "end" }}
                  size={20}
                />
              </div>

              <div
                className="dash-menu-name"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                <p>Invoices</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="dash-main-cont">
          {/* Dash Filters */}
          <div className="dash-action-cont">
            <div className="dash-search-group">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search Article No..."
                  className="search-input"
                />
                <IconSearch className="search-icon" size={26} />
              </div>

              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search Product..."
                  className="search-input"
                />
                <IconSearch className="search-icon" size={26} />
              </div>
            </div>

            <div className="dash-btn-cont">
              <div className="dash-btn-group">
                <p className="dash-btn-text">New Product</p>
                <IconCirclePlusFilled style={{ color: "green" }} />
              </div>

              <div className="dash-btn-group">
                <p className="dash-btn-text">Price List</p>
                <IconPrinter style={{ color: "73C8D2" }} />
              </div>

              <div className="dash-btn-group">
                <p className="dash-btn-text">Advanced Mode</p>
                <IconCodeVariablePlus style={{ color: "73C8D2" }} />
              </div>
            </div>
          </div>
          {/* Dash Price Tables */}
          <ProductPriceTable />
        </div>
      </div>
    </>
  );
};
