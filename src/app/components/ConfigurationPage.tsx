import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AssistantConfiguration {
  id: string;
  ownerId: string;
  assistantName: string;
  systemPrompt: string;
  topicRestrictions: string;
  assistantVoice: string;
  lastModified: string;
}

interface DeviceMessage {
  id: string;
  messageOrigin: 'user' | 'assistant' | 'system';
  createdDate: string;
  content: string;
  configurationId: string;
}

export function ConfigurationPage() {
  const navigate = useNavigate();
  const [showAddConfigModal, setShowAddConfigModal] = useState(false);

  const [configurations, setConfigurations] = useState<AssistantConfiguration[]>([
    {
      id: 'config-1',
      ownerId: 'user-1',
      assistantName: 'Jarvis',
      systemPrompt: 'You are a helpful assistant. Be concise and friendly.',
      topicRestrictions: 'Do not discuss politics or religion.',
      assistantVoice: 'Ava (Female)',
      lastModified: '2026-04-29 10:30',
    },
    {
      id: 'config-2',
      ownerId: 'user-1',
      assistantName: 'Friday',
      systemPrompt: 'You are a professional business assistant.',
      topicRestrictions: 'Keep conversations professional.',
      assistantVoice: 'James (Male)',
      lastModified: '2026-04-28 15:45',
    },
    {
      id: 'config-3',
      ownerId: 'user-2',
      assistantName: 'Helper',
      systemPrompt: 'You help with daily tasks and reminders.',
      topicRestrictions: '',
      assistantVoice: 'Emma (Female)',
      lastModified: '2026-04-27 09:15',
    },
  ]);

  const [messages] = useState<DeviceMessage[]>([
    {
      id: 'msg-1',
      messageOrigin: 'user',
      createdDate: '2026-04-29 10:45',
      content: "What's the weather like today?",
      configurationId: 'config-1',
    },
    {
      id: 'msg-2',
      messageOrigin: 'assistant',
      createdDate: '2026-04-29 10:45',
      content: "It's sunny and 25°C in Prague.",
      configurationId: 'config-1',
    },
    {
      id: 'msg-3',
      messageOrigin: 'user',
      createdDate: '2026-04-29 09:32',
      content: 'What time is it?',
      configurationId: 'config-1',
    },
    {
      id: 'msg-4',
      messageOrigin: 'assistant',
      createdDate: '2026-04-29 09:32',
      content: "It's 9:32 AM.",
      configurationId: 'config-1',
    },
    {
      id: 'msg-5',
      messageOrigin: 'user',
      createdDate: '2026-04-28 18:20',
      content: 'Schedule a meeting for tomorrow at 2 PM',
      configurationId: 'config-2',
    },
    {
      id: 'msg-6',
      messageOrigin: 'assistant',
      createdDate: '2026-04-28 18:20',
      content: 'Meeting scheduled for April 29 at 2:00 PM.',
      configurationId: 'config-2',
    },
    {
      id: 'msg-7',
      messageOrigin: 'user',
      createdDate: '2026-04-27 11:05',
      content: 'Set a reminder for 6 AM',
      configurationId: 'config-3',
    },
    {
      id: 'msg-8',
      messageOrigin: 'assistant',
      createdDate: '2026-04-27 11:05',
      content: 'Reminder set for 6:00 AM.',
      configurationId: 'config-3',
    },
  ]);

  const [selectedConfig, setSelectedConfig] = useState<AssistantConfiguration | null>(configurations[0]);
  const [editedConfig, setEditedConfig] = useState<AssistantConfiguration | null>(configurations[0]);

  const handleSelectConfig = (config: AssistantConfiguration) => {
    setSelectedConfig(config);
    setEditedConfig({ ...config });
  };

  const handleSaveConfig = () => {
    if (editedConfig) {
      setConfigurations(configurations.map(c =>
        c.id === editedConfig.id ? { ...editedConfig, lastModified: new Date().toLocaleString('en-CA', { hour12: false }).slice(0, 16).replace('T', ' ') } : c
      ));
      setSelectedConfig(editedConfig);
      alert('Configuration saved successfully!');
    }
  };

  const handleDeleteConfig = (configId: string) => {
    if (confirm('Are you sure you want to delete this configuration?')) {
      setConfigurations(configurations.filter(c => c.id !== configId));
      if (selectedConfig?.id === configId) {
        setSelectedConfig(null);
        setEditedConfig(null);
      }
    }
  };

  const getConfigMessages = (configId: string) => {
    return messages.filter(m => m.configurationId === configId).sort((a, b) =>
      new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
    );
  };

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #e9e4f0 0%, #d3cce3 100%)' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 bg-white position-fixed vh-100 border-end">
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
                  onClick={(e) => { e.preventDefault(); navigate('/configurations'); }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="me-2">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Configurations
                </a>
              </nav>
            </div>

            <div className="position-absolute bottom-0 start-0 p-4 w-100 border-top">
              <button className="btn btn-outline-secondary btn-sm ">
                Log out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ marginLeft: "300px"}} className="col-md-9 col-lg-10">
            <div className="p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2>Configurations</h2>
                <button
                  className="btn d-flex align-items-center justify-content-between"
                  style={{ backgroundColor: '#7c3aed', color: 'white' }}
                  onClick={() => setShowAddConfigModal(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="me-2">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Add Configuration
                </button>
              </div>

              <div className="row">
                {/* Configuration List */}
                <div className="col-lg-4">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                      <div className="list-group list-group-flush">
                        {configurations.map((config) => (
                          <div
                            key={config.id}
                            className={`list-group-item list-group-item-action ${selectedConfig?.id === config.id ? 'active' : ''}`}
                            style={{
                              cursor: 'pointer',
                              backgroundColor: selectedConfig?.id === config.id ? '#7c3aed' : 'white',
                              color: selectedConfig?.id === config.id ? 'white' : 'black',
                            }}
                            onClick={() => handleSelectConfig(config)}
                          >
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center flex-grow-1">
                                <div
                                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                  style={{
                                    width: '40px',
                                    height: '40px',
                                    background: selectedConfig?.id === config.id
                                      ? 'rgba(255, 255, 255, 0.2)'
                                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                  }}
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <circle cx="9" cy="12" r="1" />
                                    <circle cx="15" cy="12" r="1" />
                                  </svg>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-1">{config.assistantName}</h6>
                                  <small className={selectedConfig?.id === config.id ? 'text-white-50' : 'text-muted'}>
                                    {config.assistantVoice}
                                  </small>
                                </div>
                              </div>
                              <button
                                className="btn btn-sm btn-link"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteConfig(config.id);
                                }}
                                style={{ color: selectedConfig?.id === config.id ? 'white' : '#dc3545' }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" />
                                </svg>
                              </button>
                            </div>
                            <div className="mt-2">
                              <small className={selectedConfig?.id === config.id ? 'text-white-50' : 'text-muted'}>
                                Modified: {config.lastModified}
                              </small>
                            </div>
                          </div>
                        ))}

                        {configurations.length === 0 && (
                          <div className="list-group-item text-center py-5">
                            <p className="text-muted mb-0">No configurations found</p>
                            <small className="text-muted">Click "Add Configuration" to create one</small>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration Details & Chat History */}
                <div className="col-lg-8">
                  {selectedConfig && editedConfig ? (
                    <div>
                      {/* Configuration Settings */}
                      <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body p-4">
                          <h4 className="mb-4">Configuration Settings</h4>

                          <div className="mb-3">
                            <label className="form-label">Assistant Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={editedConfig.assistantName}
                              onChange={(e) => setEditedConfig({ ...editedConfig, assistantName: e.target.value })}
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Voice</label>
                            <select
                              className="form-select"
                              value={editedConfig.assistantVoice}
                              onChange={(e) => setEditedConfig({ ...editedConfig, assistantVoice: e.target.value })}
                            >
                              <option>Ava (Female)</option>
                              <option>James (Male)</option>
                              <option>Emma (Female)</option>
                              <option>Oliver (Male)</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="form-label">System Prompt</label>
                            <textarea
                              className="form-control"
                              rows={3}
                              value={editedConfig.systemPrompt}
                              onChange={(e) => setEditedConfig({ ...editedConfig, systemPrompt: e.target.value })}
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Topic Restrictions</label>
                            <textarea
                              className="form-control"
                              rows={2}
                              value={editedConfig.topicRestrictions}
                              onChange={(e) => setEditedConfig({ ...editedConfig, topicRestrictions: e.target.value })}
                              placeholder="e.g., Do not discuss politics or religion"
                            />
                          </div>

                          <button
                            className="btn"
                            style={{ backgroundColor: '#7c3aed', color: 'white' }}
                            onClick={handleSaveConfig}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>

                      {/* Chat History */}
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between mb-4">
                            <h4 className="mb-0">Chat History</h4>
                          </div>

                          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {getConfigMessages(selectedConfig.id).map((message) => (
                              <div key={message.id} className="mb-3">
                                <div className={`d-flex ${message.messageOrigin === 'user' ? 'justify-content-end' : ''}`}>
                                  {message.messageOrigin === 'assistant' && (
                                    <div
                                      className="rounded-circle d-flex align-items-center justify-content-center me-2 flex-shrink-0"
                                      style={{
                                        width: '36px',
                                        height: '36px',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                      }}
                                    >
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <circle cx="9" cy="12" r="1" />
                                        <circle cx="15" cy="12" r="1" />
                                      </svg>
                                    </div>
                                  )}
                                  <div>
                                    <div
                                      className="p-3 rounded"
                                      style={{
                                        backgroundColor: message.messageOrigin === 'user' ? '#7c3aed' : '#f8f9fa',
                                        color: message.messageOrigin === 'user' ? 'white' : 'black',
                                        maxWidth: '500px',
                                      }}
                                    >
                                      {message.content}
                                    </div>
                                    <small className="text-muted d-block mt-1">
                                      {message.createdDate}
                                    </small>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {getConfigMessages(selectedConfig.id).length === 0 && (
                              <div className="text-center py-5">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mb-3">
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#ccc" strokeWidth="2" />
                                </svg>
                                <p className="text-muted mb-0">No messages yet</p>
                                <small className="text-muted">Start a conversation with this configuration</small>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mb-3">
                          <circle cx="12" cy="12" r="3" stroke="#ccc" strokeWidth="2" />
                          <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="#ccc" strokeWidth="2" />
                        </svg>
                        <h5 className="text-muted">Select a configuration</h5>
                        <p className="text-muted">Choose a configuration to view details and chat history</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Configuration Modal */}
      {showAddConfigModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Configuration</h5>
                <button className="btn-close" onClick={() => setShowAddConfigModal(false)} />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Assistant Name</label>
                  <input type="text" className="form-control" placeholder="Enter assistant name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Voice</label>
                  <select className="form-select">
                    <option>Ava (Female)</option>
                    <option>James (Male)</option>
                    <option>Emma (Female)</option>
                    <option>Oliver (Male)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">System Prompt</label>
                  <textarea className="form-control" rows={3} placeholder="Enter system prompt" />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowAddConfigModal(false)}>
                  Cancel
                </button>
                <button className="btn" style={{ backgroundColor: '#7c3aed', color: 'white' }}>
                  Add Configuration
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
