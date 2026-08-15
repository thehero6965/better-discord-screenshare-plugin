import React from 'react';

// Discord's internal analytics "location" wrapper. Confirmed live to render
// across many unrelated UI surfaces (call view, voice control tray, avatar
// popouts, etc), carrying whichever of these identifies "where" it is.
export interface LocationProps {
  page?: string;
  section?: string;
  object?: string;
  children?: React.ReactNode;
  root?: boolean;
}

export interface Location extends React.ComponentClass<LocationProps> {}
