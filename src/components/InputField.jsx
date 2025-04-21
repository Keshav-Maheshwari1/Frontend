const InputField = ({ label, type, placeholder, inputRef, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      required={required}
      className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
    />
  </div>
);
export default InputField;