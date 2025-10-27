import {
  IconCalendarUser,
  IconCertificate,
  IconCircleDashedX,
  IconCloudUpload,
  IconFileInvoice,
  IconFileInvoiceFilled,
  IconFileSettingsFilled,
  IconLogout,
  IconNotebook,
  IconSettings,
  IconTagFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import "./dashComponents.styles.css";
import { useAuth } from "../../../providers/authProvider";

const DashMenuItems = ({ language }) => {
  const { logout } = useAuth();

  const handleLogOutClick = () => {
    logout();
  };

  return (
    <>
      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconFileInvoice
            style={{ alignContent: "end", color: "#73C8D2" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.invoices}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconUserFilled
            style={{ color: "#73C8D2", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.customers}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconSettings
            style={{ color: "#0ba6df", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.business}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconNotebook
            style={{ color: "#4FB7B3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.invoiceJournal}</p>
        </div>
      </div>

      <div className="dash-menu-item active-menu-item">
        <div className="active-green-dot">🟢</div>

        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconTagFilled
            style={{ color: "#F4991A", alignContent: "end" }}
            size={20}
          />
        </div>
        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.priceList}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconFileInvoiceFilled
            style={{ color: "#4FB7B3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.multipleInvoicing}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCircleDashedX
            style={{ color: "#ED3F27", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.unpaidInvoices}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCertificate
            style={{ color: "#FDEB9E", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.offer}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconFileSettingsFilled
            style={{ color: "#48B3AF", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500, color: "#999999" }}
        >
          <p>{language?.dashmenu?.inventoryControl}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCalendarUser
            style={{ color: "#239BA7", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500, color: "#999999" }}
        >
          <p>{language?.dashmenu?.memberInvoicing}</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCloudUpload
            style={{ color: "#7A85C1", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.importExport}</p>
        </div>
      </div>

      <div className="dash-menu-item" onClick={handleLogOutClick}>
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconLogout
            style={{ color: "#A3DC9A", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>{language?.dashmenu?.logout}</p>
        </div>
      </div>
    </>
  );
};

export default DashMenuItems;
