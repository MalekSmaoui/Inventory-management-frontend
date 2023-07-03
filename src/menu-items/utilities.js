// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  ManageAccountsOutlinedIcon,
  DirectionsCarFilledOutlinedIcon,
  AttachMoneyOutlinedIcon,
  RvHookupOutlinedIcon
  
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'User Management',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.ManageAccountsOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Categories',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.RvHookupOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Sales',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.AttachMoneyOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Car Brands',
      type: 'collapse',
      icon: icons.DirectionsCarFilledOutlinedIcon,
      children: [
        {
          id: 'tabler-icons',
          title: 'Add Brand',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Brand List',
          type: 'item',
          url: '/icons/material-icons',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default utilities;
