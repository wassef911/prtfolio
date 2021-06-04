import React from "react";
import { Link } from "react-router-dom";

import { BsPersonLinesFill } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { MdWork } from "react-icons/md";

function Pages() {
  const items = [
    { text: "Introduction", logo: BsPersonLinesFill },
    { text: "About", logo: IoMdPersonAdd },
    { text: "Showcase", logo: MdWork },
  ];
  return (
    <>
      <div className="d-flex flex-column justify-content-around">
        {items.map((page, i) => {
          return (
            <Link
              key={i}
              to={
                page.text === "Introduction"
                  ? "/"
                  : page.text.replace(/\s/g, "")
              }
              className="pagelink"
            >
              <span>
                {<page.logo className="icon" />}
                {page.text}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default React.memo(Pages);
