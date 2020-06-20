import React, { CSSProperties } from "react";

export type CardsProps = {
  banner: string;
  slug: string;
  title: string;
}

export type DisplayProps = {
  index: number;
  projectDescription: object;
  contributionText: object;
  myToolsText: object;
}

export type ToolBarProps = {
  index: number;
  setIndex: SetIndex;
  color: CSSProperties;
  repoUrl: string;
  liveUrl: string;
}

export type ToolBarLinksProps = {
  url: string;
  color: CSSProperties;
  styles: CSSProperties;
}

export type ToolBarButtonsProps = {
  isActive: boolean | null;
  setIndex: void | null;
  styles: CSSProperties;
}

export type ProjectsMetadata = {
  title: string;
  banner: string;
  slug: string;
  url?: string;
  github?: string;
  techStack: string[];
  CSSProperties: {
    primaryColor: string;
    secondaryColor: string;
    primarySVGFilter: string;
    secondarySVGFilter: string;
    backgroundPositionX?: string;
    backgroundPositionY?: string;
  }
}

/* Type Definitions of Different Project Functions */
export type HandleClick =
  | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
  | undefined;

export type SetIndex = (index: number) => void;

export type IsActive = (
  currentIndex: number,
  newIndex: number
) => boolean | null;
