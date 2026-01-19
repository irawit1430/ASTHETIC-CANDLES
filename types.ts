import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  state: 'Live' | 'Beta' | 'Concept' | 'Archived';
  why: string;
  systemLogic: string;
  learned: string;
}

export interface GlassProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  layoutId?: string;
  as?: React.ElementType;
}