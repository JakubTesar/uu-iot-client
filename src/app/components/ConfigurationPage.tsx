import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ConfigurationPage() {
  const navigate = useNavigate();
  const [assistantName, setAssistantName] = useState('Jarvis');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Configuration saved successfully!');
    }, 1500);
  };

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #e9e4f0 0%, #d3cce3 100%)' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 bg-white vh-100 border-end">
            <div className="p-4">
              <div className="d-flex align-items-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7c3aed" />
                  <path d="M2 17L12 22L22 17" stroke="#7c3aed" strokeWidth="2" />
                </svg>
                <h5 className="mb-0 ms-2" style={{ color: '#7c3aed' }}>AI Assistant</h5>
              </div>

              <nav className="nav flex-column">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center mb-2 text-muted"
                  onClick={(e) => { e.preventDefault(); navigate('/devices'); }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="me-2">
                    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Devices
                </a>
                <a
                  href="#"
                  className="nav-link d-flex align-items-center mb-2 active"
                  style={{ color: '#7c3aed' }}
                  onClick={(e) => { e.preventDefault(); navigate('/configuration'); }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="me-2">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Configuration
                </a>
                <a
                  href="#"
                  className="nav-link d-flex align-items-center mb-2 text-muted"
                  onClick={(e) => { e.preventDefault(); navigate('/history'); }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="me-2">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  History
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10">
            <div className="p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2>Configuration</h2>
                <button className="btn btn-outline-secondary btn-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="me-2">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>

              <div className="row">
                <div className="col-lg-8">
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="mb-4">
                        <label className="form-label">Assistant</label>
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{
                              width: '48px',
                              height: '48px',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                              <circle cx="9" cy="12" r="1" />
                              <circle cx="15" cy="12" r="1" />
                            </svg>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="mb-0">Assistant name</h5>
                            <input
                              type="text"
                              className="form-control mt-2"
                              value={assistantName}
                              onChange={(e) => setAssistantName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label">System prompt</label>
                        <textarea
                          className="form-control"
                          rows={6}
                          placeholder="Do not discuss sensitive, religious or political content.&#10;Do not discuss politics, religion or other sensitive content unless the topic was initiated by the user.&#10;Do not assist the user with any harmful content."
                          value={systemPrompt}
                          onChange={(e) => setSystemPrompt(e.target.value)}
                        />
                        <small className="text-muted">
                          Control what the assistant should and shouldn't do.
                        </small>
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Topic restrictions (optional)</label>
                        <div className="alert alert-warning d-flex align-items-start">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="me-2 flex-shrink-0">
                            <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#ffc107" />
                          </svg>
                          <div>
                            <p className="mb-0 small">
                              <strong>Switch 2 unreachable (offline)</strong>
                            </p>
                            <p className="mb-0 small text-muted">
                              Do not provide medical advice, diagnose or treat any medical condition.
                            </p>
                            <p className="mb-0 small text-muted">
                              Do not provide medical advice or humble the user.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Voice</label>
                        <select className="form-select">
                          <option>Select voice</option>
                          <option>Male Voice 1</option>
                          <option>Female Voice 1</option>
                          <option>Neutral Voice</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <h5 className="mb-3">Device status</h5>
                      <div className="text-muted small mb-3">(1/3) Used</div>

                      {isLoading ? (
                        <div className="text-center py-5">
                          <div className="spinner-border" style={{ color: '#7c3aed' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-3 text-muted">Saving configuration...</p>
                        </div>
                      ) : (
                        <div className="text-center py-5">
                          <div className="spinner-border text-secondary" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-3 text-muted">Checking device connection...</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-secondary">
                      Log out
                    </button>
                    <button
                      className="btn px-5"
                      style={{ backgroundColor: '#7c3aed', color: 'white' }}
                      onClick={handleSave}
                      disabled={isLoading}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
