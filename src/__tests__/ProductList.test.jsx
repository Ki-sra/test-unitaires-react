import { render, screen, waitFor } from '@testing-library/react';
import ProductList from '../components/ProductList';
import * as api from '../services/api';

// Mock du service API
jest.mock('../services/api');

describe('ProductList Component', () => {
  test('affiche le message de chargement', () => {
    api.fetchProducts.mockResolvedValueOnce([]);
    render(<ProductList />);
    expect(screen.getByText(/chargement/i)).toBeInTheDocument();
  });

  test('affiche la liste des produits après chargement', async () => {
    api.fetchProducts.mockResolvedValueOnce([
      { id: 1, title: 'Produit A' },
      { id: 2, title: 'Produit B' }
    ]);

    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText('Produit A')).toBeInTheDocument();
      expect(screen.getByText('Produit B')).toBeInTheDocument();
    });
  });

  test('affiche un message d’erreur en cas d’échec API', async () => {
    api.fetchProducts.mockRejectedValueOnce(new Error('API indisponible'));
    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText(/API indisponible/i)).toBeInTheDocument();
    });
  });
});