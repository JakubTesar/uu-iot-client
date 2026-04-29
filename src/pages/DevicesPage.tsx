import { useState } from 'react';
import { AddUserModal } from '../components/devices/AddUserModal';
import { ClaimDeviceModal } from '../components/devices/ClaimDeviceModal';
import { DeviceDetails } from '../components/devices/DeviceDetails';
import { DeviceFormModal } from '../components/devices/DeviceFormModal';
import { DeviceList } from '../components/devices/DeviceList';
import { StateAlert } from '../components/StateAlert';
import { useAsyncAction } from '../hooks/useAsyncAction';
import { useConfigurations } from '../hooks/useConfigurations';
import { useDevices } from '../hooks/useDevices';

export function DevicesPage() {
  const devices = useDevices();
  const configurations = useConfigurations();
  const action = useAsyncAction();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const selectedDeviceId = devices.selectedDevice?.id;

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Devices</h1>
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-soft" onClick={() => setShowClaimModal(true)}>Claim Device</button>
          <button className="btn btn-purple btn-icon-label" onClick={() => setShowCreateModal(true)}>+ <span>Add Device</span></button>
        </div>
      </div>

      <StateAlert error={devices.error || configurations.error || action.error} />

      <div className="content-grid">
        <div>
          {devices.isLoading ? <div className="panel panel-body text-muted">Loading devices...</div> : (
            <DeviceList
              devices={devices.devices}
              selectedDeviceId={devices.selectedDeviceId}
              onSelect={devices.setSelectedDeviceId}
              onDelete={(deviceId) => {
                if (confirm('Are you sure you want to delete this device?')) void action.run(() => devices.deleteDevice(deviceId));
              }}
            />
          )}
        </div>
        <DeviceDetails
          device={devices.selectedDevice}
          configurations={configurations.configurations}
          isLoading={devices.isDetailLoading}
          onAddUser={() => setShowAddUserModal(true)}
          onLeave={(deviceId) => {
            if (confirm('Do you really want to leave this device?')) void action.run(() => devices.leaveDevice(deviceId));
          }}
          onSetActiveConfiguration={(relationId, configurationId) => void action.run(() => devices.setActiveConfiguration(relationId, configurationId))}
        />
      </div>

      {showCreateModal && <DeviceFormModal onClose={() => setShowCreateModal(false)} isSubmitting={action.isSubmitting} onCreate={(name) => action.run(() => devices.createDevice(name))} />}
      {showClaimModal && <ClaimDeviceModal onClose={() => setShowClaimModal(false)} isSubmitting={action.isSubmitting} onClaim={(deviceId) => action.run(() => devices.claimDevice(deviceId))} />}
      {showAddUserModal && selectedDeviceId && <AddUserModal onClose={() => setShowAddUserModal(false)} isSubmitting={action.isSubmitting} onAddUser={(userId) => action.run(() => devices.addUserToDevice(userId, selectedDeviceId))} />}
    </>
  );
}
