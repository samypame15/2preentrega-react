import { FaCartArrowDown } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const CartWidgetReactIcons = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <FaCartArrowDown style={{ fontSize: "1.6rem", color: "black" }} />
      <Badge
        bg="danger"
        style={{
          fontSize: "0.8rem",
          padding: "0.2rem 0.4rem",
          borderRadius: "0.75rem",
          position: "relative",
          top: "-0.3rem",
        }}
      >
        10
      </Badge>
    </div>
  );
};

export default CartWidgetReactIcons;
