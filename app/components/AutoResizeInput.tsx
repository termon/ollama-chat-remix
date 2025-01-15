import React, { useState, useRef, useEffect } from 'react';

interface AutoResizeInputProps {
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AutoResizeInput: React.FC<AutoResizeInputProps> = ({
  value,
  placeholder = '',
  className = '',
  onChange,
}) => {
  const [inputWidth, setInputWidth] = useState<string>('auto');
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const calculatedWidth = spanRef.current.offsetWidth;
      setInputWidth(`${calculatedWidth}px`);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ width: inputWidth }}
        className={`border border-gray-100 rounded shadow-md
                    p-3 bg-transparent flex-grow outline-none text-zinc-800 dark:text-zinc-300 placeholder-zinc-400 ${className}`}
      />
      <span ref={spanRef} className="absolute invisible whitespace-pre">
        {value || placeholder || ' '}
      </span>
    </div>
  );
};

export default AutoResizeInput;


