/**
 * Jest Setup File
 * Configure global settings for all tests
 */

// Increase timeout for all tests (60 seconds)
jest.setTimeout(60000);

// Suppress console.log during tests
global.console.log = jest.fn();

// Mock the mailer to prevent SMTP connection issues during tests
jest.mock("../helpers/mailer", () => ({
    sendEmail: jest.fn().mockResolvedValue({ messageId: "test-message-id" })
}));

// Note: Database cleanup is handled by --forceExit flag in npm test script
