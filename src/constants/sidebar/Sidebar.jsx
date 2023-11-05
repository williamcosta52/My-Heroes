import Button from '@mui/material/Button';
import { SidebarStyle } from './sidebarStyle';
import defaultProfile from '../../assets/defaultProfile.jpg';

export default function Sidebar({ profileName, profileImage }) {
  return (
    <SidebarStyle>
      <div>
        <img src={profileImage ? profileImage : defaultProfile} />
        <h2>{profileName}</h2>
        <Button variant='contained'>Cartas</Button>
        <Button variant='contained'>Editar Perfil</Button>
      </div>
    </SidebarStyle>
  );
}
