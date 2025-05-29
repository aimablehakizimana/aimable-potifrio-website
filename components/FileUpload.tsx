
import React, { useState, useRef } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File | null, base64: string | null) => void;
  currentImageUrl?: string | null;
  label?: string;
  accept?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileSelect, 
  currentImageUrl,
  label = "Upload Image",
  accept = "image/*" 
}) => {
  const [preview, setPreview] = useState<string | null>(currentImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String);
        onFileSelect(file, base64String);
      };
      reader.readAsDataURL(file);
    } else {
      // If no file is selected (e.g., user cancels), keep existing or clear
      // setPreview(currentImageUrl || null); // Or null if you want to clear
      // onFileSelect(null, currentImageUrl || null); // Or null, null
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {preview && (
        <img 
          src={preview} 
          alt="Preview" 
          className="w-32 h-32 object-cover rounded-full border-2 border-cyan-500 shadow-lg" 
        />
      )}
      {!preview && (
         <div className="w-32 h-32 bg-slate-700 rounded-full border-2 border-slate-600 flex items-center justify-center text-slate-400 text-sm">
            No Image
         </div>
      )}
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={triggerFileInput}
        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800"
      >
        {label}
      </button>
    </div>
  );
};

export default FileUpload;
