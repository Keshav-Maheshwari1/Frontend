
import { STATES } from "@/constants/page";

const StateSelector = ({ label, selectedStates, onChange }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 border rounded-lg">
        {STATES.map((state) => (
          <label key={state} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedStates.includes(state)}
              onChange={() => {
                const newSelected = selectedStates.includes(state)
                  ? selectedStates.filter((s) => s !== state)
                  : [...selectedStates, state];
                onChange(newSelected);
              }}
            />
            <span>{state}</span>
          </label>
        ))}
      </div>
    </div>
  );

  export default StateSelector;