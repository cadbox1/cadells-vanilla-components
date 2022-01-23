import React from "react";
import { liClass } from "./styles.css";

export const LI = ({ ...props }) => <li className={liClass} {...props} />;
