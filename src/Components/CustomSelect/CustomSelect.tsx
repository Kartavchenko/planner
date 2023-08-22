import { useState } from "react";

interface CustomSelectProps {
  inputId: string;
  options: string[];
  edittValue?: string;
  onChange: (selectedOption: string) => void;
}

export default function CustomSelect({
  inputId,
  options,
  edittValue,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    edittValue
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className={`select-dropdown ${isOpen ? "open" : ""}`}>
        <input
          className="input dropdown-button"
          type="button"
          id={inputId}
          value={selectedOption ? selectedOption : edittValue}
          onClick={toggleDropdown}
        />
        {isOpen && (
          <ul className="options-list">
            {options.map((option) => (
              <li
                key={option}
                className="option"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
