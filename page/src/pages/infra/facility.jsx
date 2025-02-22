import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";


/* ------------------ MODAL ONE (Image1) ------------------ */
const ModalOne = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Example submission handler
  const handleSubmit = () => {
    alert("ModalOne: Facility added!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Header */}
        <div className="flex items-center mb-4">
          <span className="inline-block w-5 h-5 mr-2 text-green-500">
            {/* Green check icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.485 1.565a.75.75 0 0 1 .02 1.06l-7.25 7.5a.75.75 0 0 1-1.08.02l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 6.72-6.94a.75.75 0 0 1 1.06-.05z" />
            </svg>
          </span>
          <h2 className="text-lg font-semibold text-gray-800">Add Facility</h2>
        </div>
        {/* Form Body */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Choose from existing infra to add
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            defaultValue=""
          >
            <option value="" disabled>
              eg: projector
            </option>
            <option value="projector">Projector</option>
            <option value="speaker">Speaker</option>
            <option value="mic">Mic</option>
            <option value="other">Other</option>
          </select>
          <p className="text-gray-500 text-sm">Description text</p>
        </div>
        {/* Submit */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Infra
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MODAL TWO (Image2) ------------------ */
const ModalTwo = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Example submission handler
  const handleSubmit = () => {
    alert("ModalTwo: Facility added!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Header */}
        <div className="flex items-center mb-4">
          <span className="inline-block w-5 h-5 mr-2 text-green-500">
            {/* Green check icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.485 1.565a.75.75 0 0 1 .02 1.06l-7.25 7.5a.75.75 0 0 1-1.08.02l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 6.72-6.94a.75.75 0 0 1 1.06-.05z" />
            </svg>
          </span>
          <h2 className="text-lg font-semibold text-gray-800">Add Facility</h2>
        </div>
        {/* Form Body */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Choose from existing infra to add
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            defaultValue=""
          >
            <option value="" disabled>
              eg: projector
            </option>
            <option value="projector">Projector</option>
            <option value="speaker">Speaker</option>
            <option value="mic">Mic</option>
            <option value="other">Other</option>
          </select>
          <p className="text-gray-500 text-sm">Description text</p>
        </div>
        {/* Submit */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Infra
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MODAL THREE (Image3) ------------------ */
const ModalThree = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Example data
  const infraList = [
    { name: "Projector", selected: true },
    { name: "Guest chair", selected: true },
    { name: "Dais table", selected: false },
    { name: "White board", selected: false },
    { name: "Mic", selected: false },
  ];

  // Example submission handler
  const handleSubmit = () => {
    alert("ModalThree: Items added!");
    onClose();
  };

  // For demonstration, we won't implement full toggling logic.
  // You can add a state array and handle checkboxes as needed.

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black " style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Infra</h2>

        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* Search icon (left side) */}
            <div className="absolute top-2 left-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="18"
                height="18"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.867-3.834zm-5.242.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </div>
          </div>
        </div>

        {/* List of infra */}
        <div className="space-y-2 max-h-72 overflow-y-auto">
          {infraList.map((item, idx) => (
            <label
              key={idx}
              className="flex items-center justify-between bg-gray-50 rounded-md px-3 py-2"
            >
              <div className="flex items-center gap-2">
                {/* Example check icon (if selected) or radio if not */}
                {item.selected ? (
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 1 1 10.997.354l2.14 2.142a.5.5 0 1 1-.707.707l-2.147-2.147A5.5 5.5 0 0 1 2.5 8z" />
                    </svg>
                  </span>
                ) : (
                  <span className="inline-block w-4 h-4 border border-gray-300 rounded-full" />
                )}
                <span>{item.name}</span>
              </div>
            </label>
          ))}
        </div>

        {/* Footer (Deselect all, Selected count, Add) */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4 text-sm">
            <button className="text-red-500 hover:text-red-600">
              Deselect All
            </button>
            <span className="text-gray-500">Selected 20</span>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MAIN PAGE ------------------ */
const FacilitiesPage = () => {
  // "modalType" controls which modal is open. null = none open
  const [modalType, setModalType] = useState(null);

  // Common open/close functions
  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow flex gap-10">
        {/* SECTION 1: Roles */}
        <div className="flex-3">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-400">Venue Type</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <FontAwesomeIcon icon={faUpload} />
              <span>Bulk Upload</span>
            </button>
          </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Roles who can use the venue
          </h2>
          {/* Some content */}
          <button
            onClick={() => openModal("section1")}
            className="border border-dashed border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Add role
          </button>
        </div>

        {/* SECTION 2: Facilities */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Facilities</h2>
          {/* Some content */}
          <button
            onClick={() => openModal("section2")}
            className="border border-dashed border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Add role
          </button>
        </div>
        </div>

        {/* SECTION 3: Facilities to be added */}
        <div className="flex-2">

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-10">
            Facilities to be added
          </h2>
          {/* Some content */}
          <button
            onClick={() => openModal("section3")}
            className="border border-dashed border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Add role
          </button>
        </div>
      </div>
      </div>


      {/* RENDER MODALS CONDITIONALLY */}
      <ModalOne isOpen={modalType === "section1"} onClose={closeModal} />
      <ModalTwo isOpen={modalType === "section2"} onClose={closeModal} />
      <ModalThree isOpen={modalType === "section3"} onClose={closeModal} />
    </div>
  );
};

export default FacilitiesPage;