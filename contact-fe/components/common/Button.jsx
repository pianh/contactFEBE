import React from 'react';

export default function Button({ title, className, type }) {
    return (
        <div>
            <button type={type} className={className}>
                {title}
            </button>
        </div>
    );
}
