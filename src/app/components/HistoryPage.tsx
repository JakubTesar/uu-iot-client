import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HistoryItem {
  id: string;
  user: string;
  message: string;
  time: string;
  date: string;
}

export function HistoryPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('All time');

  const historyItems: HistoryItem[] = [
    {
      id: '1',
      user: 'You',
      message: "What's the weather like today?",
      time: 'Today, 10:45',
      date: 'Today',
    },
    {
      id: '2',
      user: 'Assistant',
      message: "It's sunny and 25°C in Prague.",
      time: 'Today, 10:45',
      date: 'Today',
    },
    {
      id: '3',
      user: 'You',
      message: 'What time is it?',
      time: 'Today, 09:32',
      date: 'Today',
    },
    {
      id: '4',
      user: 'Assistant',
      message: "It's 9:32 AM.",
      time: 'Today, 09:32',
      date: 'Today',
    },
    {
      id: '5',
      user: 'You',
      message: 'Tell me a fun fact',
      time: 'Yesterday, 18:20',
      date: 'Yesterday',
    },
    {
      id: '6',
      user: 'Assistant',
      message: 'Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs that was still edible!',
      time: 'Yesterday, 18:20',
      date: 'Yesterday',
    },
    {
      id: '7',
      user: 'You',
      message: 'Set a reminder for 6 AM',
      time: 'Yesterday, 17:15',
      date: 'Yesterday',
    },
    {
      id: '8',
      user: 'Assistant',
      message: 'Reminder set for today at 6:00 AM.',
      time: 'Yesterday, 17:15',
      date: 'Yesterday',
    },
    {
      id: '9',
      user: 'You',
      message: "What's 15 + 27?",
      time: 'Yesterday, 11:05',
      date: 'Yesterday',
    },
    {
      id: '10',
      user: 'Assistant',
      message: 'Hi, 27 equals 42!',
      time: 'Yesterday, 11:05',
      date: 'Yesterday',
    },
  ];

  const filteredHistory = historyItems.filter((item) =>
    item.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  className="nav-link d-flex align-items-center mb-2 text-muted"
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
                  className="nav-link d-flex align-items-center mb-2 active"
                  style={{ color: '#7c3aed' }}
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
                <h2>History</h2>
                <button className="btn btn-outline-secondary btn-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Clear history
                </button>
              </div>

              <div className="row mb-4">
                <div className="col-lg-8">
                  <div className="card border-0 shadow-sm mb-3">
                    <div className="card-body p-3">
                      <div className="row g-2">
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text bg-white border-end-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0"
                              placeholder="Search conversation..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <select
                            className="form-select"
                            value={timeFilter}
                            onChange={(e) => setTimeFilter(e.target.value)}
                          >
                            <option>All time</option>
                            <option>Today</option>
                            <option>Yesterday</option>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                      <div className="list-group list-group-flush">
                        {filteredHistory.map((item, index) => (
                          <div
                            key={item.id}
                            className="list-group-item list-group-item-action border-0"
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="d-flex align-items-start">
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  background: item.user === 'Assistant'
                                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                    : '#6c757d',
                                }}
                              >
                                {item.user === 'Assistant' ? (
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <circle cx="9" cy="12" r="1" />
                                    <circle cx="15" cy="12" r="1" />
                                  </svg>
                                ) : (
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                                  </svg>
                                )}
                              </div>

                              <div className="flex-grow-1">
                                <div className="d-flex justify-content-between align-items-start mb-1">
                                  <h6 className="mb-0">{item.user}</h6>
                                  <small className="text-muted">{item.time}</small>
                                </div>
                                <p className="mb-0 text-muted">{item.message}</p>
                              </div>

                              <button className="btn btn-sm btn-link text-muted ms-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {filteredHistory.length === 0 && (
                    <div className="text-center py-5">
                      <p className="text-muted">No conversation history found</p>
                    </div>
                  )}
                </div>

                <div className="col-lg-4">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h5 className="mb-3">Device status</h5>
                      <div className="text-muted small mb-3">(1/3) Used</div>

                      <div className="text-center py-5">
                        <div className="spinner-border text-secondary" role="status" style={{ width: '3rem', height: '3rem' }}>
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3 text-muted">Checking device connection...</p>
                      </div>
                    </div>
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
