const { strict: assert } = require('assert');
const FixtureBuilder = require('../fixture-builder');
const { convertToHexValue, withFixtures } = require('../helpers');

describe('Swtich ethereum chain', function () {
  const ganacheOptions = {
    accounts: [
      {
        secretKey:
          '0x7C9529A67102755B7E6102D6D950AC5D5863C98713805CEC576B945B15B71EAC',
        balance: convertToHexValue(25000000000000000000),
      },
    ],
    concurrent: { port: 8546, chainId: 1338, ganacheOptions2: {} },
  };

  it('should successfully change the network in response to wallet_switchEthereumChain', async function () {
    await withFixtures(
      {
        dapp: true,
        fixtures: new FixtureBuilder()
          .withPermissionControllerConnectedToTestDapp()
          .build(),
        ganacheOptions,
        title: this.test.title,
        failOnConsoleError: false,
      },
      async ({ driver }) => {
        await driver.navigate();
        await driver.fill('#password', 'correct horse battery staple');
        await driver.press('#password', driver.Key.ENTER);

        const windowHandles = await driver.getAllWindowHandles();
        const extension = windowHandles[0];

        await driver.openNewPage('http://127.0.0.1:8080/');

        await driver.clickElement({
          tag: 'button',
          text: 'Add Localhost 8546',
        });

        await driver.waitUntilXWindowHandles(3);

        await driver.switchToWindowWithTitle(
          'MetaMask Notification',
          windowHandles,
        );

        await driver.clickElement({
          tag: 'button',
          text: 'Approve',
        });

        await driver.findElement({
          tag: 'h3',
          text: 'Allow this site to switch the network?',
        });

        // Don't switch to network now, because we will click the 'Switch to Localhost 8546' button below
        await driver.clickElement({
          tag: 'button',
          text: 'Cancel',
        });

        await driver.waitUntilXWindowHandles(2);

        await driver.switchToWindowWithTitle('E2E Test Dapp', windowHandles);
        await driver.clickElement({
          tag: 'button',
          text: 'Switch to Localhost 8546',
        });

        await driver.waitUntilXWindowHandles(3);

        await driver.switchToWindowWithTitle(
          'MetaMask Notification',
          windowHandles,
        );

        await driver.clickElement({
          tag: 'button',
          text: 'Switch network',
        });

        await driver.waitUntilXWindowHandles(2);

        await driver.switchToWindow(extension);

        const currentNetworkName = await driver.findElement({
          tag: 'span',
          text: 'Localhost 8546',
        });

        assert.ok(
          Boolean(currentNetworkName),
          'Failed to switch to custom network',
        );
      },
    );
  });
});
