import React from "react";
import { aClass } from "./styles.css";

export const A = ({ ...props }) => <a className={aClass} {...props} />;
