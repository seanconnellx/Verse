// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24PxMenuIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24PxMenuIcon(props: Icon24PxMenuIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M35 6.667H5v3.75h30v-3.75zm0 11.25H5v3.75h30v-3.75zM5 29.167h30v3.75H5v-3.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon24PxMenuIcon;
/* prettier-ignore-end */
