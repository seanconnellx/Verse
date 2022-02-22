// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DawnPrimary32PxImageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DawnPrimary32PxImageIcon(props: DawnPrimary32PxImageIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 82 82"}
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
          "M10.25 71.75v-61.5h61.5v61.5h-61.5zm53.813-20.372v-33.44H17.937v40.359L44.46 31.775l19.603 19.603zm-19.22-8.84L23.32 64.063h41.128V62.14l-.385-.385-19.218-19.218zM34.85 28.316c0 3.459-3.075 6.534-6.534 6.534-3.46 0-6.535-3.075-6.535-6.534 0-3.46 3.075-6.535 6.535-6.535 3.459 0 6.534 3.075 6.534 6.535z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DawnPrimary32PxImageIcon;
/* prettier-ignore-end */
