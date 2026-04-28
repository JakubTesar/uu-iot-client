import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #e9e4f0 0%, #d3cce3 100%)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="me-2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7c3aed" />
                  <path d="M2 17L12 22L22 17" stroke="#7c3aed" strokeWidth="2" />
                </svg>
                <h5 className="mb-0" style={{ color: '#7c3aed' }}>AI Assistant</h5>
              </div>

              <h1 className="display-4 mb-3">
                The future is <span style={{ color: '#7c3aed' }}>intelligent.</span>
              </h1>

              <div className="mb-5">
                <div className="d-flex align-items-start text-start mb-3 p-3 rounded" style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="me-3 flex-shrink-0">
                    <path d="M9 18L15 12L9 6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="mb-0">
                      Artificial intelligence is not about replacing humans, it's about amplifying human potential.
                    </p>
                    <small className="text-muted">– Fei-Fei Li</small>
                  </div>
                </div>

                <p className="text-muted">
                  Your personal AI assistant that understands you and will help you
                  achieve more with intelligent conversation.
                </p>
              </div>

              <div className="d-flex justify-content-center align-items-center mb-5" style={{ height: '250px' }}>
                <div className="position-relative">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                      <circle cx="8" cy="12" r="2" />
                      <circle cx="16" cy="12" r="2" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                  <div className="position-absolute rounded-circle" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', top: '-20px', right: '-30px', boxShadow: '0 10px 20px rgba(124, 58, 237, 0.2)' }} />
                </div>
              </div>

              <button
                className="btn btn-lg px-5 py-3 rounded-pill"
                style={{ backgroundColor: '#7c3aed', color: 'white', border: 'none' }}
                onClick={() => navigate('/login')}
              >
                Ready to get started? →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
