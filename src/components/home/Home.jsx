import Sidebar from '../../constants/sidebar/Sidebar';
import { Container, EditNameIcon } from './homeStyle';
import defaultProfile from '../../assets/defaultProfile.jpg';
import Button from '@mui/material/Button';
import { useContext, useEffect, useRef, useState } from 'react';
import UsernameBox from '../../constants/username/UsernameBox';
import axios from 'axios';
import heroesContext from '../../context/heroes.context';

export function Home() {
  const [name, setName] = useState(false);
  const [profileName, setProfileName] = useState('Usuário');
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const fileInputRef = useRef(null);
  const { setHeroes } = useContext(heroesContext);
  useEffect(() => {
    if (localStorage.getItem('name')) {
      setProfileName(localStorage.getItem('name'));
    }
    const image = localStorage.getItem('image');
    if (image) {
      setProfileImage(localStorage.getItem('image'));
      localStorage.setItem('image', image);
    }
    const url = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
    axios
      .get(url)
      .then((r) => {
        setHeroes(r.data);
      })
      .catch((e) => console.log(e));
  }, []);
  function switchUsername(e) {
    e.preventDefault();
    setName(true);
  }
  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(selectedFile);
        localStorage.setItem('image', imageUrl);
        setProfileImage(imageUrl);
      } else {
        console.log('O arquivo selecionado não é uma imagem.');
      }
    }
  }
  function handleButtonClick() {
    fileInputRef.current.click();
  }
  return (
    <Container>
      <Sidebar
        profileName={profileName}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />
      <div>
        <img src={profileImage} />
        <h2>
          {profileName} {<EditNameIcon onClick={switchUsername} />}
        </h2>
        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <Button variant='contained' onClick={handleButtonClick}>
          Editar foto
        </Button>
      </div>
      {name && (
        <UsernameBox setName={setName} setProfileName={setProfileName} />
      )}
    </Container>
  );
}
