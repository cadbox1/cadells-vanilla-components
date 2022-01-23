import React from "react";
import { preClass } from "./styles.css";

export const PRE = ({ ...props }) => <pre className={preClass} {...props} />;
