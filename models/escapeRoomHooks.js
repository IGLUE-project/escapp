// Definition of hooks for the escapeRoom model:

const {isOpenRegistration} = require("../helpers/globalInstanceConfig");

module.exports = ({ escapeRoom, turno }) => {
    const openRegistration = isOpenRegistration();

    escapeRoom.addHook("beforeSave", async (er, options) => {
        let [publicShift] = await er.getTurnos({"where": {"place": "_PUBLIC"}});

        er.verified = er.verified_at !== null;
        er.isLastVersionVerified = er.updated_at && er.verified_at && er.updated_at <= er.verified_at;

        if (er.scope === "public") {
            er.allowGuests = true; // Force allow guests for public escape rooms
        }

        if (er.scope === "public" && er.status === "completed") {
            if (typeof publicShift === "undefined") {
                // Create public shift
                publicShift = await turno.create({"place": "_PUBLIC", "status": "active", "escapeRoomId": er.id }, { "transaction": options.transaction });
            }
            if (publicShift.status !== "active") {
                publicShift.status = "active";
                await publicShift.save({ "transaction": options.transaction });
            }
        } else if (typeof publicShift !== "undefined" && publicShift.status === "active") {
            publicShift.status = "pending";
            await publicShift.save({ "transaction": options.transaction });
        }

        er.isAccessibleToAllUsers = er.status === "completed" && er.scope === "public";
        er.isPubliclyAccessible = er.isAccessibleToAllUsers && (openRegistration || er.allowGuests);
        er.isNetworkAccessible = er.isPubliclyAccessible && er.verified;
    });
};
