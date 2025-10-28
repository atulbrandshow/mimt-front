import React from "react";

const Page = ({ data }) => {
  if (!data) return <p>No data available</p>;

  // ✅ Helper to check if a value has meaningful content
  const hasContent = (value) => {
    if (
      value === null ||
      value === undefined ||
      value === false || // exclude false
      value === "" // exclude empty string
    )
      return false;

    if (Array.isArray(value)) return value.some((item) => hasContent(item));

    if (typeof value === "object")
      return Object.keys(value).some((k) => hasContent(value[k]));

    return true;
  };

  // ✅ Recursive renderer
  const renderValue = (value) => {
    if (!hasContent(value)) return null;

    // Render HTML strings safely
    if (typeof value === "string" && /<[^>]+>/.test(value)) {
      return (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      );
    }

    // Render arrays
    if (Array.isArray(value)) {
      const filteredArray = value.filter((item) => hasContent(item));
      if (filteredArray.length === 0) return null;
      return (
        <ul className="list-disc ml-6">
          {filteredArray.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    }

    // Render objects
    if (typeof value === "object") {
      const entries = Object.entries(value).filter(([_, v]) => hasContent(v));
      if (entries.length === 0) return null;
      return (
        <div className="ml-4 border-l border-gray-300 pl-4">
          {entries.map(([k, v]) => (
            <div key={k} className="mb-2">
              <strong className="text-blue-700">{k}:</strong>
              <div className="ml-2 mt-1">{renderValue(v)}</div>
            </div>
          ))}
        </div>
      );
    }

    // Primitive values
    return <span>{value.toString()}</span>;
  };

  // ✅ Filter top-level keys
  const filteredData = Object.entries(data).filter(([_, value]) =>
    hasContent(value)
  );

  if (filteredData.length === 0)
    return <p className="text-gray-500">No meaningful data available</p>;

  return (
    <div className="p-4 bg-gray-50 min-h-screen mt-10">
      {filteredData.map(([key, value]) => (
        <div key={key} className="mb-4">
          <strong className="text-lg text-gray-700">{key}:</strong>
          <div className="ml-2 mt-1">{renderValue(value)}</div>
        </div>
      ))}
    </div>
  );
};

export default Page;
