import { 
  Home, 
  Users, 
  ClipboardCheck, 
  ReceiptText, 
  BarChart, 
  Settings
} from 'lucide-react';

export const SIDE_MENU_DATA = [
  {
    id: '01',
    label: 'Dashboard',
    icon: Home,
    path: '/dashboard',
  },
  {
    id: '02',
    label: 'Patients',
    icon: Users,
    path: '/patients',
  },
  {
    id: '03',
    label: 'Tests',
    icon: ClipboardCheck,
    path: '/test-reports',
  },
  {
    id: '04',
    label: 'Reports',
    icon: ReceiptText,
    path: '/reports',
  },
  {
    id: '05',
    label: 'Analytics',
    icon: BarChart,
    path: '/analytics',
  },
  {
    id: '06',
    label: 'Administrative',
    icon: Settings,
    path: '/admin',
  },
];