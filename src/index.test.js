// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './index';

beforeEach(() => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
  });
  
  // Limpia después de cada prueba
  afterEach(() => {
    document.body.removeChild(document.getElementById('root'));
  });
  
  test('renders without crashing', () => {
    render(<App />);
    expect(document.querySelector("#root")).toBeInTheDocument();
  });
