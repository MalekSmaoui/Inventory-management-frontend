// assets
import { IconKey } from '@tabler/icons';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
// constant
const icons = {
  IconKey,
  GarageOutlinedIcon
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pieces Management',
  caption: 'Pieces',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Pieces',
      type: 'collapse',
      icon: icons.GarageOutlinedIcon,

      children: [
        {
          id: 'login3',
          title: 'Pieces List',
          type: 'item',
          url: '/pieces/pieces-list',
          breadcrumbs: false
        },
        {
          id: 'register3',
          title: 'Add Piece',
          type: 'item',
          url: '/pieces/add-piece',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default pages;
