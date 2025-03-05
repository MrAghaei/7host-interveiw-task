"use client";
import FaqItem from "@/(Components)/FaqItem/FaqItem";
import { useState } from "react";
import style from "./Faq.module.scss";
//region data
const faqItemData = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
  {
    id: 2,
    heading: "consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
  {
    id: 3,
    heading: "sed do eiusmod tempor incididunt ut labore et dolore?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
  {
    id: 4,
    heading: "ullamco laboris nisi ut aliquip ex?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
  {
    id: 5,
    heading: "ea commodo consequat?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
  {
    id: 6,
    heading: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
  {
    id: 7,
    heading: "Excepteur sint occaecat cupidatat non?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
  {
    id: 8,
    heading: "sunt in culpa qui officia deserunt mollit anim id est laborum?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isActive: false,
  },
];
//endregion
function Faq() {
  //region hooks
  const [faqItems, setFaqItems] = useState(faqItemData);
  //endregion
  //region functions
  function handleFaqClick(id: number) {
    const updatedFaqItems = faqItems.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setFaqItems(updatedFaqItems);
  }
  //endregion
  return (
    <div
      className={`container-xxl d-flex flex-column align-items-center bg-custom-light-faq p-custom-14 mt-custom-24 ${style.customBorderRadius}`}
    >
      <div className="d-flex flex-column align-items-center gap-custom gap-4">
        <h3 className="fw-bolder">FAQ</h3>
        <p className="text-custom-faq-text1 fw-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>

      <div className="d-flex flex-column gap-4 w-100">
        {faqItems.map((data) => (
          <FaqItem
            key={data.id}
            data={data}
            handleClick={() => handleFaqClick(data.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
