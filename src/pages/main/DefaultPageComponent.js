import React from 'react'

function DefaultPageComponent({ data }) {
  if (!data) return <p>No data available</p>;

  // Recursive function to render objects and arrays
  const renderValue = (value) => {
    if (value === null || value === undefined) return <span className="text-gray-500">null</span>;

    if (typeof value === 'string' && /<[^>]+>/.test(value)) {
      return <div dangerouslySetInnerHTML={{ __html: value }} />;
    }

    if (Array.isArray(value)) {
      return (
        <ul className="list-disc ml-6">
          {value.map((item, index) => (
            <li key={index}>
              {typeof item === 'object' ? renderValue(item) : item}
            </li>
          ))}
        </ul>
      );
    }

    if (typeof value === 'object') {
      return (
        <div className="ml-4 border-l border-gray-300 pl-4">
          {Object.entries(value).map(([k, v]) => (
            <div key={k} className="mb-1">
              <strong>{k}:</strong> {typeof v === 'object' ? renderValue(v) : v?.toString() || <span className="text-gray-500">null</span>}
            </div>
          ))}
        </div>
      );
    }

    return value.toString();
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen mt-32">
      <h1 className="text-2xl font-bold mb-6">Default Page Component</h1>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="mb-4">
          <strong className="text-lg">{key}:</strong>
          <div className="ml-2 mt-1">{renderValue(value)}</div>
        </div>
      ))}
    </div>
  );
}

export default DefaultPageComponent;
