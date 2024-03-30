import './App.css';
import { TransactionsTable } from './components/Content';
import { NavbarDark } from './components/Navbar';
import { SidebarWithCta } from './components/Sidebar';

function App() {
  return (
    <div className="flex gap-4">
      <SidebarWithCta />
      <div className="gap-5" style={{ flex: '1'}}>
        <NavbarDark />
        <div className='mt-5'>
        <TransactionsTable />
        </div>
      </div>
    </div>
  );
}

export default App;
