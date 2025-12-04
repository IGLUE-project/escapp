const getEmailWhitelist = function () {
    let emailWhiteList = [];

    try {
        emailWhiteList = process.env.WHITELIST_DOMAINS ? process.env.WHITELIST_DOMAINS.split(",").map((domain) => domain.trim()) : [];
    } catch (e) {}
    return emailWhiteList;
};

exports.getEmailWhitelist = getEmailWhitelist;

exports.isOpenRegistration = () => getEmailWhitelist().length === 0;
