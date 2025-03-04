import style from "@/(Components)/Hero/Hero.module.scss";
import { ChevronRight } from "lucide-react";

function CtaButton() {
  return (
    <button
      className={`d-flex gap-custom-13 btn btn-custom-secondary text-white ${style.btnSizingSecondary}`}
    >
      Get started
      <ChevronRight />
    </button>
  );
}

export default CtaButton;
