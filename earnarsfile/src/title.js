// withTitle.js
import React, { useEffect } from 'react';

// HOC definition
const withTitle = (WrappedComponent, title) => {
    // Returns a new component
    return (props) => {
        // Effect to update document title
        useEffect(() => {
            document.title = title;
        }, [title]); // Update title when 'title' changes

        // Render the wrapped component with its props
        return <WrappedComponent {...props} />;
    };
};

export default withTitle;
