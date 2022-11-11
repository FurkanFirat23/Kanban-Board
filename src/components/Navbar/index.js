import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import "./styles.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <Bookmark />
            <h1>Kanban Board</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
