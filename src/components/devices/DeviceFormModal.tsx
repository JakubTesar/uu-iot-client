import { type FormEvent, useState } from 'react';
import { Modal } from '../Modal';

interface DeviceFormModalProps {
  onClose: () => void;
  onCreate: (name: string) => Promise<void>;
  isSubmitting?: boolean;
}

export function DeviceFormModal({ onClose, onCreate, isSubmitting }: DeviceFormModalProps) {
  const [name, setName] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await onCreate(name.trim());
    onClose();
  };

  return (
    <Modal title="Add device" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <label className="form-label">Device name</label>
          <input className="form-control" value={name} onChange={(event) => setName(event.target.value)} placeholder="Living room" required />
        </div>
        <div className="modal-footer d-flex gap-2 mt-2">
          <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn" style={{ backgroundColor: '#7c3aed', color: 'white' }} disabled={isSubmitting}>Create</button>
        </div>
      </form>
    </Modal>
  );
}
