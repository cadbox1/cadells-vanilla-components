import React from "react";
import { codeClass } from "./styles.css";

export const CODE = ({ ...props }) => <code className={codeClass} {...props} />;
