const converter = require("json-2-csv");

// Formats a timestamp as ISO 8601 / RFC 3339 in UTC, without milliseconds, e.g. "2026-07-23T11:30:00Z"
const toRfc3339 = (ts) => new Date(ts).toISOString().replace(/\.\d{3}Z$/, "Z");

exports.toRfc3339 = toRfc3339;

// Recursively format every Date value as RFC 3339 so all CSV timestamps are consistent
const formatDates = (value) => {
    if (value instanceof Date) {
        return toRfc3339(value);
    }
    if (Array.isArray(value)) {
        return value.map(formatDates);
    }
    if (value && typeof value === "object") {
        return Object.keys(value).reduce((acc, key) => {
            acc[key] = formatDates(value[key]);
            return acc;
        }, {});
    }
    return value;
};

exports.createCsvFile = (res, content, title = `results-${Date.now()}`, field = ";") => {
    converter.json2csv(
        formatDates(content),
        (err, csvText) => {
            if (err) {
                throw new Error("Error");
            }
            res.setHeader("Content-Type", "text/csv; charset=utf-8");
            res.setHeader("Content-Disposition", `attachment; filename=${title}.csv`);
            res.write(`\uFEFF${csvText}`);
            res.end();
        },
        {"delimiter": {field}, "defaultValue": ""}
    );
};
