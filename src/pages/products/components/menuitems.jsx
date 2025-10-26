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
import React from "react";

const DashMenuItems = () => {
  return (
    <>
      <div className="dash-menu-item">
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
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconUserFilled
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Customers</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconSettings
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>My Business</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconNotebook
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Invoice Journal</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconTagFilled
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Price List</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconFileInvoiceFilled
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Multiple Invoicing</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCircleDashedX
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Unpaid Invoices</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCertificate
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Offer</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconFileSettingsFilled
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Inventory Control</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCalendarUser
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Member Invoicing</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconCloudUpload
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Import/Export</p>
        </div>
      </div>

      <div className="dash-menu-item">
        <div
          className="dash-menu-icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconLogout
            style={{ color: "#4E61D3", alignContent: "end" }}
            size={20}
          />
        </div>

        <div
          className="dash-menu-name"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          <p>Log out</p>
        </div>
      </div>
    </>
  );
};

export default DashMenuItems;
