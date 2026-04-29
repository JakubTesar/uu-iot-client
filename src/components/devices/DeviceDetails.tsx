import type { AssistantConfiguration, DeviceWithDetails } from '../../types/api';

interface DeviceDetailsProps {
  device: DeviceWithDetails | null;
  configurations: AssistantConfiguration[];
  isLoading?: boolean;
  onAddUser: () => void;
  onLeave: (deviceId: string) => void;
  onSetActiveConfiguration: (relationId: string, configurationId: string) => void;
}

function UserIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" /><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" /></svg>;
}

function CloseIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

export function DeviceDetails({ device, configurations, isLoading, onAddUser, onLeave, onSetActiveConfiguration }: DeviceDetailsProps) {
  if (!device) {
    return (
      <div className="panel empty-state">
        <div>
          <div className="empty-state-icon" />
          <p className="empty-title">Select a device to view details</p>
          <p className="empty-text">Choose a device from the list to manage its users</p>
        </div>
      </div>
    );
  }

  return (
    <div className="panel">
      <div className="panel-body">
        <div className="details-header">
          <div>
            <div className="details-title-row">
              <h2 className="panel-title mb-0">{device.name || 'Unnamed device'}</h2>
              <span className="status-badge">Active</span>
            </div>
            {isLoading && <div className="text-muted small mt-2">Loading detail...</div>}
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-purple btn-icon-label" onClick={onAddUser}>+ <span>Add User</span></button>
          </div>
        </div>

        <h3 className="section-title">Users ({device.users.length})</h3>
        <div className="user-list">
          {device.users.map((user) => {
            const relation = device.relations.find((item) => item.userId === user.id);
            const activeConfiguration = configurations.find((configuration) => configuration.id === relation?.activeConfigurationId);

            return (
              <div key={user.id} className="user-row">
                <div className="avatar"><UserIcon /></div>
                <div className="min-w-0">
                  <div>{user.firstName} {user.lastName}</div>
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    <span className={`role-badge ${user.userRole === 'admin' ? 'admin' : ''}`}>{user.userRole}</span>
                    <span className="user-meta">Config: {activeConfiguration?.assistantName || relation?.activeConfigurationId || 'none'}</span>
                  </div>
                  {relation && configurations.length > 0 && (
                    <select
                      className="form-select form-select-sm mt-2"
                      value={relation.activeConfigurationId ?? ''}
                      onChange={(event) => onSetActiveConfiguration(relation.id, event.target.value)}
                    >
                      <option value="" disabled>Select configuration</option>
                      {configurations.map((configuration) => <option key={configuration.id} value={configuration.id}>{configuration.assistantName}</option>)}
                    </select>
                  )}
                </div>
                <button className="icon-danger" title="Remove user" type="button"><CloseIcon /></button>
              </div>
            );
          })}

          {device.users.length === 0 && <div className="p-4 text-center text-muted">No users assigned to this device.</div>}
        </div>
      </div>
    </div>
  );
}
