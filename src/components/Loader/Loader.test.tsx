import { describe, it, expect } from 'vitest'
import { render } from '../../utils/testUtils';
import Loader from './Loader';



describe('Loader Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Loader />);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('has the correct role and aria-label', () => {
    const { getByLabelText } = render(<Loader />);
    const loaderElement = getByLabelText('Loading...');
    expect(loaderElement).toHaveAttribute('role', 'status');
  });

  it('applies the correct styles', () => {
    const { getByTestId } = render(<Loader />);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    });
  });
});




