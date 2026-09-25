import './Navbar.css';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'recuerdos', label: 'Recuerdos' },
    { id: 'sorpresas', label: 'Regalos' },
    { id: 'mensajes', label: 'Mensajes' }
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item">
            <button
              className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
