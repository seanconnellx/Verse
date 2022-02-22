// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuIcon(props: MenuIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 25"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.7 1a1 1 0 00-1-1H1.003C.128 0-.326 1.043.271 1.682l1.633 1.75a1 1 0 00.731.318h28.066a1 1 0 001-1V1zm0 11a1 1 0 00-1-1H13.003c-.874 0-1.328 1.043-.731 1.682l1.633 1.75a1 1 0 00.731.318h16.066a1 1 0 001-1V12zm0 9.5a1 1 0 00-1-1H9.003c-.874 0-1.328 1.043-.731 1.682l1.633 1.75a1 1 0 00.731.318h20.066a1 1 0 001-1V21.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MenuIcon;
/* prettier-ignore-end */
