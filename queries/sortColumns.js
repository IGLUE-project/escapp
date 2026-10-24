"use strict";

/*
 * Whitelist for the `orderBy` query parameter. These values are interpolated into a raw
 * SQL ORDER BY literal (Sequelize.literal), so they must NEVER come unvalidated from user
 * input — otherwise `orderBy` is a SQL-injection vector. Only these user columns, which
 * match the options offered by the "Order by" dropdowns, are allowed; anything else is
 * rejected (ordering is simply skipped). The special "team" value is handled by the caller
 * before reaching the literal and is intentionally not in this list.
 */
const SORTABLE_USER_COLUMNS = ["name", "surname", "username", "alias"];

exports.SORTABLE_USER_COLUMNS = SORTABLE_USER_COLUMNS;

// Return the column only when it is a known-safe user column; otherwise null.
exports.safeUserOrderColumn = (orderBy) => (SORTABLE_USER_COLUMNS.includes(orderBy) ? orderBy : null);
