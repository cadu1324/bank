import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import CardLogin from './index'

const mockPayloadAuth = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjYwMTU2NDY0fQ.g3GngKPL8vboMRvWvrC2PtJqpC_HhN_E63RjtkL-Ldo',
}
describe('CardLogin', () => {
  const mock = jest.fn(() => {
    jest.mock(mockPayloadAuth.accessToken)
  })

  it('should submit the auth-form', () => {
    render(
      <BrowserRouter>
        <CardLogin />
      </BrowserRouter>
    );

    console.log(mock.mockReturnThis)
    const inputEmail = screen.getByLabelText(/Email/i);
    userEvent.type(inputEmail, 'test@gmail.com');

    const inputPassword = screen.getByLabelText(/Password/i);
    userEvent.type(inputPassword, 'test');

    const button = screen.getByText(/Entrar/i);
    userEvent.click(button);

  });
});

export {}
