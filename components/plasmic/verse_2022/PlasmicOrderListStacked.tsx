// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2zRvKQ8amGcEx1ePi9rEYj
// Component: 1mCYak1j0G
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ArrowLight from "../../ArrowLight"; // plasmic-import: YihdW5fuU6/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_verse_2022.module.css"; // plasmic-import: 2zRvKQ8amGcEx1ePi9rEYj/projectcss
import sty from "./PlasmicOrderListStacked.module.css"; // plasmic-import: 1mCYak1j0G/css

export type PlasmicOrderListStacked__VariantMembers = {};

export type PlasmicOrderListStacked__VariantsArgs = {};
type VariantPropType = keyof PlasmicOrderListStacked__VariantsArgs;
export const PlasmicOrderListStacked__VariantProps =
  new Array<VariantPropType>();

export type PlasmicOrderListStacked__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOrderListStacked__ArgsType;
export const PlasmicOrderListStacked__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicOrderListStacked__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  _00?: p.Flex<"div">;
  label?: p.Flex<"div">;
  subline?: p.Flex<"div">;
  arrowLight?: p.Flex<typeof ArrowLight>;
};

export interface DefaultOrderListStackedProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicOrderListStacked__RenderFunc(props: {
  variants: PlasmicOrderListStacked__VariantsArgs;
  args: PlasmicOrderListStacked__ArgsType;
  overrides: PlasmicOrderListStacked__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      platform={"nextjs"}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__nf6O5)}>
          <div
            data-plasmic-name={"_00"}
            data-plasmic-override={overrides._00}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty._00
            )}
          >
            {"01"}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__wA7th)}>
            <div
              data-plasmic-name={"label"}
              data-plasmic-override={overrides.label}
              className={classNames(projectcss.all, sty.label)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Live chat with us now",
                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </div>

            <div
              data-plasmic-name={"subline"}
              data-plasmic-override={overrides.subline}
              className={classNames(projectcss.all, sty.subline)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "online now",
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          </div>
        </div>
      ) : null}

      <ArrowLight
        data-plasmic-name={"arrowLight"}
        data-plasmic-override={overrides.arrowLight}
        className={classNames("__wab_instance", sty.arrowLight)}
      />
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "_00", "label", "subline", "arrowLight"],
  _00: ["_00"],
  label: ["label"],
  subline: ["subline"],
  arrowLight: ["arrowLight"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  _00: "div";
  label: "div";
  subline: "div";
  arrowLight: typeof ArrowLight;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOrderListStacked__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOrderListStacked__VariantsArgs;
    args?: PlasmicOrderListStacked__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOrderListStacked__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOrderListStacked__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicOrderListStacked__ArgProps,
      internalVariantPropNames: PlasmicOrderListStacked__VariantProps
    });

    return PlasmicOrderListStacked__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOrderListStacked";
  } else {
    func.displayName = `PlasmicOrderListStacked.${nodeName}`;
  }
  return func;
}

export const PlasmicOrderListStacked = Object.assign(
  // Top-level PlasmicOrderListStacked renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _00: makeNodeComponent("_00"),
    label: makeNodeComponent("label"),
    subline: makeNodeComponent("subline"),
    arrowLight: makeNodeComponent("arrowLight"),

    // Metadata about props expected for PlasmicOrderListStacked
    internalVariantProps: PlasmicOrderListStacked__VariantProps,
    internalArgProps: PlasmicOrderListStacked__ArgProps
  }
);

export default PlasmicOrderListStacked;
/* prettier-ignore-end */
