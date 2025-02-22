import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./progressbar";
import VenueTypeForm from "./venu";
import ImageUploadLabel from "../../components/imageupload";
import FacilitiesPage from "./facility";

function FormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    venueName: "Sunflower block-basement class-01",
    primaryPurpose: "Trainings",
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full mx-auto">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {/* Step 1: Basic Details */}
      {currentStep === 1 && (
        <div className="flex flex-row gap-5">
        <div className="flex-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Basic Details</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <FontAwesomeIcon icon={faUpload} />
              <span>Bulk Upload</span>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Unique ID</label>
              <input
                type="text"
                value="SFB01"
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Venue Name</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.venueName}
                onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
              >
                <option>Sunflower block-basement class-01</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value="Sunflower block"
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Priority</label>
              <div className="flex flex-row space-x-2">
                <span className="px-4 py-1 border rounded-lg text-red-500 border-red-500 bg-red-100">
                  High
                </span>
                <span className="px-4 py-1 border rounded-lg text-yellow-500 border-yellow-500 bg-yellow-100">
                  Medium
                </span>
                <span className="px-4 py-1 border rounded-lg text-blue-500 border-blue-500 bg-blue-100">
                  Low
                </span>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Primary Purpose</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.primaryPurpose}
                onChange={(e) => setFormData({ ...formData, primaryPurpose: e.target.value })}
              >
                <option>Trainings</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Responsible Person</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.primaryPurpose}
                onChange={(e) => setFormData({ ...formData, primaryPurpose: e.target.value })}
              >
                <option>Trainings</option>
              </select>
            </div>
        </div>
            
          </div>
          <div className="flex-2">
                <h2 className="ml-5 text-xl font-semibold mb-10">Add Venue Image</h2>
                <ImageUploadLabel   />
            </div>
        </div>
      )}

      {/* Step 2: Venue Type */}
      {currentStep === 2 && <VenueTypeForm />}

      {/* Step 3: Facilities */}
      {currentStep === 3 && <FacilitiesPage />}
    </div>
  );
}

export default FormSection;