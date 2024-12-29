import { Dialog } from './../../components/Prime';

import { ReactNode } from 'react';
import './Modal.scss';


export interface IModal {
  visible: boolean;
  onHide: () => void;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'center';
  isEllipseVisible?: boolean;
  classname?: string
}

export const Modal: React.FC<IModal> = ({
  visible,
  onHide,
  children,
  position = 'center',
  classname
}) => {

  const content = () => (
    <div
      className="flex flex-column align-items-center p-5 sm:p-8 border-round-xl overflow-y-auto gap-4"
      style={{ backgroundColor: 'var(--day-blue)' }}
    >
      {children}
    </div>
  );

  return (
    <Dialog
      visible={visible}
      modal
      closeOnEscape
      onHide={onHide}
      position={position}
      className={classname ?? 'modal'}
      content={content}
      header={null}
    />
  );
};
