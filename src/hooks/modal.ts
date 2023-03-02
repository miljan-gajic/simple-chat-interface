import { useState } from "react";

export default function useModal(defaultValue?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultValue || false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}
