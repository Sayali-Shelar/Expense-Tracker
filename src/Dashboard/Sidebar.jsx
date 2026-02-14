import React from "react";

const Sidebar = ({ setActivePage, activePage, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed md:static top-0 left-0 z-50
        h-screen w-64 bg-gray-900 text-white p-5
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">
          Expense Tracker
        </h2>

        <button
  onClick={() => {
    setActivePage("overview");
    setIsOpen(false);
  }}
  className={`mb-3 p-2 w-full rounded ${
    activePage === "overview"
      ? "bg-blue-500"
      : "hover:bg-gray-700"
  }`}
>
  Overview
</button>


        <button
          onClick={() => {
            setActivePage("income");
            setIsOpen(false);
          }}
          className={`mb-3 p-2 w-full rounded ${
            activePage === "income"
              ? "bg-green-500"
              : "hover:bg-gray-700"
          }`}
        >
          Income
        </button>

        <button
          onClick={() => {
            setActivePage("expense");
            setIsOpen(false);
          }}
          className={`mb-3 p-2 w-full rounded ${
            activePage === "expense"
              ? "bg-red-500"
              : "hover:bg-gray-700"
          }`}
        >
          Expense
        </button>
      </div>
    </>
  );
};

export default Sidebar;
