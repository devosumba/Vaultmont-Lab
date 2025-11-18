import React from 'react';
import ConsistencyPage from './consistency-over-intensity/page';

// Compatibility wrapper: ensure this path exports a React component.
// This prevents Next.js from complaining when both a file and a folder exist.
export default function ConsistencyOverIntensityEntry() {
	return <ConsistencyPage />;
}
