import { ReactNode, useContext, useEffect, useRef } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Container } from "./style";

interface IModalProductProps {
  children: ReactNode;
}

export const ModalProduct = ({ children }: IModalProductProps) => {
  const { setIsModalProduct } = useContext(ProductContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement;
      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsModalProduct(false);
      }
    };

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  });

  return (
    <Container>
      <div className="modal-product-box" ref={modalRef}>
        {children}
      </div>
    </Container>
  );
};
