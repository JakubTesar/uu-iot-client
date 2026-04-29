import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [deviceStatus, setDeviceStatus] = useState('Offline');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/devices');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #e9e4f0 0%, #d3cce3 100%)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7c3aed" />
                      <path d="M2 17L12 22L22 17" stroke="#7c3aed" strokeWidth="2" />
                    </svg>
                    <h5 className="mb-0 ms-2" style={{ color: '#7c3aed' }}>AI Assistant</h5>
                  </div>

                  <h2 className="h4 mb-2">Welcome back</h2>
                  <p className="text-muted small">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small text-muted">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small text-muted">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label small" htmlFor="remember">
                      Remember me
                    </label>
                    <a href="#" className="text-decoration-none small float-end" style={{ color: '#7c3aed' }}>
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 py-2 mb-3"
                    style={{ backgroundColor: '#7c3aed', color: 'white', border: 'none' }}
                  >
                    Sign In
                  </button>

                  <div className="text-center mb-3">
                    <small className="text-muted">or</small>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" className="me-2">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Sign in with Google
                  </button>
                </form>

                <div className="text-center mt-4">
                  <small className="text-muted">
                    Don't have an account?{' '}
                    <a href="#" className="text-decoration-none" style={{ color: '#7c3aed' }}>
                      Create your account now
                    </a>
                  </small>
                </div>

                {/*<div className="mt-4 p-3 rounded" style={{ backgroundColor: '#f8f9fa' }}>*/}
                {/*  <div className="d-flex align-items-center justify-content-between mb-2">*/}
                {/*    <small className="text-muted">Device status</small>*/}
                {/*    <small className="text-muted">(1/3) Used</small>*/}
                {/*  </div>*/}
                {/*  <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: '60px' }}>*/}
                {/*    <div className="spinner-border text-secondary" role="status" style={{ width: '3rem', height: '3rem' }}>*/}
                {/*      <span className="visually-hidden">Loading...</span>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="text-center">*/}
                {/*    <small className="text-muted">{deviceStatus}</small>*/}
                {/*    <br />*/}
                {/*    <small className="text-muted">Trying to reconnect...</small>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
