import React from 'react';
import { render } from '@testing-library/react';
import AppContent from '../ui/AppContent';
import { AppProvider } from '../ui/AppContext'; // Assuming such a provider exists
import { describe, it, test } from 'vitest';
import { MemoryRouter } from 'react-router';

describe(' App component', () => {
  it('should the content of the component', () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </MemoryRouter>
    );
  });
  // Your test assertions go here
});
