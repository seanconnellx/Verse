// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NhsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NhsIcon(props: NhsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 115 41"}
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
          "M37.342 39.72L45.8.669H35.738l-5.602 27.083h-.115L21.843.67H8.525L0 39.719h10.068l5.547-27.023h.116l8.341 27.024h13.27zm38.125 0L83.76.669H73.074L69.926 15.61H57.295L60.435.67H49.75l-8.294 39.05h10.687l3.542-16.727H68.33l-3.55 16.728h10.688zM111.89 9.507l2.577-7.775C111.776.508 107.153 0 102.231 0c-8.75 0-17.784 3.022-17.784 13.097 0 6.277 5.034 8.213 9.364 9.879 3.265 1.255 6.129 2.357 6.129 5.05 0 4.032-5.2 4.647-8.518 4.647-3.48 0-7.723-.896-9.83-2.24l-2.516 7.943c3.481 1.063 8.233 2.019 12.346 2.019 9.259 0 19.497-2.801 19.497-13.592 0-7.047-5.468-9.177-9.908-10.907-3.033-1.182-5.585-2.177-5.585-4.423 0-3.143 3.433-3.751 7.662-3.751 3.943 0 6.743.842 8.803 1.785z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NhsIcon;
/* prettier-ignore-end */
