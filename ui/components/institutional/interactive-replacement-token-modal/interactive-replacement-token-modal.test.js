import React from 'react';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithProvider } from '../../../../test/lib/render-helpers';
import testData from '../../../../.storybook/test-data';
import InteractiveReplacementTokenModal from '.';

describe('Interactive Replacement Token Modal', function () {
  const mockStore = {
    ...testData,
    metamask: {
      ...testData.metamask,
      mmiConfiguration: {
        portfolio: {
          enabled: true,
          url: 'https://dev.metamask-institutional.io/',
        },
        features: {
          websocketApi: true,
        },
        custodians: [
          {
            refreshTokenUrl:
              'https://saturn-custody.dev.metamask-institutional.io/oauth/token',
            name: 'saturn-dev',
            displayName: 'Saturn Custody',
            enabled: true,
            mmiApiUrl: 'https://api.dev.metamask-institutional.io/v1',
            websocketApiUrl:
              'wss://websocket.dev.metamask-institutional.io/v1/ws',
            apiBaseUrl:
              'https://saturn-custody.dev.metamask-institutional.io/eth',
            iconUrl:
              'https://saturn-custody-ui.dev.metamask-institutional.io/saturn.svg',
            isNoteToTraderSupported: true,
          },
        ],
      },
      custodyAccountDetails: {
        '0xAddress': {
          address: '0xAddress',
          details: 'details',
          custodyType: 'testCustody - Saturn',
          custodianName: 'saturn-dev',
        },
      },
      provider: {
        type: 'test',
      },
      selectedAddress: '0xAddress',
      isUnlocked: true,
      interactiveReplacementToken: {
        oldRefreshToken: 'abc',
        url: 'https://saturn-custody-ui.dev.metamask-institutional.io',
      },
      preferences: {
        useNativeCurrencyAsPrimaryCurrency: true,
      },
    },
  };

  const store = configureMockStore()(mockStore);

  it('should render the interactive-replacement-token-modal', () => {
    const { getByText, getByTestId } = renderWithProvider(
      <InteractiveReplacementTokenModal />,
      store,
    );

    expect(getByTestId('interactive-replacement-token-modal')).toBeVisible();
    expect(getByText('Your custodian session has expired')).toBeInTheDocument();
  });

  it('opens new tab on Open Codefi Compliance click', async () => {
    global.platform = { openTab: sinon.spy() };

    const { container } = renderWithProvider(
      <InteractiveReplacementTokenModal />,
      store,
    );

    const button = container.getElementsByClassName('btn-primary')[0];

    fireEvent.click(button);

    await waitFor(() => {
      expect(global.platform.openTab.calledOnce).toStrictEqual(true);
    });
  });
});
