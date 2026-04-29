import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

interface Device {
    id: string;
    name: string;
    activeUserRelation: string;
    users: DeviceUser[];
}

interface DeviceUser {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    userRole: 'user' | 'admin';
    activeConfigurationId: string;
}

export function DevicesPage() {
    const navigate = useNavigate();
    const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showAddDeviceModal, setShowAddDeviceModal] = useState(false);
    const [activeUser, setActiveUser] = useState(false);

    const [devices, setDevices] = useState<Device[]>([
        {
            id: '1',
            name: 'Living Room Device',
            activeUserRelation: 'rel-1',
            users: [
                {
                    id: 'rel-1',
                    userId: 'user-1',
                    firstName: 'John',
                    lastName: 'Doe',
                    userRole: 'admin',
                    activeConfigurationId: 'config-1',
                },
                {
                    id: 'rel-2',
                    userId: 'user-2',
                    firstName: 'Jane',
                    lastName: 'Smith',
                    userRole: 'user',
                    activeConfigurationId: 'config-2',
                },
            ],
        },
        {
            id: '2',
            name: 'Bedroom Device',
            activeUserRelation: 'rel-3',
            users: [
                {
                    id: 'rel-3',
                    userId: 'user-1',
                    firstName: 'John',
                    lastName: 'Doe',
                    userRole: 'admin',
                    activeConfigurationId: 'config-3',
                },
            ],
        },
        {
            id: '3',
            name: 'Kitchen Device',
            activeUserRelation: 'rel-4',
            users: [
                {
                    id: 'rel-4',
                    userId: 'user-3',
                    firstName: 'Bob',
                    lastName: 'Wilson',
                    userRole: 'admin',
                    activeConfigurationId: 'config-4',
                },
            ],
        },
    ]);

    const handleSelectDevice = (device: Device) => {
        setSelectedDevice(device);
    };

    const handleRemoveUser = (deviceId: string, userId: string) => {
        if (confirm('Are you sure you want to remove this user from the device?')) {
            setDevices(devices.map(device => {
                if (device.id === deviceId) {
                    return {
                        ...device,
                        users: device.users.filter(u => u.id !== userId),
                    };
                }
                return device;
            }));

            if (selectedDevice?.id === deviceId) {
                const updatedDevice = devices.find(d => d.id === deviceId);
                if (updatedDevice) {
                    setSelectedDevice({
                        ...updatedDevice,
                        users: updatedDevice.users.filter(u => u.id !== userId),
                    });
                }
            }
        }
    };

    const handleDeleteDevice = (deviceId: string) => {
        if (confirm('Are you sure you want to delete this device?')) {
            setDevices(devices.filter(d => d.id !== deviceId));
            if (selectedDevice?.id === deviceId) {
                setSelectedDevice(null);
            }
        }
    };

    return (
        <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #e9e4f0 0%, #d3cce3 100%)'}}>
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 col-lg-2 bg-white position-sticky vh-100 border-end">
                        <div className="p-4">
                            <div className="d-flex align-items-center mb-4">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7c3aed"/>
                                    <path d="M2 17L12 22L22 17" stroke="#7c3aed" strokeWidth="2"/>
                                </svg>
                                <h5 className="mb-0 ms-2" style={{color: '#7c3aed'}}>AI Assistant</h5>
                            </div>

                            <nav className="nav flex-column">
                                <a
                                    href="#"
                                    className="nav-link d-flex align-items-center mb-2 active"
                                    style={{color: '#7c3aed'}}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/devices');
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="me-2">
                                        <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor"
                                              strokeWidth="2"/>
                                        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    Devices
                                </a>
                                <a
                                    href="#"
                                    className="nav-link d-flex align-items-center mb-2 text-muted"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/configurations');
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="me-2">
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    Configurations
                                </a>
                            </nav>
                        </div>

                        <div className="position-absolute bottom-0 start-0 p-4 w-100 border-top">
                            <button className="btn btn-outline-secondary btn-sm">
                                Log out
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9 col-lg-10">
                        <div className="p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2>Devices</h2>
                                <button
                                    className="btn d-flex align-items-center justify-content-between"
                                    style={{backgroundColor: '#7c3aed', color: 'white'}}
                                    onClick={() => setShowAddDeviceModal(true)}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="me-2">
                                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    Add Device
                                </button>
                            </div>

                            <div className="row">
                                {/* Device List */}
                                <div className="col-lg-5">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body p-0">
                                            <div className="list-group list-group-flush">
                                                {devices.map((device) => (
                                                    <div
                                                        key={device.id}
                                                        className={`list-group-item list-group-item-action ${selectedDevice?.id === device.id ? 'active' : ''}`}
                                                        style={{
                                                            cursor: 'pointer',
                                                            backgroundColor: selectedDevice?.id === device.id ? '#7c3aed' : 'white',
                                                            color: selectedDevice?.id === device.id ? 'white' : 'black',
                                                        }}
                                                        onClick={() => handleSelectDevice(device)}
                                                    >
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center flex-grow-1">
                                                                <div
                                                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                    style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                    }}
                                                                >
                                                                    <svg width="20" height="20" viewBox="0 0 24 24"
                                                                         fill="none">
                                                                        <rect x="4" y="2" width="16" height="20" rx="2"
                                                                              stroke={selectedDevice?.id === device.id ? 'white' : 'currentColor'}
                                                                              strokeWidth="2"/>
                                                                        <path d="M12 18h.01"
                                                                              stroke={selectedDevice?.id === device.id ? 'white' : 'currentColor'}
                                                                              strokeWidth="2"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1">{device.name}</h6>
                                                                    <div className="d-flex align-items-center">
                                                                        <small
                                                                            className={selectedDevice?.id === device.id ? 'text-white-50' : 'text-muted'}>
                                                                            {device.users.length} user{device.users.length !== 1 ? 's' : ''}
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                className="btn btn-sm btn-link text-danger"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleDeleteDevice(device.id);
                                                                }}
                                                                style={{color: selectedDevice?.id === device.id ? 'white' : undefined}}
                                                            >
                                                                <svg width="16" height="16" viewBox="0 0 24 24"
                                                                     fill="none">
                                                                    <path
                                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                        stroke="currentColor" strokeWidth="2"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}

                                                {devices.length === 0 && (
                                                    <div className="list-group-item text-center py-5">
                                                        <p className="text-muted mb-0">No devices found</p>
                                                        <small className="text-muted">Click "Add Device" to create
                                                            one</small>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Device Users */}
                                <div className="col-lg-7">
                                    {selectedDevice ? (
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="d-flex gap-3">
                                                        <h4>{selectedDevice.name}</h4>
                                                        <button onClick={() => {
                                                            setActiveUser(true)
                                                        }} className="btn btn-success"
                                                                disabled={activeUser}>
                                                            Active
                                                        </button>
                                                    </div>
                                                    <button
                                                        className="btn btn-sm d-flex align-items-center justify-content-between "
                                                        style={{backgroundColor: '#7c3aed', color: 'white'}}
                                                        onClick={() => setShowAddUserModal(true)}
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                             className="me-2">
                                                            <path d="M12 5v14M5 12h14" stroke="currentColor"
                                                                  strokeWidth="2"/>
                                                        </svg>
                                                        Add User
                                                    </button>
                                                </div>

                                                <h5 className="mb-3">Users ({selectedDevice.users.length})</h5>

                                                <div className="list-group">
                                                    {selectedDevice.users.map((user) => (
                                                        <div key={user.id} className="list-group-item">
                                                            <div
                                                                className="d-flex align-items-center justify-content-between">
                                                                <div className="d-flex align-items-center flex-grow-1">
                                                                    <div
                                                                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                        style={{
                                                                            width: '40px',
                                                                            height: '40px',
                                                                            backgroundColor: '#7c3aed20',
                                                                        }}
                                                                    >
                                                                        <svg width="20" height="20" viewBox="0 0 24 24"
                                                                             fill="none">
                                                                            <circle cx="12" cy="8" r="4"
                                                                                    stroke="#7c3aed" strokeWidth="2"/>
                                                                            <path
                                                                                d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
                                                                                stroke="#7c3aed" strokeWidth="2"/>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="mb-1">
                                                                            {user.firstName} {user.lastName}
                                                                        </h6>
                                                                        <div className="d-flex align-items-center">
                                      <span
                                          className={`badge me-2 ${user.userRole === 'admin' ? 'bg-primary' : 'bg-secondary'}`}>
                                        {user.userRole}
                                      </span>
                                                                            <small
                                                                                className="text-muted">Config: {user.activeConfigurationId}</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    className="btn btn-sm btn-link text-danger"
                                                                    onClick={() => handleRemoveUser(selectedDevice.id, user.id)}
                                                                >
                                                                    <svg width="16" height="16" viewBox="0 0 24 24"
                                                                         fill="none">
                                                                        <path d="M6 18L18 6M6 6l12 12"
                                                                              stroke="currentColor" strokeWidth="2"/>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {selectedDevice.users.length === 0 && (
                                                        <div className="list-group-item text-center py-5">
                                                            <p className="text-muted mb-0">No users assigned to this
                                                                device</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-body p-5 text-center">
                                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none"
                                                     className="mb-3">
                                                    <rect x="4" y="2" width="16" height="20" rx="2" stroke="#ccc"
                                                          strokeWidth="2"/>
                                                    <path d="M12 18h.01" stroke="#ccc" strokeWidth="2"/>
                                                </svg>
                                                <h5 className="text-muted">Select a device to view details</h5>
                                                <p className="text-muted">Choose a device from the list to manage its
                                                    users</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add User Modal */}
            {showAddUserModal && (
                <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add User to Device</h5>
                                <button className="btn-close" onClick={() => setShowAddUserModal(false)}/>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter first name"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter last name"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <select className="form-select">
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                {/*<div className="mb-3">*/}
                                {/*  <label className="form-label">Configuration ID</label>*/}
                                {/*  <input type="text" className="form-control" placeholder="Enter configuration ID" />*/}
                                {/*</div>*/}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowAddUserModal(false)}>
                                    Cancel
                                </button>
                                <button className="btn" style={{backgroundColor: '#7c3aed', color: 'white'}}>
                                    Add User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Device Modal */}
            {showAddDeviceModal && (
                <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Device</h5>
                                <button className="btn-close" onClick={() => setShowAddDeviceModal(false)}/>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Device Name</label>
                                    <input type="text" className="form-control" placeholder="Enter device name"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowAddDeviceModal(false)}>
                                    Cancel
                                </button>
                                <button className="btn" style={{backgroundColor: '#7c3aed', color: 'white'}}>
                                    Add Device
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
