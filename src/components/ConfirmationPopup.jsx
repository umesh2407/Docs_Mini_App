import React from 'react';

function ConfirmationPopup({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-4">{message}</h4>
        <div className="flex justify-end space-x-4">
          <button 
            onClick={onCancel}
            className="bg-gray-300 p-2 rounded-md text-black hover:bg-gray-400"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="bg-red-600 p-2 rounded-md text-white hover:bg-red-500"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
